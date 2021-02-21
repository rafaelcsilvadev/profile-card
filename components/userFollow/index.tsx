import style from "../../sass/main.module.scss";

function UserFollow() {
  return (
    <div className={style.boxFollow}>
      <div>
        <h6>Repositórios</h6>
        <p>50</p>
      </div>
      <div>
        <h6>Seguidores</h6>
        <p>50</p>
      </div>
      <div>
        <h6>Seguindo</h6>
        <p>50</p>
      </div>
    </div>
  );
}

export default UserFollow;