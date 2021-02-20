import style from "../../sass/main.module.scss";
import Image from "next/image";

interface Props {
  image: string;
  text: string;
  link: boolean;
  href?: string;
}

function UserContacts() {
    const UserContacts = (props: Props) => {
      if (props.link === true) {
        return (
          <div className={style.boxContact}>
            <picture>
              <Image
                src={`/images/${props.image}`}
                width="30px"
                height="30px"
              />
            </picture>
            <a href={props.href} className={style.link}>
              {props.text}
            </a>
          </div>
        );
      } else {
        return (
          <div className={style.boxContact}>
            <picture>
              <Image
                src={`/images/${props.image}`}
                width="30px"
                height="30px"
              />
            </picture>
            <span className={style.text}>{props.text}</span>
          </div>
        );
      }
    }

    return (
      <section className={style.userContacts}>
        <UserContacts link={false} image="building.svg" text="Infosulf" />
        <UserContacts
          link={true}
          href="#"
          image="email.svg"
          text="@rafaaaaaa"
        />
        <UserContacts
          link={true}
          href="#"
          image="link.svg"
          text="www.com.br....."
        />
        <UserContacts link={true} href="#" image="twitter.svg" text="@rafa" />
        <UserContacts link={true} href="#" image="github2.svg" text="oi" />
      </section>
    );
}

export default UserContacts;