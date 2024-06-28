import React from 'react';
import PageHeader from '../../Components/PageHeader';


export default function Appointment() {
  return (
    <div>
      <PageHeader title="Appointment Booking" />
      <section className="appointment-section">
        {/* <div className="customer-review-box">
          <div className="elfsight-app-7c8824c3-96b9-4222-ab5c-f8f827c1feaa reviewbox review_google"></div>
        </div> */}
        <h2>Take your appointment</h2>
        <div className="appointment-form">
        </div>
      </section>
 
    </div>
  );
}
