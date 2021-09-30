import { useState, useEffect } from "react";
import { workdata } from "../workdata";
import "../styles/Work.css";

const Work = () => {
  const [data, setDatas] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    setDatas(workdata);
  };

  return (
    <div className="work">
      <h1 className="section-title">Works</h1>
      <div className="cards-container">
        {data.map((work, index) => {
          return (
            <div key={index} className="works">
              <div className="work-image">
                <p>{work.image}</p>
              </div>
              <div className="work-top">
                <h2>{work.title}</h2>
                <div className="sites">
                  <p>{work.github}</p>
                  <p>{work.website}</p>
                </div>
              </div>
              <h3 className="techs">{work.techs}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
