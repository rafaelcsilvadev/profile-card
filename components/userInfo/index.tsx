import style from "../../sass/main.module.scss";
import Image from "next/image";

function UserInfo() {
    return (
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
    );
}

export default UserInfo;