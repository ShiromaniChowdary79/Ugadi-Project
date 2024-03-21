import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import image from "../../assets/pune logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <div className="logo-image">
          <img src={image} alt="" />

          <div className="logo-content">
            <h3>भारतीय विज्ञान शिक्षा एवं अनुसंधान संस्थान ,पुणे</h3>
            <h3>INDIAN INSTITUTE OF SCIENCE EDUCATION AND RESEARCH ,PUNE</h3>
            <p>
              An Autonomus institution of the Ministry of Education , Govt of
              India
            </p>
          </div>
        </div>
        <div className="details">
          <h3>ABOUT</h3>
          <h3>CONTACT US</h3>
          <Link to="/Payment">
            <h3>PAYMENT</h3>
          </Link>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
