import React from "react";
import "../styles/About.css"

const About = () => {
  return (
    <div className="about">
      <h1 className="section-title">About Me</h1>
      <div className="about-box">
        <div className="about-me">
          <img
            src="https://res.cloudinary.com/jadyhome/image/upload/v1612905294/portfolio/skill-icons/profile_pic.jpg"
            alt="profile-picture"
            className="profile-pic"
          />

          <section className="about-info">
            <h2 className="hello">
              Hello! <br />
              My name is Jady. 😊
            </h2>
            <br />
            I am a visual thinker and goal-oriented software engineer.
            <br />
            I have a passion for creating simple, efficient, and accessible user
            interfaces and experiences.
            <br />
            <br />
            <br />
            <div className="socials">
              <a href="https://github.com/jadyhome" className="social-links">github</a>
              <a href="https://www.linkedin.com/in/jadyhom/" className="social-links">linkedin</a>
              <br />
              <br />
              <a href="mailto:hyjady@gmail.com" class="email" className="social-links">
                hyjady@gmail.com
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
      <footer className="copyright">© 2021 by Jady Hom</footer>
    </div>
  );
};

export default About;
