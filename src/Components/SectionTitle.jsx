import React from "react";
import { Link } from "wouter";
import "./components.css";

const SectionTitle = ({ title }) => {
  return (
    <section className="About">
      <h1 className="about-title">{title}</h1>
      <Link href="/">
        <a className="link-home">Home{" >"}</a>
      </Link>
    </section>
  );
};

export default SectionTitle;
