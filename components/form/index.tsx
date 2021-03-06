import React from "react";
import { FormEvent, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import style from "../../sass/main.module.scss";
import { UserState } from "../../store/user/types";
import * as UserActions from "../../store/user/actions";
import api from "../../services/api";

const Form: React.FC = ({ userDispatch }: any) => {
  const [user, setUser] = useState("");

  const handleShowUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newUser: UserState;

    await api
      .get(`/users/${user}`)
      .then((response) => {
        if (!response) {
          newUser = {
            avatar_url: "/images/load.svg",
            name: "Carregando...",
            bio: "Carregando...",
            public_repos: 0,
            followers: 0,
            following: 0,
          };
        }
        newUser = {
          avatar_url: response.data.avatar_url,
          name: response.data.name,
          bio: response.data.bio,
          public_repos: response.data.public_repos,
          followers: response.data.followers,
          following: response.data.following,
        };
      })
      .catch((error) => {
        if (error) {
          newUser = {
            avatar_url: "/images/sad.svg",
            name: "Sem dados.",
            bio: "Infelizmente não conseguimos achar o usuário.",
            public_repos: 0,
            followers: 0,
            following: 0,
          };

          return newUser;
        }
      });

    return userDispatch(newUser);
  };

  return (
    <section>
      <form onSubmit={handleShowUser} className={style.form}>
        <input
          type="text"
          placeholder="Digite um nome de usuário"
          className={style.input}
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit" className={style.button}>
          Pesquisar
        </button>
      </form>
    </section>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  userDispatch: (newUser: UserState) => {
    dispatch(UserActions.changeUser(newUser));
  },
});

export default connect(null, mapDispatchToProps)(Form);
