import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="top">
      <div className="header">
        <div className="header-container">
          <div className="description">
            <p className="heading1">
              Hello, I am a
              <br /> Software Engineer
              <br /> Visual Thinker
              <br /> Illustrator
            </p>
            <p className="heading2">
              <br />I am a visual learner, thinker, and detail-oriented software
              engineer who is eager to learn, design, and develop. I have a
              passion for creating <em>fun</em>, <strong>interesting</strong>,
              and <u>thoughtful</u> designs and websites.
            </p>
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
