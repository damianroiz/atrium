import styles from './ContactButtons.module.css';

function Button({ icon, text }) {
  return (
    <div className={styles.button}>
      <i className={`${styles.button_icon} ${icon}`}></i>
      <span>{text}</span>
    </div>
  );
}

export default function ContactButtons() {
  return (
    <div className={styles.contact__buttons}>
      <Button icon="far fa-envelope" text="admin@atriumphysiotherapy.com" />
      <Button
        icon="fas fa-map-marker-alt"
        text={
          <span>
            340 Midpark Way SE - Suite 140
            <br />
            Calgary, AB, T2X 1P1
          </span>
        }
      />
      <Button icon="fas fa-phone" text="+1(403)-255 4461" />
      <Button icon="fas fa-fax" text="+1(403)-259 8776" />
    </div>
  );
}
