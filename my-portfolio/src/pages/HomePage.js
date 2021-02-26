import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Work from '../components/Work'
import About from '../components/About'

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Work />
      <About />
    </div>
  );
};

export default HomePage;
