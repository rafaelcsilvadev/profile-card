import { UserState, UserStringsAction, UserAction } from "./types";

const INITIAL_STATE: UserState = {
  avatar_url: "/images/smile.svg",
  name: "Smile",
  bio: "Informe um nome de usuário no campo acima.",
  public_repos: 0,
  followers: 0,
  following: 0,
};

function userReducer(state = INITIAL_STATE, action: UserAction) {  
  switch (action.type) {
    case UserStringsAction.CHANGE_USER:
      return {
        avatar_url: action.avatar_url,
        name: action.name,
        bio: action.bio,
        public_repos: action.public_repos | 0,
        followers: action.followers,
        following: action.following,
      };
    default:
      return state;
  }
}

export default userReducer;
