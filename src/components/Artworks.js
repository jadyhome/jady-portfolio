import React, { useState, useEffect } from "react";
import { artworksdata } from "../artworksdata";
import "../styles/Artworks.css";

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = () => {
    setArtworks(artworksdata);
  };

  return (
    <div className="artworks">
      <h1 className="section-title">Artworks</h1>
      <div className="artworks-container">
        {artworks.map((art, index) => {
          return (
            <div key={index} className="arts">
              <div className="artcover-image">{art.image}</div>
              <div className="art-top">
                <h2 className="art-title">{art.title}</h2>
              </div>
              <div className="brief">
                <h2 className="art-brief">{art.brief_info}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Artworks;
