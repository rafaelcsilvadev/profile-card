import style from "../../sass/main.module.scss";
import UserFollow from "../userFollow";
import Image from "next/image";

function UserInfo() {
    return (
      <section className={style.userInfo}>
        <picture className={style.bgTop}>
          <Image src="/images/space1.png" width="400px" height="250px" />
        </picture>
        <picture className={style.avatar}>
          <Image src="/images/avatar.jpg" width="150px" height="150px" />
        </picture>
        <div className={style.userData}>
          <h6>Rafael Couto Silva</h6>
          <p>rcs</p>
          <p>Sou apaixonado por frontend.</p>
        </div>
        <UserFollow />
      </section>
    );
}

export default UserInfo;