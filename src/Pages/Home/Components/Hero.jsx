import React from "react";

import image1 from "../../../../src/assets/coupon1.jpg";
import image2 from "../../../../src/assets/coupon2.jpg";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
      <div className="payment">
        <div className="coupon">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="coupon-content">
        <h2>
          To avail this coupons , Make sure to do payment using the QR provided
          and fill the google form
        </h2>
      </div>
      
     <div className="button">
     <Link to="/Payment">
          <button className="button">Click Here</button>
        </Link>
     </div>
    </>
  );
};

export default Hero;
