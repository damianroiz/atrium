import styles from "./AppointmentBtn.module.css";

export default function AppointmentBtn() {
  return (
    <a href="#" class={styles.AppointmentBtn}>
      <span>Click me</span>
      <svg width="13px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </a>
  )
}