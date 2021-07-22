import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="top">
      <div className="header">
        <div className="header-container">
          <div className="description">
            <p className="heading1">Hello, I am a</p>
            <div className="heading2">
              <h1 className="p">Software Engineer +</h1>
              <h1 className="y">Visual Thinker +</h1>
              <h1 className="b">Illustrator</h1>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/jadyhome/image/upload/v1614201614/portfolio/flowers3.png"
            alt="flower-bg"
            className="flowers"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
