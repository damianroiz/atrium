import React from "react";
import "./components.css";
import logo from "../assets/images/atriumLogo.png";
import { ImLocation2 } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsArrowUpCircleFill } from "react-icons/bs";
import SocialIcons from "./SocialIcons";
import { Link } from "wouter";

const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-container">
        <div className="left">
          <img className="footer-logo" src={logo} alt="logo" />
          <div>
            <div className="address">
              <div className="icon-f">
                <ImLocation2 />
              </div>
              <p>Address: #140 - 340 Midpark Way SE, T2X 1P1</p>
            </div>
            <div className="email">
              <div className="icon-f">
                <GrMail />
              </div>
              <p>Email: admin@atriumphysiotherapy.com</p>
            </div>
            <div className="phone">
              <div className="icon-f">
                <BsFillTelephoneFill />
              </div>
              <p>Phone: 403.255.4461</p>
            </div>
          </div>
          <div className="redes">
            <SocialIcons />
          </div>
        </div>
        <div class="mid">
          <h3 className="mid-title">Services</h3>
          <ul className="mid-list">
            <a href="">Physiotherapy</a>

            <a href="">Massage Therapy</a>

            <a href="">Laser Therapy</a>

            <a href="">Motor Vehicle Accident (MVA)</a>

            <a href="">Workplace Injures Progam (WCB)</a>

            <a href="">Custom Crafted Orthotics</a>
          </ul>
        </div>
        <div className="right">
          <h3 className="right-title">Operating Hours</h3>
          <li>Monday: 8:00am-7:00pm</li>
          <li>Tuesday: 8:00am-5:00pm</li>
          <li>Wednesday: 8:00am-7:00pm</li>
          <li>Thursday: 8:00am-3:00pm</li>
          <li>Friday: 8:00am-7:00pm</li>
          <li>Saturday: Closed</li>
          <li>Sunday: Closed</li>
        </div>
        <a className="back-to" href="#inicio">
          <BsArrowUpCircleFill />
        </a>
      </div>
      <div className="appointmentbtn footer-appo">
        <Link href="/Appointment">
          <a className="btn appointment">Make An Appointment</a>
        </Link>
      </div>
      <div className="copyright">
        <h2 className="copy">
          Created by{" "}
          <a className="by" href="#">
            OnPoint Media
          </a>
          {" | "}
          Copyright ©2022 All rights reserved
        </h2>
      </div>
    </div>
  );
};

export default Footer;
