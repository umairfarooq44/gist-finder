import { Languages } from '../utils/languageColorCode';
interface IOwner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface IFile {
  filename: string;
  type: string;
  language: Languages;
  raw_url: string;
  size: number;
}

export interface IGist {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  node_id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: { [name: string]: IFile };
  languages: Languages[];
  public: boolean;
  created_at: string;
  updated_at: string;
  description: string;
  comments: number;
  user: any;
  comments_url: string;
  owner: IOwner;
  truncated: boolean;
}

export interface IFork {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  node_id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: { [name: string]: IFile };
  public: boolean;
  created_at: string;
  updated_at: string;
  description: any;
  comments: number;
  user: any;
  comments_url: string;
  owner: IOwner;
}
