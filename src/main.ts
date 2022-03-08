import * as core from '@actions/core';
import {inspect} from 'util';
import {getInputs, getOctokit, getOwnerRepo} from './common';
import {createActionRequest, IRequestPayload} from './create-action-request';

async function run(): Promise<void> {
  const inputs = getInputs();
  const [owner, repo] = getOwnerRepo(inputs.owner, inputs.repository);
  const octokit = getOctokit(inputs.authToken, 'github-action-create-check-report');
  let request: IRequestPayload;

  try {
    request = createActionRequest(owner, repo, inputs);
    core.debug(`☀️ request: ${inspect(request)}`);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(`Error creating request object: ${error.message}`);
    }
    return;
  }

  if (octokit === null) {
    core.setFailed('Error creating octokit:\noctokit was null');
  } else {
    try {
      await octokit.checks.create(request);
    } catch (error) {
      core.debug(inspect(error));
      if (error instanceof Error) {
        core.setFailed(`Error setting status:\n${error.message}\nRequest object:\n${JSON.stringify(request, null, 2)}`);
      }
    }
  }
}

run();
