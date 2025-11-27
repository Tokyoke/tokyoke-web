// Sidebar.jsx

import React from "react";
import "./Sidebar.css"; // O CSS para a sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span role="img" aria-label="música">
          🎵
        </span>{" "}
        TOKYOKE <span className="admin-text">Admin</span>
      </div>
      <nav className="nav-menu">
        <ul>
          <li className="nav-item">
            <a href="#dashboard">Dashboard</a>
          </li>
          <li className="nav-item">
            <a href="#reservas">Reservas</a>
          </li>
          <li className="nav-item active">
            <a href="#cardapio">Cardápio</a>
          </li>
          <li className="nav-item">
            <a href="#usuarios">Usuários</a>
          </li>
        </ul>
      </nav>
      <div className="footer-link">
        <span className="arrow-icon">←</span> Voltar ao site
      </div>
    </div>
  );
};

export default Sidebar;
