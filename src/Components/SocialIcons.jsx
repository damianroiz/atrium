import styles from './SocialIcons.module.css';
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

function SocialIcons() {
  return (
    <ul className={styles.iconsContainer}>
      <li>
        <a
          href="https://www.facebook.com/Atriumphysio/"
          target="__blank"
          rel="noopener"
        >
          <FaFacebook className={styles.icon} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/atriumphysiotherapy/"
          target="__blank"
          rel="noopener"
        >
          <FaInstagram className={styles.icon} />
        </a>
      </li>
      <li>
        <a
          href="https://maps.app.goo.gl/cgp7xZ95ktSWbdGUA"
          target="__blank"
          rel="noopener"
        >
          <FaMapMarkerAlt className={styles.icon} />
        </a>
      </li>
    </ul>
  );
}

export default SocialIcons;
