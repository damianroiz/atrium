import React from "react";
import "./components.css";
import { ImLocation2 } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsArrowUpCircleFill } from "react-icons/bs";
import SocialIcons from "./SocialIcons";
import { Link } from "wouter";

const Footer = () => {
  return (
    <footer>
      <div className="contact-info">
        <ul>        
          <li>340 Midpark Way SE - Suite 140 Calgary, AB, T2X 1P1</li>
          <li>admin@atriumphysiotherapy.com</li>
          <li>+1(403)-255 4461</li>
          <li>+1(403)-259 8776</li>
        </ul>
        <div className="social-media">
        </div>
      </div>

      <div>

      </div>
      <div>

      </div>
    </footer>
  )
};

export default Footer;
