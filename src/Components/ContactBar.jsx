import styles from './ContactBar.module.css';
import logo from '/logo.png';
import { PiEnvelopeSimple } from 'react-icons/pi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import AppointmentBtn from './AppointmentBtn';
export default function ContactBar() {
  return (
    <div id="inicio" className={styles.contactBar}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="./logo.png" alt="logo" />
      </div>

      <div className={styles.contactBtnContainer}>
        <div className={styles.contactBtn}>
          <div>
            <PiEnvelopeSimple className={styles.contactBtnIcon} />
            <p>admin@atriumphysiotherapy.com</p>
          </div>

          <div>
            <FaMapMarkerAlt className={styles.contactBtnIcon} />
            <p>
              340 Midpark Way SE - Suite 140
              <br />
              Calgary, AB, T2X 1P1
            </p>
          </div>

          <div>
            <FaPhone className={styles.contactBtnIcon} />
            <p>+1(403)-255 4461</p>
          </div>
        </div>
      </div>
      <AppointmentBtn />
      {/* <div className="appointment-btn-section">
        <button href="/Appointment">
          <a className="appointment-btn cta-btn">Book Your Appointment</a>
        </button>
      </div> */}
    </div>
  );
}
