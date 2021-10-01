import React from "react";
import "../styles/About.css";

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
              Hello! 👋
              <br />
              <strong>I'm Jady</strong>, a <u>web developer</u>,{" "}
              <em>illustrator</em>, <strong>graphic designer</strong>, and plant
              lover based in <em>New York City</em>.
              <br />
            </h2>
            <br />
            <div className="socials">
              <a
                href="https://github.com/jadyhome"
                rel="noopener noreferrer"
                target="_blank"
                className="social-links"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/in/jadyhom/"
                rel="noopener noreferrer"
                target="_blank"
                className="social-links"
              >
                linkedin
              </a>
              <br />
              <br />
              <a
                href="mailto:hyjady@gmail.com"
                class="email"
                className="social-links"
              >
                hyjady@gmail.com
              </a>
            </div>
          </section>

          <section className="skills">
            <h2 className="tech">
              Here are a few technologies I've been working with:
            </h2>
            <ol>
              <ul>HTML5 + CSS3</ul>
              <ul>JavaScript</ul>
              <ul>React</ul>
              <ul>Node.js</ul>
              <ul>Express</ul>
              <ul>MongoDB</ul>
              <ul>PostgreSQL</ul>
              <ul>Procreate</ul>
              <ul>Figma</ul>
            </ol>
          </section>
        </div>
      </div>
      <footer className="copyright">
        Created and Designed by Jady Hom © 2021
      </footer>
    </div>
  );
};

export default About;
