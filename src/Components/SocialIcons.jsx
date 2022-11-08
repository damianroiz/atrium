import React from "react";
import "./components.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="socialicons">
      <ul className="icons-redes">
        <li className="container-icons">
          <a
            className="icon"
            href="https://twitter.com/HealthPlusPhysio"
            target="__blank"
          >
            <BsTwitter />
          </a>
        </li>
        <li className="container-icons">
          <a
            className="icon"
            href="https://www.facebook.com/Atriumphysio/"
            target="__blank"
          >
            <FaFacebookF />
          </a>
        </li>
        <li className="container-icons">
          <a className="icon" href="" target="__blank">
            <BsInstagram />
          </a>
        </li>
        <li className="container-icons">
          <a
            className="icon"
            href="https://www.google.com/maps/dir/4.616599,-74.0652613/ATRIUM+PHYSIOTHERAPY+CLINIC+(+Formerly+Health+Plus+Physiotherapy)/@29.0785706,-119.2902096,3.79z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x537176876b320175:0x33fad0328ed93e75!2m2!1d-114.0629294!2d50.9083807"
            target="__blank"
          >
            <FaMapMarkedAlt />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
