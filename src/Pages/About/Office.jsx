import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import clinic1 from "../../assets/images/clinic1.jpg";
import clinic2 from "../../assets/images/clinic2.jpg";
import clinic3 from "../../assets/images/clinic3.png";
import clinic4 from "../../assets/images/clinic4.png";
import clinic5 from "../../assets/images/clinic5.png";


const Office = () => {
  return (
    <section className="office">
      <h2 className="title-carousel">Our Office</h2>
        <Carousel className="carousel-container" autoPlay>
          <div >
            <img src={clinic1}/>
          </div>
          <div>
            <img src={clinic2} />
          </div>
          <div>
            <img src={clinic3} />
          </div>
          <div>
            <img src={clinic4} />
          </div>
          <div>
            <img src={clinic5} />
          </div>
        </Carousel>
    </section>
  );
};

export default Office;
