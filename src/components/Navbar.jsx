import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  const {links} = props;
  return (
    <div className="nav">
      {links.map((link) => {
        return <Link key={link.name} className="defLink" to={link.url}>{link.name}</Link>
      })}
    </div>
  );
};
