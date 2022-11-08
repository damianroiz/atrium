import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import SectionTitle from "../../Components/SectionTitle";
import Footer from "../../Components/Footer";
import "../../../src/style.css";

const Covid19 = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <SectionTitle title="Covid-19" />

      <div className="covid19-container">
        <h1>COVID-19</h1>
        <p>
          We are pleased to announce that as of May 14th, 2020 the clinic is
          accepting patients for in clinic Physiotherapy treatment with no
          exception. As we're relaunching our services, keeping in mind we are
          still dealing with the pandemic, we know we have an important
          responsibility to do this properly. Our reopening will be measured,
          responsible and sustainable. We will reopen slowly in phases and make
          adjustments as needed. We will coordinate with funding agencies and
          regulatory colleges to ensure that we are meeting all their
          requirements and expectations. We will coordinate with our clients
          too, to make sure they understand how the new model will work and
          ensure that they feel safe and supported.
        </p>
        <p>
          All areas of the clinic (including but not limited to door handles,
          reception counter, Moneris machine, high touch surfaces, etc.) are
          cleaned after every patient with Cavicide. Treatment tables, Gym
          equipment and medical equipment are disinfected after each patient. At
          the end of the day, the clinic receives a thorough cleaning by the
          janitorial services. Screening for Symptoms: When booking an
          appointment with us over the phone, patients will be asked a series of
          pre-booking questions and will be asked the same screening questions
          again upon arrival at the clinic and touchless patient temperature
          will be checked upon arrival. Staff are also aware that should they
          develop ANY symptoms, they are NOT to report to work until 14 after
          the symptoms are gone. Masks and hand sanitizer are available upon
          arrival for all patients and staff.
        </p>
        <p>
          Personal Protective Equipment (PPE): We provide our patients and staff
          PPE that has been recommended by the College of Physiotherapist of
          Alberta and also by Alberta's provincial health authority.
          Responsibilities: Our Clinic Director is passionate about the welfare
          and safety of both patients and staff. Patients are given the option
          of visiting the clinic in person or doing a virtual care / Telehealth
          to ensure their treatment needs are being met. We will monitor and
          abide by all recommendations from the College of Physiotherapist of
          Alberta as well as Federal and Provincial Agencies. We are in this
          together, and together we will get through this.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Covid19;
