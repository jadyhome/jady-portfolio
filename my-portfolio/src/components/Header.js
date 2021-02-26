import React from "react";
import "../styles/Header.css"

const Header = () => {
  return (
    <div className="top">
      <div className="header">
        <div className="header-container">
          <div className="description">
            <p className="heading1">Hello, I am a</p>
            <h1 className="heading2">
              Software Engineer + <br />
              Visual Thinker + <br />
              Illustrator
            </h1>
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
