import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.mainMenuContainer}>
      <nav className={styles.mainMenu}>
        <input type="checkbox" name="" id="" />
        <div className={styles.hamburgerLines}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
        <ul className={styles.menuItems}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Services">Services</a>
          </li>
          <li>
            <a href="/Blog">Blog</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/CovidAlert">FAQs</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
