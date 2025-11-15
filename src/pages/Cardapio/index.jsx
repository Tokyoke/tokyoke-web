import Cardapio from "../../components/cardapio/Cardapio";
import Titulo from "../../components/cardapio/Titulo";
import style from "./style.module.css"

export default function CardapioPage() {
  return (
    <div className={style.container}>
      <main className={style.main}>
      <Titulo/>
      <Cardapio /> 
      </main>
    </div>
  );
}
