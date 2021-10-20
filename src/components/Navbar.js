import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {
          <NavLink to="/" className="name-logo">
            Jady Hom
          </NavLink>
        }
      </div>
    </nav>
  );
};

export default Navbar;
