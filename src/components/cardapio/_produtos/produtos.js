export const produtoCardapios = {
  "petiscos": [
    {
      titulo: "Porções & Pestiscos",
      itens: [
        {
          id: 0,
          nome: "Batata Frita Tokyokê",
          descricao: "Porção generosa com cheddar e bacon crocante.",
          preco: 42.00
        },
        {
          id: 1,
          nome: "Frango a Passarinho",
          descricao: "Cortes de frango fritos com alho e salsinha.",
          preco: 48.00
        },
        {
          id: 2,
          nome: "Pastelzinhos Mistos",
          descricao: "12 unidades (carne, queijo e pizza).",
          preco: 39.00
        },
        {
          id: 3,
          nome: "Tábua de Frios",
          descricao: "Seleção de queijos, salames e azeitonas.",
          preco: 65.00
        }
      ]
    }
  ],
  "bebidas": [
    {
      titulo: "Coquetéis da Casa",
      itens: [
        {
          id: 0,
          nome: "Gin Tônica Clássico",
          descricao: "Gin, água tônica, limão e especiarias.",
          preco: 32.00,
          tipo: 1
        },
        {
          id: 1,
          nome: "Caipirinha de Saquê",
          descricao: "Saquê, morango, kiwi ou maracujá.",
          preco: 28.00,
          tipo: 1
        },
        {
          id: 2,
          nome: "Moscow Mule",
          descricao: "Vodka, espuma de gengibre e limão.",
          preco: 35.00,
          tipo: 1
        }
      ]
    },
    {
      titulo: "Cervejas & Não-Alcoólicos",
      itens: [
        {
          id: 0,
          nome: "Heineken 600ml",
          descricao: "Cerveja premium lager.",
          preco: 18.00,
          tipo: 2
        },
        {
          id: 1,
          nome: "Soda Italiana",
          descricao: "Maçã verde, frutas vermelhas ou limão siciliano.",
          preco: 16.00,
          tipo: 2
        },
        {
          id: 2,
          nome: "Água Mineral",
          descricao: "Com ou sem gás.",
          preco: 6.00,
          tipo: 2
        }
      ]
    }
  ],
  "sobremesas": [
    {
      titulo: "Para Adoçar",
      itens: [
        {
          id: 0,
          nome: "Petit Gâteau",
          descricao: "Bolo de chocolate com sorvete de creme.",
          preco: 28.00
        },
        {
          id: 1,
          nome: "Taça Tokyokê",
          descricao: "Sorvete, brigadeiro, morangos e chantilly.",
          preco: 34.00
        },
        {
          id: 2,
          nome: "Café Espresso",
          descricao: "Café puro e intenso.",
          preco: 8.00
        }
      ]
    }
  ]
}

export const nomeTabelas = Object.keys(produtoCardapios)