import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Header/Navbar";

export const Layout = () => {
  return (
    <div>
      <Navbar
        links={[
          { url: "/", name: "Inicio" },
          { url: "projects", name: "Projetos" },
          { url: "contact", name: "Contato"}
        ]}
      />
      <Outlet />
      <Footer />
    </div>
  );
};
