import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
      <Hero />
      <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
