import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import SectionTitle from "../../Components/PageHeader";
import Footer from "../../Components/Footer";

export default Appointment = () => {
  return (
    <div>
    <SectionInfo />
    <Navbar />
    <SectionTitle />
    <section className="Appointment-section">
      <div className="review-container">
        <div className="elfsight-app-7c8824c3-96b9-4222-ab5c-f8f827c1feaa reviewbox review_google"></div>
      </div>
        <div class="container-left">
          <h2>Appointments</h2>
          <p>
            If you have any questions before requesting an appointment, please feel free to contact our
            staff.
          </p>
          <form className="appointment-form">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <select name="service" id="select" class="form-control" placeholder="Select your services">
              <option>Physiotherapy</option>
              <option>Acupuncture</option>
              <option>Massage Therapy</option>
            </select>
            <input type="tel" name="phone" placeholder="Phone" />
            <input type="text" name="message" placeholder="Message" />
            <input
              className="calendar"
              type="date"
              name="date"
              placeholder="Date"
            />
          </form>
          <button className="appoint-btn">Request Appointment</button>
        </div>
    </section>
    <Footer />
    </div>
  );
};
