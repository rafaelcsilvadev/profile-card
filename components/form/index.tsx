import style from "../../sass/main.module.scss";

function Form() {
    return (
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
    );
}

export default Form;