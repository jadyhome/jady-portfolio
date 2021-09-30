import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {
          <Link to="/" className="name-logo">
            Jady Hom
          </Link>
        }
      </div>
    </nav>
  );
};

export default Navbar;
