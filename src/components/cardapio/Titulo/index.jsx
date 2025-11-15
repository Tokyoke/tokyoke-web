import style from "./style.module.css";

export default function Titulo() {
  return (
    <section className={style.tituloContainer}>
      <h1 className={style.titulo}>Nosso Cardápio</h1>
      <p className={style.subTitulo}>
        Sabores e drinks feitos para acompanhar os maiores hits.
      </p>
    </section>
  );
}
