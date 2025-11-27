import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import AdminSidebar from "./components/_global/AdminSidebar";
import Header from "./components/_global/Header";
import Footer from "./components/_global/Footer";
import HomePage from "./pages/Home";
import CardapioPage from "./pages/Cardapio";
import AdminPage from "./pages/Admin";
import MenuManager from "./components/admin/MenuManager";
import AdminMenuManagerPage from "./pages/Admin/MenuManager";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main
              style={{
                minHeight: "100svh",
                width: "100%",
                background: "#07060a" /* dark background */,
              }}
            >
              <Header />
              <Outlet />
              <Footer />
            </main>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="cardapio" element={<CardapioPage />} />
        </Route>
        <Route
          path="/admin"
          element={
            <div style={{ display: "flex" }}>
              <AdminSidebar />
              <div style={{ flex: 1 }}>
                <Outlet />
              </div>
            </div>
          }
        >
          <Route index element={<AdminPage />} />
          <Route path="menu" element={<AdminMenuManagerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
