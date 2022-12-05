import React from 'react';
import './assets/styles/App.css';
import { Outlet } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
// import { getContacts } from "../contacts";

// export async function loader() {
//   const contacts = await getContacts();
//   return { contacts };
// }

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
