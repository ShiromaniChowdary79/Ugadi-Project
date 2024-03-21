import React from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/pune logo.png";
import image from "../../../src/assets/QR.jpg";

const Payment = () => {
  return (
    <>
      <div className="log">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="pay">
        <div className="pay-img">
          <img src={image} alt="" />
        </div>
        <div className="pay-link">
          <h3>
            After the payment, please make sure that you have filled the form.
          </h3>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdFcToXwvGLWJaJk-HHTmy10q6oxl2jXhovSNcG98pDyfIGTg/viewform?embedded=true"
            width="500"
            height="500"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
};

export default Payment;
