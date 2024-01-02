import React, { useState } from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SectionTitle from "../../Components/PageHeader";
import { ServiceData } from "../Services/services_data";

export default function Services() {
  const [current, setCurrent] = useState(1);

  return (
    <>
      <SectionInfo />
      <Navbar />
      <SectionTitle title="Services" />
      <section className="services_section">
        <p>
          Information pertaining to the high quality services offered by our
          clinic
        </p>
      </section>

      <div className={"GridContainer"}>
        {ServiceData.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            current={current}
            setCurrent={setCurrent}
          />
        ))}
      </div>

      {current &&
        ServiceData.map(
          (service) =>
            service.id === current && (
              <ServiceContent service={service} key={service.id} />
            )
        )}

      <Footer />
    </>
  );
}

const ServiceCard = ({ service, current, setCurrent }) => {
  const handleClick = () => {
    setCurrent(service.id);
  };

  return (
    <div
      onClick={handleClick}
      className={
        service.id === current ? "servicesitems active" : "servicesitems"
      }
    >
      <div>
        <span className="servicesitems-title">{service.title}</span>
      </div>
    </div>
  );
};

const ServiceContent = ({ service }) => {
  return (
    <article className="service-container">
      <h1>{service.title}</h1>
      <div>
        <img
          style={{ height: "300px" }}
          src={service.image}
          alt="service-img"
        />
        {Array.isArray(service.description) ? (
          service.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>{service.description}</p>
        )}
        {service.hasOwnProperty("list") ? (
          <ul>
            {service.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </article>
  );
};
