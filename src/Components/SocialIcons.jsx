import styles from './SocialIcons.module.css';
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// import {
//   BsTwitter,
//   FaFacebookF,
//   BsInstagram,
//   FaMapMarkedAlt,
// } from 'react-icons';

function SocialIcons() {
  return (
    <ul className={styles.iconsContainer}>
      <li>
        <FaXTwitter className={styles.icon} />
        <a
          href="https://twitter.com/HealthPlusPhysio"
          target="__blank"
          rel="noopener"
        ></a>
      </li>
      <li>
        <FaFacebook className={styles.icon} />
        <a
          href="https://www.facebook.com/Atriumphysio/"
          target="__blank"
          rel="noopener"
        ></a>
      </li>
      <li>
        <FaInstagram className={styles.icon} />
        <a href="" target="__blank" rel="noopener"></a>
      </li>
      <li>
        <FaMapMarkerAlt className={styles.icon} />
        <a
          href="https://www.google.com/maps/dir/4.616599,-74.0652613/ATRIUM+PHYSIOTHERAPY+CLINIC+(+Formerly+Health+Plus+Physiotherapy)/@29.0785706,-119.2902096,3.79z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x537176876b320175:0x33fad0328ed93e75!2m2!1d-114.0629294!2d50.9083807"
          target="__blank"
          rel="noopener"
        ></a>
      </li>
    </ul>
  );
}

export default SocialIcons;
