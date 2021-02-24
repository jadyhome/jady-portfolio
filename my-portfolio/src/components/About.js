import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-box">
        <div className="about-me">
          <img
            src="https://res.cloudinary.com/jadyhome/image/upload/v1612905294/portfolio/skill-icons/profile_pic.jpg"
            alt="profile-picture"
            className="profile-pic"
          />

          <section className="about-info">
            <h2 className="hello">Hello! <br />My name is Jady 😊</h2>
            <br />
            I am a visual thinker and goal-oriented software engineer.
            <br />
            I have a passion for creating simple, efficient, and accessible user
            interfaces and experiences.
            <br />
            <br />
            <strong>Contact me @ hyjady@gmail.com</strong>
            <br />
            <br />
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
          </section>

          <section className="skills">
          <h2>Here are a few technologies I've been working with:</h2>
          <ol>
            <ul>HTML + CSS</ul>
            <ul>Javascript</ul>
            <ul>React</ul>
            <ul>Node.js</ul>
            <ul>Express</ul>
            <ul>MongoDB</ul>
            <ul>PostgreSQL</ul>
            <ul>Python</ul>
          </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
