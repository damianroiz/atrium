import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import SectionTitle from "../../Components/SectionTitle";
import Footer from "../../Components/Footer";
import "../../../src/style.css"

const Appointment = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <SectionTitle title="Appointment" />
      <div className="Appointment">
        <div className="left">
          <div class="container-left">
            <span>APPOINTMENTS</span>
            <h2>Appointment Request</h2>
            <p>
              If you have any further questions, please feel free to contact our
              staff.
            </p>
            <form className="form">
              <input type="text" name="name" placeholder="Name" />
              <input type="text" name="email" placeholder="Email" />
              <select name="service" id="select" class="form-control">
                <option>Select Your Services</option>
                <option>Health Insurance &amp; Cash </option>
                <option>Motor Vehicle Accident</option>
                <option>Workers Compensation </option>
                <option>Other Services</option>
              </select>
              <input type="tel" name="phone" placeholder="Phone" />
              <input type="text" name="message" placeholder="Message" />
              <input
                className="date_form"
                type="date"
                name="date"
                placeholder="Date"
              />
            </form>
            <button className="appoint-btn">Request Appointment</button>
          </div>
        </div>
        <div className="right">
          <div className="container-right">
            {/* <div className='card-right'>
              <h3>28</h3>
              <p>Years of Experience</p>
            </div>  
            <div className='card-right'>
              <h3>28</h3>
              <p>Years of Experience</p>
            </div>
            <div className='card-right'>
              <h3>28</h3>
              <p>Years of Experience</p>
            </div>
            <div className='card-right'>
              <h3>28</h3>
              <p>Years of Experience</p>
            </div> */}
            <div>
              <div className="elfsight-app-7c8824c3-96b9-4222-ab5c-f8f827c1feaa reviewbox review_google"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointment;
