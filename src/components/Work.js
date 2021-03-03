import React from "react";
import "../styles/Work.css";

const Work = () => {
  return (
    <div className="work">
      <h1 className="section-title">Works</h1>
      <div className="cards-container">
        <div className="work2">
          <div className="work-top">
            <h2>arting</h2>
            <p>
              <a
                href="https://github.com/jadyhome/arting"
                target="_blank"
                className="links"
              >
                github
              </a>
              <a
                href="https://arting.herokuapp.com/"
                target="_blank"
                className="links"
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
        </div>

        <div className="work3">
          <div className="work-top">
            <h2>petsagram</h2>
            <p>
              <a
                href="https://github.com/davey4/petsagram"
                target="_blank"
                className="links"
              >
                github
              </a>
              <a
                href="https://petsagram-105.herokuapp.com/"
                target="_blank"
                className="links"
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
        </div>

        <div className="work4">
          <div className="work-top">
            <h2>mother-tongue</h2>
            <p>
              <a
                href="https://github.com/jadyhome/mother-tongue"
                target="_blank"
                className="links"
              >
                github
              </a>
              <a
                href="https://mother-tongue.herokuapp.com/"
                target="_blank"
                className="links"
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
        </div>

        <div className="work5">
          <div className="work-top">
            <h2>portfolio</h2>
            <p>
              <a
                href="https://github.com/jadyhome/jady-portfolio"
                target="_blank"
                className="links"
              >
                github
              </a>
              <a href="" target="_blank" className="links">
                website
              </a>
            </p>
          </div>
          <div className="image">
            <img
              src="https://res.cloudinary.com/jadyhome/image/upload/v1614800370/portfolio/portfolio.png"
              alt="portfolio-pic"
              className="work-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
