import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import clinic1 from "../../assets/images/clinic1.jpg";
import clinic3 from "../../assets/images/clinic4.jpg";
import clinic4 from "../../assets/images/clinic5.png";
import clinic5 from "../../assets/images/clinic6.png";
import clinic6 from "../../assets/images/clinic7.png";
import "../../../src/style.css";

const Carrusel = () => {
  return (
    <div className="carousel">
      <h1 className="title-carousel">Our Office</h1>
      <div className="carousel-container">
        <Carousel className="Car" autoPlay>
          <div>
            <img src={clinic1} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={clinic3} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={clinic4} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={clinic5} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={clinic6} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Carrusel;
