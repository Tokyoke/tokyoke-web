import { useState } from "react";
import AdminSidebar from "../../../components/_global/AdminSidebar";
import styles from "./style.module.css";

const initialUsers = [
  { id: 1, name: "Ana Costa", email: "ana.c@email.com", phone: "(11) 98888-1111", cpf: "111.222.333-44", status: "Ativo" },
  { id: 2, name: "Bruno Lima", email: "bruno.l@email.com", phone: "(21) 97777-2222", cpf: "222.333.444-55", status: "Ativo" },
  { id: 3, name: "Carlos Silva", email: "carlos.s@email.com", phone: "(11) 96666-3333", cpf: "333.444.555-66", status: "Bloqueado" },
  { id: 4, name: "Daniela Alves", email: "dani.a@email.com", phone: "(31) 95555-4444", cpf: "444.555.666-77", status: "Ativo" },
];

export default function AdminUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [q, setQ] = useState("");

  const filtered = users.filter((u) =>
    (u.name + u.email + u.cpf).toLowerCase().includes(q.toLowerCase())
  );

  function deleteUser(id) {
    if (!confirm("Deseja realmente excluir este usuário?")) return;
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  function editUser(id) {
    // placeholder - abrir modal/rota de edição
    alert("Editar usuário: " + id);
  }

  return (
    <div className={styles.wrapper}>
      <AdminSidebar />

      <div className={styles.content}>
        <h1 className={styles.title}>Gerenciar Usuários</h1>

        <div className={styles.headerRow}>
          <div className={styles.infoBox}>
            <h3>Lista de Usuários</h3>
            <p>Total de {users.length} usuário(s) encontrado(s).</p>
          </div>

          <div className={styles.searchWrap}>
            <input
              className={styles.search}
              placeholder="Buscar por nome, email ou CPF..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Contato</th>
                <th>CPF</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div className={styles.clientName}>{u.name}</div>
                    <div className={styles.clientEmail}>{u.email}</div>
                  </td>
                  <td>{u.phone}</td>
                  <td>{u.cpf}</td>
                  <td>
                    <span className={u.status === "Ativo" ? styles.badgeActive : styles.badgeBlocked}>{u.status}</span>
                  </td>
                  <td>
                    <button className={styles.editBtn} onClick={() => editUser(u.id)}>✎</button>
                    <button className={styles.delBtn} onClick={() => deleteUser(u.id)}>🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
