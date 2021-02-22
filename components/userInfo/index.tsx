import style from "../../sass/main.module.scss";
import Image from "next/image";
import useFetch from "../../hook/useFetch";

function UserInfo() {
  /* const { data, mutate } = useFetch(storage);


  if (!data) {
    return (
      <section className={style.noData}>
        <Image src="/images/reload.svg" width="300px" height="300px"  className={style.realod}/>
        <div className={style.message}>
          <span>Carregando, por favor aguarde.</span>
        </div>
      </section>
    );
  } 

  return (
    <section className={style.userInfo}>
      <picture className={style.bgTop}>
        <Image src="/images/space1.png" width="400px" height="250px" />
      </picture>
      <picture className={style.avatar}>
        <img src={data.avatar_url} width="150px" height="150px" />
      </picture>
      <div className={style.userData}>
        <h6>{data.name}</h6>
        <p>{data.location}</p>
        <p>{data.bio}.</p>
      </div>
      <div className={style.boxFollow}>
        <div>
          <h6>Repositórios</h6>
          <p>{data.public_repos}</p>
        </div>
        <div>
          <h6>Seguidores</h6>
          <p>{data.followers}</p>
        </div>
        <div>
          <h6>Seguindo</h6>
          <p>{data.following}</p>
        </div>
      </div>
    </section>
  );*/
}

export default UserInfo;
