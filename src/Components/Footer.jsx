import React from "react";
import { ImLocation2 } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsArrowUpCircleFill } from "react-icons/bs";
import SocialIcons from "./SocialIcons";
import { Link } from "wouter";

const Footer = () => {
  return (
<footer>
  <div className="footer-sections">
  <i className="fa fa-circle-chevron-up" aria-hidden="true"><a href="/"></a></i>
    <div className="contact-info">
      <img className="footer-logo" src="https://www.atriumphysiotherapy.com/images/atriumLogo.png" alt="Company Logo" />
      <ul className="contact-list">
        <li><i className="fa fa-map-marker-alt" aria-hidden="true"></i>
          <p>340 Midpark Way SE - Suite 140 <span>Calgary, AB, T2X 1P1</span></p>
        </li>
        <li><i className="fa fa-envelope" aria-hidden="true"></i>
          admin@atriumphysiotherapy.com</li>
        <li><i className="fa fa-phone-alt" aria-hidden="true"></i>+1(403)-255 4461</li>
        <li><i className="fa fa-fax" aria-hidden="true"></i>+1(403)-259 8776</li>
      </ul>
      <div className="social-media">
        <a href="https://www.facebook.com/Atriumphysio/" target="_blank" rel="noopener">
        <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/atriumphysiotherapy/" target="_blank" rel="noopener">
        <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/hala-basily-05872829/" target="_blank" rel="noopener">
        <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/"target="_blank" rel="noopener">
        <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>

    <div className="links">
      <p>Links</p>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/Services">Services</a></li>
        <li><a href="/blog">Blog</a>Blog</li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/covid19">Covid-19 Alert</a></li>
      </ul>
    </div>

    <div className="hours-section">
      <p>Operating Hours</p>
      <ul>
        <li>Monday:<span>8:00 am - 7:00 pm</span></li>
        <li>Tuesday:<span>8:00 am - 5:00 pm</span></li>
        <li>Tuesday:<span>8:00 am - 5:00 pm</span></li>
        <li>Wednesday:<span>8:00 am - 7:00 pm</span></li>
        <li>Thursday:<span>8:00 am - 3:00 pm</span></li>
        <li>Friday:<span>8:00 am - 7:00 pm</span></li>
        <li>Saturday:<span>Closed</span></li>
        <li>Sunday:<span>Closed</span></li>
      </ul>
    </div>

  </div>

  <div className="footnote">
    <div className="terms">
      <Link className="footnote-link" href="#">Terms and Conditions</Link> | <Link className="footnote-link" href="#">Privacy Policy</Link>
    </div>
    <small className="copyright">Copyright ©2022 - All rights reserved.</small>
  </div>
</footer>
  )
};

export default Footer;

