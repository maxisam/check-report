import {RestEndpointMethodTypes} from '@octokit/rest';
import {IInputs} from './modals';
// import { stripIndent as markdown } from "common-tags";
export type IRequestPayload = RestEndpointMethodTypes['checks']['create']['parameters'];

export function createActionRequest(owner: string, repo: string, inputs: IInputs): IRequestPayload {
  return {
    owner,
    repo,
    name: inputs.checkName,
    head_sha: inputs.sha,
    status: inputs.status,
    details_url: inputs.detailsUrl,
    conclusion: inputs.conclusion,
    output: {
      title: inputs.checkName,
      summary: inputs.summary,
      text: inputs.content,
      images: [
        {
          alt: inputs.checkName,
          image_url: inputs.imageUrl,
          caption: inputs.summary
        }
      ]
    }
  };
}
