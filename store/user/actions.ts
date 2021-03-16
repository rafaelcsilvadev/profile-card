import { UserStringsAction, UserAction, UserState } from './types';

export function changeUser(newUser: UserState): UserAction {
  return {
    type: UserStringsAction.CHANGE_USER,
    avatar_url: newUser.avatar_url,
    name: newUser.name,
    bio: newUser.bio,
    public_repos: newUser.public_repos,
    followers: newUser.followers,
    following: newUser.following,
  };
}
