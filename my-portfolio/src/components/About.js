import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-me">
        <p className="about-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          src="https://res.cloudinary.com/jadyhome/image/upload/v1612905294/portfolio/skill-icons/profile_pic.jpg"
          alt="profile-picture"
          className="profile-pic"
        />
      </div>
    </div>
  );
};

export default About;
