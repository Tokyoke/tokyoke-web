// MenuManager.jsx
import React, { useState } from "react";
import styles from "./MenuManager.module.css";

// Dados mockados para simular a leitura (READ) dos itens.
const initialMenuItems = {
  Petiscos: [
    { id: 1, nome: "Batata Frita Tokyoke", preco: 42.0 },
    { id: 2, nome: "Frango a Passarinho", preco: 48.0 },
    // Adicione mais itens aqui
  ],
  Bebidas: [
    { id: 3, nome: "Cerveja Artesanal", preco: 25.0 },
    { id: 4, nome: "Refrigerante 2L", preco: 12.0 },
  ],
  Sobremesas: [{ id: 5, nome: "Petit Gateau", preco: 30.0 }],
};

const MenuManager = () => {
  const [activeTab, setActiveTab] = useState("Petiscos");
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  const currentItems = menuItems[activeTab];

  // --- Funções CRUD ---

  const handleEdit = (id) => {
    // Lógica para abrir um modal ou formulário de edição (UPDATE)
    console.log(`Editar item ${id} da categoria ${activeTab}`);
    alert(`Ação de Editar Item ${id} (UPDATE) - Implementar Modal/Formulário.`);
  };

  const handleDelete = (id) => {
    // Lógica para exclusão (DELETE)
    if (window.confirm(`Tem certeza que deseja excluir o item ${id}?`)) {
      setMenuItems((prevItems) => ({
        ...prevItems,
        [activeTab]: prevItems[activeTab].filter((item) => item.id !== id),
      }));
      console.log(`Item ${id} excluído de ${activeTab}`);
    }
  };

  const handleAddItem = () => {
    // Lógica para adicionar (CREATE)
    console.log(`Adicionar novo item em ${activeTab}`);
    alert(
      `Ação de Adicionar Item (CREATE) - Implementar Modal/Formulário de Inserção.`
    );
  };

  // Função para formatar o preço para BRL
  const formatPrice = (price) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <span className={styles.breadcrumb}>Painel Administrativo</span>
          <h1 className={styles.pageTitle}>Gerenciar Cardápio</h1>
        </div>

        {/* Botão de Adicionar Item (CREATE) */}
        <button className={styles.addButton} onClick={handleAddItem}>
          <span className={styles.plusIcon}>+</span> Adicionar Item
        </button>
      </header>

      {/* Navegação por Abas */}
      <div className={styles.tabsContainer}>
        {Object.keys(menuItems).map((category) => (
          <button
            key={category}
            className={`${styles.tabButton} ${
              activeTab === category ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab(category)}
          >
            {/* Ícone contextual: Petiscos: 🍖, Bebidas: 🍹, Sobremesas: 🍰 */}
            <span role="img" aria-label={category}>
              {category === "Petiscos" && "🍖"}
              {category === "Bebidas" && "🍹"}
              {category === "Sobremesas" && "🍰"}
            </span>{" "}
            {category}
          </button>
        ))}
      </div>

      {/* Tabela de Conteúdo */}
      <div className={styles.tableContainer}>
        <table className={styles.menuTable}>
          <thead>
            <tr>
              <th className={styles.columnName}>Nome</th>
              <th className={styles.columnPrice}>Preço</th>
              <th className={styles.columnActions}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className={styles.columnName}>{item.nome}</td>
                <td className={styles.columnPrice}>
                  {formatPrice(item.preco)}
                </td>
                <td className={styles.columnActions}>
                  {/* Botão de Editar (UPDATE) */}
                  <button
                    className={styles.actionButton}
                    onClick={() => handleEdit(item.id)}
                    aria-label="Editar"
                  >
                    <span role="img" aria-label="lápis">
                      ✏️
                    </span>
                  </button>

                  {/* Botão de Excluir (DELETE) */}
                  <button
                    className={`${styles.actionButton} ${styles.deleteButton}`}
                    onClick={() => handleDelete(item.id)}
                    aria-label="Excluir"
                  >
                    <span role="img" aria-label="lixeira">
                      🗑️
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuManager;
