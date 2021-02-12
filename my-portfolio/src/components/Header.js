import React from "react";

const Header = () => {
  return (
    <div className="top">
      <div className="header">
        <div className="header-container">
        <h1 className="description">
          Hello!
          <br /> I am a <br /> Software Engineer + <br /> Visual Thinker +{" "}
          <br /> Illustrator
        </h1>
          <img
            src="https://res.cloudinary.com/jadyhome/image/upload/v1613165559/portfolio/skill-icons/flowers_mk3j0k.png"
            alt="flower-bg"
            className="flowers"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
