import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import Navbar from "../../Components/Navbar";
import PageHeader from "../../Components/PageHeader";
import AppointmentForm from "../../Components/AppointmentForm/AppointmentForm";
import Footer from "../../Components/Footer";

export default function Appointment() {
  return (
    <div>
    <SectionInfo />
    <Navbar />
    <PageHeader title='Appointment Booking' />
      <section className="appointment-section">
        <div className="customer-review-box">
          <div className="elfsight-app-7c8824c3-96b9-4222-ab5c-f8f827c1feaa reviewbox review_google"></div>
        </div>
        <div className="appointment-form">
          <AppointmentForm />
        </div>
      </section>
    <Footer />
    </div>
  );
};
