import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Work from "../components/Work";
import About from "../components/About";
import Illustrations from "../components/Illustrations";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Work />
      <Illustrations />
      <About />
    </div>
  );
};

export default HomePage;
