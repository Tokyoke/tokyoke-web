import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/_global/Header";
import Footer from "./components/_global/Footer";
import HomePage from "./pages/Home";
import CardapioPage from "./pages/Cardapio";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cardapio" element={<CardapioPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
