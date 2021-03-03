import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">{<Link to="/" className="name-logo">jh</Link>}</div>
      <ul className="navbar-links">
        <li className="nav-links">{<Link to="/works" className="links">works</Link>}</li>
        <li className="nav-links">{<Link to="/illustrations" className="links">illustrations</Link>}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
