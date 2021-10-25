import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "../components/Navbar";
import { botanydata } from "../botanydata";
import { artworksdata } from "../artworksdata";
import "../styles/Artworks.css";

const FlowerSeries = () => {
  const [botany, setBotany] = useState([]);
  const [otherartworks, setOtherArtworks] = useState([]);

  useEffect(() => {
    fetchBotany();
    fetchOthers();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const fetchBotany = () => {
    setBotany(botanydata);
  };

  const fetchOthers = () => {
    setOtherArtworks(artworksdata);
  };

  return (
    <div className="flowerseries">
      <Navbar />
      <div className="bot-container">
        <div className="series-info">
          <h1 className="series-title">Flower Series</h1>
          <h2 className="type">DIGITAL</h2>
          <p>
            I used Procreate to create a series of gigital illustrations. I had
            wanted to do a series of flowers and plants within the color
            spectrums from the rainbow.
          </p>
        </div>
        {botany.map((bot, index) => {
          return (
            <div key={index} className="bots">
              <div className="bot-images">{bot.image}</div>
            </div>
          );
        })}
      </div>

      <h1 className="section-title">Other Artworks</h1>
      <div className="other-artworks">
        {otherartworks.map((otherart, index) => {
          if (otherart.title !== "Flowers + Plants Series") {
            return (
              <div key={index} className="arts">
                <div className="artcover-image">{otherart.image}</div>
                <div className="art-top">
                  <h2 className="art-title">{otherart.title}</h2>
                </div>
                <div className="brief">
                  <h2 className="art-brief">{otherart.brief_info}</h2>
                </div>
              </div>
            );
          }
        })}
      </div>

      <footer className="Jady">Created and Designed by Jady Hom © 2021</footer>
    </div>
  );
};

export default FlowerSeries;
