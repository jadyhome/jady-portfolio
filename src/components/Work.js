import React from "react";
import "../styles/Work.css";

const Work = () => {
  return (
    <div className="work">
      <h1 className="section-title">Works</h1>
      <div className="cards-container">
        <div className="works">
          <div className="work-top">
            <h2>arting</h2>
            <p>
              <a
                href="https://github.com/jadyhome/arting"
                rel="noopener noreferrer"
                target="_blank"
                className="wlinks"
              >
                github
              </a>
              <a
                href="https://arting.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="wlinks"
              >
                website
              </a>
            </p>
          </div>
          <div className="image">
            <img
              src="https://res.cloudinary.com/jadyhome/image/upload/v1612896410/portfolio/arting-page.png"
              alt="arting-pic"
              className="work-image"
            />
          </div>
          <h4 className="techs">
            technologies ↴
            <br /> HTML5 + CSS3 + JavaScript + React
            <br /> Node.js + Express + MongoDB + Mongoose
          </h4>
        </div>

        <div className="works">
          <div className="work-top">
            <h2>petsagram</h2>
            <p>
              <a
                href="https://github.com/davey4/petsagram"
                rel="noopener noreferrer"
                target="_blank"
                className="wlinks"
              >
                github
              </a>
              <a
                href="https://petsagram-105.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="wlinks"
              >
                website
              </a>
            </p>
          </div>
          <div className="image">
            <img
              src="https://res.cloudinary.com/jadyhome/image/upload/v1612896333/portfolio/petsagram-page.png"
              alt="petsagram-pic"
              className="work-image"
            />
          </div>
          <h4 className="techs">
            technologies ↴
            <br /> HTML5 + CSS3 + JavaScript + React
            <br /> Node.js + Express + PostgreSQL
          </h4>
        </div>

        <div className="works">
          <div className="work-top">
            <h2>mother-tongue</h2>
            <p>
              <a
                href="https://github.com/jadyhome/mother-tongue"
                rel="noopener noreferrer"
                target="_blank"
                className="wlinks"
              >
                github
              </a>
              <a
                href="https://mother-tongue.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="wlinks"
              >
                website
              </a>
            </p>
          </div>
          <div className="image">
            <img
              src="https://res.cloudinary.com/jadyhome/image/upload/v1612896746/portfolio/mother-tongue.png"
              alt="mother-tongue-pic"
              className="work-image"
            />
          </div>
          <h4 className="techs">
            technologies ↴
            <br /> HTML5 + CSS3 + JavaScript + React
            <br /> Node.js + Express + PostgreSQL
          </h4>
        </div>

        <div className="works">
          <div className="work-top">
            <h2>blooming</h2>
            <p>
              <a
                href="https://github.com/jadyhome/blooming2"
                rel="noopener noreferrer"
                target="_blank"
                className="wlinks"
              >
                github
              </a>
              <a
                href="https://bloomingg.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
                className="wlinks"
              >
                website
              </a>
            </p>
          </div>
          <div className="image">
            <img
              src="https://res.cloudinary.com/jadyhome/image/upload/v1626717678/portfolio/blooming2.png"
              alt="blooming2-pic"
              className="work-image"
            />
          </div>
          <h4 className="techs">
            technologies ↴<br /> HTML5 + CSS3 + JavaScript + React + Figma
          </h4>
        </div>

        <div className="works">
          <div className="work-top">
            <h2>eggs&potatoes</h2>
            <p>
              <a
                href="https://github.com/jadyhome/egsandpotat"
                rel="noopener noreferrer"
                target="_blank"
                className="wlinks"
              >
                github
              </a>
              <a
                href="tbd"
                rel="noopener noreferrer"
                target="_blank"
                className="wlinks"
              >
                website
              </a>
            </p>
          </div>
          <div className="image">
            <img
              src="https://res.cloudinary.com/jadyhome/image/upload/v1626720632/portfolio/under-construction.png"
              alt="eggs&potatoes-pic"
              className="work-image"
            />
          </div>
          <h4 className="techs">
            🔧WORK IN PROGRESS!🔨
            <br />
            technologies ↴
            <br /> HTML5 + CSS3 + JavaScript + React + Figma + Procreate
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Work;
