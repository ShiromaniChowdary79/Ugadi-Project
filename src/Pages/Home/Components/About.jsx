import React from "react";
// import "./Home.css";
import video from "../../../assets/video.mp4";

const About = () => {
  return (
    <div className="hero">
      <video src={video} autoPlay loop muted ></video>
      <div className="content">
        <h1>ఉగాది శుభాకాంక్షలు</h1>
        <p>
          The Telugu community at IISER invites everyone to join us for the
          Ugadi celebrations.
        </p>
        <p>May this Ugadi brings Joy and Happiness in your life's</p>
      </div>
    </div>
  );
};

export default About;
