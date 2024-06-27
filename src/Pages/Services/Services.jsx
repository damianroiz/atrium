import React, { useState } from "react";
import SectionInfo from "../../Components/SectionInfo";
import Navbar from "../../Components/Navbar";
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
        <p>Take a look at our services</p>
        <div className={"service-cards"}>
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
      </section>

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
      className={`service-card ${service.id === current ? "active" : ""}`}
    >
      <span className="service-card-title">{service.title}</span>
    </div>
  );
};

const ServiceContent = ({ service }) => {
  return (
    <article className="service-container">
      <h2>{service.title}</h2>
        <div className="service-body">
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
