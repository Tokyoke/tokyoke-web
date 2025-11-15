import style from "./style.module.css"

const ItemCardapio = ({nome, descricao, preco}) => (
    <div className={style.itemCardapio}>
      <div className={style.itemInfos}>
        <p className={style.itemNome}>{nome}</p>
        <p className={style.itemDescricao}>{descricao}</p>
      </div>
      <div className={style.itemPreco}>R${preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
    </div>
  )

export default function ConteudoCardapio({secoes}) {

  if(!Array.isArray(secoes)){
    return null
  }

 return (
   <>
   {secoes.map((secao, index) => (
    <div className={style.cardapioContainer} key={index}>
     <h2 className={style.tituloContainer}>{secao.titulo}</h2>
     <div className={style.cardapio}>
      {
        secao.itens.map(item =>(
          <ItemCardapio key={item.id}
          nome={item.nome}
          descricao={item.descricao}
          preco={item.preco}/>
        ))
      }
     </div>
   </div>
   ))}
   
   </>
 )
}




