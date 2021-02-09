import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <h3>hyjady@gmail.com</h3>
        <div className="social-icons">
          <a href="https://github.com/jadyhome">
            <img
              src="https://res.cloudinary.com/jadyhome/image/upload/v1612906936/portfolio/skill-icons/github.png"
              alt="github-icon"
              className="icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/jadyhom/">
            <img
              src="https://res.cloudinary.com/jadyhome/image/upload/v1612907231/portfolio/skill-icons/linkedin.png"
              alt="linkedin-icon"
              className="icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
