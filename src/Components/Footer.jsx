import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialIcons from './SocialIcons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#root" className={styles.back__to__top}>
        <i className="fa fa-circle-chevron-up" aria-hidden="true"></i>
      </a>
      <div className={styles.footer__container}>
        <div className={styles.contact__info}>
          <Logo type={'small'} />
          <ul className={styles.contact__list}>
            <li>
              <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
              <p>
                340 Midpark Way SE - Suite 140 <span>Calgary, AB, T2X 1P1</span>
              </p>
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <p>admin@atriumphysiotherapy.com</p>
            </li>
            <li>
              <i className="fa fa-phone-alt" aria-hidden="true"></i>
              <p>+1(403)-255 4461</p>
            </li>
            <li>
              <i className="fa fa-fax" aria-hidden="true"></i>
              <p>+1(403)-259 8776</p>
            </li>
          </ul>
          <SocialIcons />
        </div>

        <div className={styles.page__links}>
          <p>Links</p>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/Services">Treatments</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="#">Appointment</a>
            </li>
            <li>
              <a href="/faqs">Faqs</a>
            </li>
          </ul>
        </div>

        <div className={styles.hours}>
          <p>Operating Hours</p>
          <ul>
            <li>
              Monday:<span>8:00 am - 7:00 pm</span>
            </li>
            <li>
              Tuesday:<span>8:00 am - 5:00 pm</span>
            </li>
            <li>
              Tuesday:<span>8:00 am - 5:00 pm</span>
            </li>
            <li>
              Wednesday:<span>8:00 am - 7:00 pm</span>
            </li>
            <li>
              Thursday:<span>8:00 am - 3:00 pm</span>
            </li>
            <li>
              Friday:<span>8:00 am - 7:00 pm</span>
            </li>
            <li>
              Saturday:<span>Closed</span>
            </li>
            <li>
              Sunday:<span>Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footnote}>
        <div className={styles.terms}>
          <Link className={styles.footnote__link} to="/treatments">
            Terms and Conditions
          </Link>{' '}
          |{' '}
          <Link className={styles.footnote__link} to="/about">
            Privacy Policy
          </Link>
        </div>
        <small className={styles.copyright}>
          Copyright ©2022 - All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
