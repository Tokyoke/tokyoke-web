import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/_global/Header";
import Footer from "./components/_global/Footer";
import HomePage from "./pages/Home";
import CardapioPage from "./pages/Cardapio";
import AdminPage from "./pages/Admin";
import AdminUsers from "./pages/Admin/Users";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cardapio" element={<CardapioPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
