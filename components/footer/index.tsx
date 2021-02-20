import style from "../../sass/main.module.scss";

function Footer() {
    return (
      <footer className={style.footer}>
        <div className={style.author}>
          <span>© Rafael Couto Silva</span>
          <a
            href="https://api.whatsapp.com/send?phone=+5524999644346"
            className={style.link}
          >
            (24) 9 9964-4346
          </a>
          <a href="mailto:rafaelcsilva016@outlook.com" className={style.link}>
            rafaelcsilva016@outlook.com
          </a>
        </div>
        <div className={style.icons}>
          Icons made by{" "}
          <a
            href="https://www.freepik.com"
            title="Freepik"
            className={style.link}
          >
            Freepik
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            className={style.link}
          >
            www.flaticon.com
          </a>
        </div>
      </footer>
    );
}

export default Footer;