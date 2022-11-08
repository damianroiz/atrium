import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import SectionTitle from "../../Components/SectionTitle";
import Footer from "../../Components/Footer";
import BlogCard from "../../Components/BlogCard";
import data from "./blogdata"
import "../../../src/style.css";

export default function Blog() {
  const blogCardContent = data.map((item) => {
    return (
      <BlogCard 
          key={item.id}
          {...item}
      />
    )
  })
  return (
    <> 
      <SectionInfo />
      <Navbar />
      <SectionTitle title="Blog" />
      <section className="blogcard-container">
        {blogCardContent}
      </section>
      <Footer />
    </>
  );
};


