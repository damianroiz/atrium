import React from "react";
import logo from "../assets/images/atriumLogo.png";
import "./components.css";
import { ImLocation2 } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import { Link } from "wouter";

const SectionInfo = () => {
  return (
    //Add logo img inside the following div
    <div id="inicio" className="sectioninfo">
      <div className="logo-container">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
    </div>

    <div className="contact-info-container">  
      <div className="contact-info-card">
        <div>
          <i className="card-icon far fa-envelope"></i>
          <p>admin@atriumphysiotherapy.com</p>
        </div>
        <div>
          <i className="card-icon fas fa-map-marker-alt"></i>
          <p className="info-address">340 Midpark Way SE - Suite 140<br /> 
          Calgary, AB,  T2X 1P1</p>
        </div>
        <div>
          <i className="card-icon fas fa-phone"></i>
          <p>+1(403)-255 4461</p>
        </div>
        <div>
          <i className="card-icon fas fa-fax"></i>
          <p>+1(403)-259 8776</p>
        </div>
      </div>
    </div>
    <div className="appointment-btn-section">
          <Link href="/Appointment">
            <a className="appointment-btn cta-btn">Book Your Appointment</a>
          </Link>
    </div>
    </div>
  );
};

export default SectionInfo;
