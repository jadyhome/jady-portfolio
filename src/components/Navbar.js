import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">{<Link to="/" className="name-logo">jh</Link>}</div>
      <ul className="navbar-links">
        <li className="nav-links">{<Link to="/works" className="nlinks">works</Link>}</li>
        <li className="nav-links">{<Link to="/illustrations" className="nlinks">illustrations</Link>}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
