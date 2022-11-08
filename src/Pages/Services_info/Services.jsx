import React, { useState } from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { ServicesItems } from "./ServicesItems";
import SectionTitle from "../../Components/SectionTitle";
import { servicesdata } from "../Services_info/services_data";
import "./services.css";
import { Services_Content } from "./Services_Content";

const Services = () => {
  const [current, setCurrent] = useState(1);

  return (
    <>
      <SectionInfo />
      <Navbar />
      <SectionTitle title="Services" />
      <section className="services_section">
        <h4 className="subtitle_services">SERVICES</h4>
        <h2 className="title_services">Clinic Services</h2>
        <p className="parrafo_services">
          Information pertaining to the high quality services offered by our
          clinic
        </p>
      </section>

      <div className={"GridContainer"}>
        {servicesdata.map((item) => (
          <ServicesItems
            key={item.id}
            item={item}
            current={current}
            setCurrent={setCurrent}
          />
        ))}
      </div>

      <div>
        <div>
          {current &&
            servicesdata.map(
              (item) =>
                item.id === current && (
                  <Services_Content key={item.id} {...item} />
                )
            )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
