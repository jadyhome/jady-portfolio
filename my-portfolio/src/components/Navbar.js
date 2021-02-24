import React from "react";
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="name-logo">JADY HOM</div>
      <ul>
        <li className="nav-links">
          <a href="">Works</a>
        </li>
        <li className="nav-links">
          <a href="">Illustrations</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
