import style from "../../sass/main.module.scss";
import Image from "next/image";

function Header() {
  return (
    <header className={style.header}>
      <Image src="/images/github.svg" width="32px" height="32px" />
    </header>
  );
}

export default Header;