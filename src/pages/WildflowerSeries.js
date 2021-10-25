import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "../components/Navbar";
import { wildflowerdataOne } from "../wildflowerdataOne";
import { wildflowerdata } from "../wildflowerdata";
import { artworksdata } from "../artworksdata";
import "../styles/Artworks.css";

const WildflowerSeries = () => {
  const [otherartworks, setOtherArtworks] = useState([]);
  const [wildflowersOne, setWildflowersOne] = useState([]);
  const [wildflowers, setWildflowers] = useState([]);

  useEffect(() => {
    fetchWildflowersOne();
    fetchWildflowers();
    fetchOthers();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const fetchWildflowersOne = () => {
    setWildflowersOne(wildflowerdataOne);
  };

  const fetchWildflowers = () => {
    setWildflowers(wildflowerdata);
  };

  const fetchOthers = () => {
    setOtherArtworks(artworksdata);
  };

  return (
    <div className="wildflowerseries">
      <Navbar />
      <div className="wild-container">
        <div className="series-info">
          <h1 className="series-title">Wildflower Series</h1>
          <h2 className="type">DIGITAL + TRADITIONAL</h2>
          <p>
            A series of wildflower illustrations done traditionally with ink and
            watercolor. This series was made into a small artbook using Adobe
            InDesign and Photoshop. The concept of this artbook is an A - Z of
            wildflowers with their respective informations. (With the exception
            of U and X)
          </p>
        </div>

        {wildflowersOne.map((wildOne, index) => {
          return (
            <div key={index} className="wilds">
              <div className="wild-images">{wildOne.image}</div>
            </div>
          );
        })}
      </div>

      <div className="wild-container2">
        {wildflowers.map((wild, index) => {
          return (
            <div key={index} className="wilds">
              <div className="wild-images">{wild.image}</div>
            </div>
          );
        })}
      </div>

      <h1 className="section-title2">Other Artworks</h1>
      <div className="other-artworks">
        {otherartworks.map((otherart, index) => {
          if (otherart.title !== "Wildflower Series") {
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

export default WildflowerSeries;
