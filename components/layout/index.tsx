import style from "../../sass/main.module.scss";
import Image from 'next/image';

function Layout({ children }) {
  return (
    <div>
      <header className={style.header}>
        <Image src="/images/github.svg" width="32px" height="32px" />
      </header>
      <main>{children}</main>
      <footer className={style.footer}>
          <span>
              © Rafael Couto Silva - 
          </span>
          <span>
              (24) 9 9964-4346 - 
          </span>
          <span>
               rafaelcsilva016@outlook.com
          </span>
      </footer>
    </div>
  );
}

export default Layout;
