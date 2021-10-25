import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "../components/Navbar";
import { artworksdata } from "../artworksdata";
import ReactPlayer from "react-player";
import "../styles/Artworks.css";

const ColorsProject = () => {
  const [otherartworks, setOtherArtworks] = useState([]);

  useEffect(() => {
    fetchOthers();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const fetchOthers = () => {
    setOtherArtworks(artworksdata);
  };

  return (
    <div className="colorsproj">
      <Navbar />
      <div className="colors-container">
        <div className="series-info">
          <h1 className="series-title">FEELING COLORS</h1>
          <h2 className="type">VIDEO</h2>
          <p className="colors-statement">
            <strong>FEELING COLORS.</strong> There are a lot of mundane things
            in life that we overlook. People all have their own daily routines
            and daily adventures. The favorite foods and drinks, the clothing
            styles, the methods of transportation, and the types of
            entertainment – all normal things we do each day. One thing many
            people tend to forget about are the colors. The world is full of
            colors. Nature produces so much color and the colors come in so many
            different hues, tints, tones, and shades. Many of the natural things
            on Earth have the brightest, boldest, and unique colors. Cherry
            Blossoms are pink, strawberries are red, leaves are green, and
            coffee grounds are brown. Feeling Colors will let viewers experience
            colors in a unique way. The audience will be able to closely observe
            the colorful mundane things in life. The colors will visually
            stimulate the audience. They are free to connect anything to the
            colors. For the color red, they can think of roses or apples. If
            they see the color yellow, they can think of lemons or sunflowers.
            This piece enables the audience to think and feel about the colors.
            It includes graphic colors to showcase my concept of colors seen
            daily. I notice different colors every day – the traffic lights, the
            different packaging, book covers, the way coffee changes colors by
            adding milk, the wide variety of fruits and flowers, people’s
            clothing, eyes and hair colors, and et cetera.
            <br />
            <br />
            Feeling Colors is part of a collective theme created by the students
            of the New Media Arts in Theory and Practice class and was showcased
            as an installation in Baruch College's library.
            <br />
            <br />
            <em>
              Videos were captured with SONY Cybershot DSC-W830 digital camera.
              <br />
              Video editting done with Adobe Creative Cloud AfterEffects.
            </em>
          </p>
        </div>

        <div className="player-wrapper">
          <ReactPlayer url="https://youtu.be/sROMMwvvJVQ" controls="true" />
        </div>
      </div>

      <h1 className="section-title2">Other Artworks</h1>
      <div className="other-artworks">
        {otherartworks.map((otherart, index) => {
          if (otherart.title !== "Feeling Colors") {
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

export default ColorsProject;
