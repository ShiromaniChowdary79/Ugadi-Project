import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import About from "./Components/About";
import Footer from "../../Components/Footer/Footer";

import Hero from "./Components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <About />
      <Hero/>
      <Footer />
    </div>
  );
};

export default Home;
