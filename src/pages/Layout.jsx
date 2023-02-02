import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const Layout = () => {
  return (
    <div>
      <Navbar
        links={[
          { url: "/", name: "Inicio" },
          // { url: "Construction", name: "Construction" },
          // { url: "projects", name: "Projetos" },
          // { url: "contact", name: "Contato"}
        ]}
      />
      <Outlet />
      <Footer />
    </div>
  )
}
