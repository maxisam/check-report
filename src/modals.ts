export enum INPUTS {
  authToken = 'authToken',
  owner = 'owner',
  repository = 'repository',
  checkName = 'checkName',
  sha = 'sha',
  status = 'status',
  conclusion = 'conclusion',
  summary = 'summary',
  content = 'content',
  detailsUrl = 'detailsUrl',
  imageUrl = 'imageUrl'
}

export interface IInputs {
  authToken: string;
  owner: string;
  repository: string;
  checkName: string;
  sha: string;
  status: string;
  conclusion: string;
  summary: string;
  content: string;
  detailsUrl: string;
  imageUrl: string;
}
