import Layout from "../components/layout";
import style from "../sass/main.module.scss";
import Image from "next/image";

interface Props {
  image: string;
  text: string;
  link: boolean;
  href?: string;
}

function UsersInfo(props: Props) {
  if (props.link === true) {
    return (
      <div className={style.boxContact}>
        <picture>
          <Image src={`/images/${props.image}`} width="30px" height="30px" />
        </picture>
        <a href={props.href} className={style.link}>{props.text}</a>
      </div>
    );
  } else {
    return (
      <div className={style.boxContact}>
        <picture>
          <Image src={`/images/${props.image}`} width="30px" height="30px" />
        </picture>
        <span className={style.text}>{props.text}</span>
      </div>
    );
  }
}

function Home() {
  return (
    <Layout>
      <section>
        <form className={style.form}>
          <input
            type="text"
            placeholder="Digita um nome de usuário"
            className={style.input}
          />
          <button type="submit" className={style.button}>
            Pesquisar
          </button>
        </form>
      </section>

      <section className={style.userInfo}>
        <picture className={style.avatar}>
          <Image src="/images/avatar.jpg" width="300px" height="300px" />
        </picture>
        <div className={style.userData}>
            <h6>Rafael Couto Silva</h6>
            <span>rcs</span>
            <div className={style.bio}>
              <span>Sou apaixonado por frontend.</span>
            </div>            
        </div>
        
      </section>
      <section className={style.userContacts}>
          <UsersInfo link={false} image="building.svg" text="Infosulf" />
          <UsersInfo link={true} href="#" image="email.svg" text="@rafaaaaaa" />
          <UsersInfo
            link={true}
            href="#"
            image="link.svg"
            text="www.com.br....."
          />
          <UsersInfo link={true} href="#" image="twitter.svg" text="@rafa" />
          <UsersInfo link={true} href="#" image="github2.svg" text="oi" />
      </section>
    </Layout>
  );
}

export default Home;
