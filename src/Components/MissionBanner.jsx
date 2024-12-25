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

// export const Reviews = () => {
//   return (
//     <div className="reviews">
//       <div className="elfsight-app-7c8824c3-96b9-4222-ab5c-f8f827c1feaa reviewbox review_google"></div>
//     </div>
//   );
// };
