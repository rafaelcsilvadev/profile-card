import React from "react";
import style from "../../sass/main.module.scss";
import { connect } from "react-redux";
import { UserState } from "../../store/user/types";

interface StateProps {
  userReducer: UserState;
}

const UserInfo: React.FC = ({ userState }: any) => (
  <section className={style.userInfo}>
    <picture className={style.bgTop}>
      <img src="/images/space1.png" width="400px" height="250px" />
    </picture>
    <picture className={style.avatar}>
      <img src={userState.avatar_url} width="150px" height="150px" />
    </picture>
    <div className={style.userData}>
      <h6>{userState.name}</h6>
      <p>{userState.location}</p>
      <p>{userState.bio}</p>
    </div>
    <div className={style.boxFollow}>
      <div>
        <h6>Repositórios</h6>
        <p>{userState.public_repos}</p>
      </div>
      <div>
        <h6>Seguidores</h6>
        <p>{userState.followers}</p>
      </div>
      <div>
        <h6>Seguindo</h6>
        <p>{userState.following}</p>
      </div>
    </div>
  </section>
);

const mapStateToProps = (state: StateProps) => ({
  userState: state.userReducer,
});

export default connect(mapStateToProps, null)(UserInfo);
