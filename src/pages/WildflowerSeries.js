import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { wildflowerdata } from "../wildflowerdata";
import { artworksdata } from "../artworksdata";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import wildflowerPDF from "../wildflowers.pdf";
import "../styles/Artworks.css";

const WildflowerSeries = () => {
  const [otherartworks, setOtherArtworks] = useState([]);
  const [wildflowers, setWildflowers] = useState([]);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchWildflowers();
    fetchOthers();
  }, []);

  const fetchWildflowers = () => {
    setWildflowers(wildflowerdata);
  };

  const fetchOthers = () => {
    setOtherArtworks(artworksdata);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div className="wildflowerseries">
      <Navbar />
      <div className="wild-container">
        <div className="series-info">
          <h1 className="series-title">Wildflower Series</h1>
          <p>
            A series of wildflower illustrations done traditionally with ink and
            watercolor. This series was made into a small artbook using Adobe
            InDesign and Photoshop. The concept of this artbook is an A - Z of
            wildflowers with their respective informations.
          </p>
        </div>

        {wildflowers.map((wild, index) => {
          return (
            <div key={index} className="wilds">
              <div className="wild-images">{wild.image}</div>
            </div>
          );
        })}

        <div className="pdf">
          {" "}
          PDF
          <Document
            file={wildflowerPDF}
            onLoadSuccess={onDocumentLoadSuccess}
            options={{
              cMapUrl: "cmaps/",
              cMapPacked: true,
            }}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="pdfButton">
            <p className="pgs">
              <button
                className="prevButton"
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
              >
                ←
              </button>{" "}
              {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}{" "}
              <button
                className="nextButton"
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                →
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="other-artworks">
        <h1 className="section-title">Other Artworks</h1>
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
