import AppointmentBtn from './AppointmentBtn';
import styles from './MissionBanner.module.css';

function MissionBanner() {
  return (
    <div className={styles.banner__container}>
      <div className={styles.text}>
        <h3>We Provide High Quality Services</h3>
        <p>
          We believe that in order to maintain a pain free body it is necessary
          to understand a person's specific injury and prevent situations that
          might exacerbate or aggravate a condition.
        </p>
      </div>
      <div className={styles.button}>
        <AppointmentBtn />
      </div>
    </div>
  );
}

export default MissionBanner;


