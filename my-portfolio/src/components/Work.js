import React from "react";

const Work = () => {
  return (
    <div className="work">
      <h1>Work</h1>
      <div className="cards-container">
        <div className="work1">
          <h2>blooming</h2>
          <div className="image">
            <img
              src="https://res.cloudinary.com/jadyhome/image/upload/v1612896668/portfolio/blooming.png"
              alt="blooming-pic"
              className="work-image"
            />
          </div>
          <p>github link</p>
          <p>deployed link</p>
        </div>

        <div className="work2">
          <h2>arting</h2>
          <div className="image">
            <img
              src="https://res.cloudinary.com/jadyhome/image/upload/v1612896410/portfolio/arting-page.png"
              alt="arting-pic"
              className="work-image"
            />
          </div>
          <p>github link</p>
          <p>deployed link</p>
        </div>

        <div className="work3">
          <h2>petsagram</h2>
          <div className="image">
            <img
              src="https://res.cloudinary.com/jadyhome/image/upload/v1612896333/portfolio/petsagram-page.png"
              alt="petsagram-pic"
              className="work-image"
            />
          </div>
          <p>github link</p>
          <p>deployed link</p>
        </div>

        <div className="work4">
          <h2>mother-tongue</h2>
          <div className="image">
            <img
              src="https://res.cloudinary.com/jadyhome/image/upload/v1612896746/portfolio/mother-tongue.png"
              alt="mother-tongue-pic"
              className="work-image"
            />
          </div>
          <p>github link</p>
          <p>deployed link</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
