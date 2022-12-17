import React from "react";
import "../../Components/components.css"

export const BannerApoint = () => {
  return (
    <div className="banner-container">
        <div className="text-banner">
          <h2>We Provide High Quality Services</h2>
          <p>
            We believe that in order to maintain a pain free body it is
            necessary to understand a person's specific injury and prevent
            situations that might exacerbate or aggravate a condition.
          </p>
        </div>
        <div>
          <button className="appointment-btn">
            Book Your Appoinment
          </button>
        </div>
      </div>
  );
};
