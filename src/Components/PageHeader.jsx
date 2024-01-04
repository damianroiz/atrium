import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, path, link }) => {
  return (
    <section className="about-section">
      <h1 className="about-title">{title}</h1>
      <Link to={path} className="link-home">
        {link}
      </Link>
    </section>
  );
};

export default PageHeader;