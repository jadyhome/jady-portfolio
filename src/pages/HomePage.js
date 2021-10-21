import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Work from "../components/Work";
import About from "../components/About";
import Artworks from "../components/Artworks";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Work />
      <Artworks />
      <About />
    </div>
  );
};

export default HomePage;
