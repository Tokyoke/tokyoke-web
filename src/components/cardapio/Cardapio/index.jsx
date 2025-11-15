import style from "./style.module.css";
import { produtoCardapios, nomeTabelas } from "../_produtos/produtos";
import ConteudoCardapio from "../ConteudoCardapio";
import { useState } from "react";

const tabelasTitulos = {
  petiscos: "🍴 Petiscos",
  bebidas: "🍸 Bebidas",
  sobremesas: "🍰 Sobremesas",
};

export default function Cardapio() {
  const [tabelaAtiva, setTabelaAtiva] = useState("petiscos");

  const trocarTabela = (nomeTabela) => {
    setTabelaAtiva(nomeTabela);
  };

  const dadosAtuais = produtoCardapios[tabelaAtiva];

  return (
    <>
      <section className={style.cardapio}>
        <div className={style.navTabelas}>
          {nomeTabelas.map((nomeTabelas) => (
            <button
              key={nomeTabelas}
              onClick={() => trocarTabela(nomeTabelas)}
              className={style.botaoNavTabelas}
            >
              {tabelasTitulos[nomeTabelas]}
            </button>
          ))}
        </div>

        <ConteudoCardapio secoes={dadosAtuais} />
      </section>
    </>
  );
}
