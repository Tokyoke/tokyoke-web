import { useState } from "react";
import AdminSidebar from "../../components/_global/AdminSidebar";
import AdminCard from "../../components/_global/AdminCard";
import styles from "./style.module.css";

const initialReservations = [
  {
    id: 1,
    name: "Ana Costa",
    email: "ana.c@email.com",
    date: "26/10/2025 - 20:00",
    people: 6,
    status: "Pendente",
  },
  {
    id: 2,
    name: "Carlos Silva",
    email: "carlos.s@email.com",
    date: "25/10/2025 - 19:00",
    people: 4,
    status: "Confirmada",
  },
];

export default function AdminPage() {
  const [reservations, setReservations] = useState(initialReservations);

  function confirmReservation(id) {
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Confirmada" } : r))
    );
  }

  function cancelReservation(id) {
    setReservations((prev) => prev.filter((r) => r.id !== id));
  }

  const pendingCount = reservations.filter((r) => r.status === "Pendente").length;
  const todayCount = 12; // placeholder metric
  const newUsers = 38; // placeholder metric
  const occupancy = 72; // placeholder metric

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>Painel Administrativo</h1>

        <div className={styles.cardsRow}>
          <AdminCard title="Reservas Pendentes" value={pendingCount} subtitle="Aguardando sua aprovação" highlight />
          <AdminCard title="Reservas (Hoje)" value={todayCount} subtitle="+2 confirmadas desde ontem" />
          <AdminCard title="Novos Usuários" value={`+${newUsers}`} subtitle="Na última semana" />
          <AdminCard title="Taxa de Ocupação" value={`${occupancy}%`} subtitle="Média da semana" />
        </div>

        <section className={styles.recentSection}>
          <h2>Reservas Recentes</h2>
          <p className={styles.small}>Uma visão rápida das últimas solicitações.</p>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Data</th>
                <th>Pessoas</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r) => (
                <tr key={r.id}>
                  <td>
                    <div className={styles.clientName}>{r.name}</div>
                    <div className={styles.clientEmail}>{r.email}</div>
                  </td>
                  <td>{r.date}</td>
                  <td>{r.people}</td>
                  <td>
                    <span className={styles.status}>{r.status}</span>
                  </td>
                  <td>
                    {r.status === "Pendente" ? (
                      <div className={styles.actions}>
                        <button className={styles.confirm} onClick={() => confirmReservation(r.id)}>✔</button>
                        <button className={styles.cancel} onClick={() => cancelReservation(r.id)}>✖</button>
                      </div>
                    ) : (
                      <span className={styles.view}>Ver</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
