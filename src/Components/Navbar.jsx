export default function Navbar() {
  return (
    <div>
      <nav className="main-menu">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <ul className="menu-items">
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

