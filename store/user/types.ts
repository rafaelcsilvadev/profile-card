export enum UserStringsAction {
  CHANGE_USER = "@user/change_user",
}

export interface UserState {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface UserAction {
  type: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}
