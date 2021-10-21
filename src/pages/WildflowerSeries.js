import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { wildflowerdata } from "../wildflowerdata";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import wildflowerPDF from "../wildflowers.pdf";
import "../styles/Artworks.css";

const WildflowerSeries = () => {
  const [wildflowers, setWildflowers] = useState([]);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchWildflowers();
  }, []);

  const fetchWildflowers = () => {
    setWildflowers(wildflowerdata);
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
    </div>
  );
};

export default WildflowerSeries;
