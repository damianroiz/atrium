import React from "react";
import { Link } from "wouter";

export default PageHeader = ({ title }) => {
  return (
    <section className="about-section">
      <h1 className="about-title">{title}</h1>
      <Link href="/" className="link-home">
        {"Home >"}
      </Link>
    </section>
  );
};

