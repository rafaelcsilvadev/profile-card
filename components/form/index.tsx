import { FormEvent, useState, useEffect } from "react";
import style from "../../sass/main.module.scss";

function Form() {
  const [user, setUser] = useState('');

  const handleShowUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
  };  

    return (
      <section>
        <form onSubmit={handleShowUser} className={style.form}>
          <input
            type="text"
            placeholder="Digita um nome de usuário"
            className={style.input}
            value={user}
            onChange = {(e) => setUser(e.target.value)}
          />
          <button type="submit" className={style.button}>
            Pesquisar
          </button>
        </form>
      </section>
    );
}

export default Form;