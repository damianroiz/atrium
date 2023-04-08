import React from "react";
import StaffCard from "./StaffCard";
import data from "./staff-card-data";


export default function StaffSection() {
  const staffcards = data.map((item) => {
    return (
      <StaffCard
        key={item.id}
        img={item.staffImg}
        name={item.name}
        position={item.position}
        info={item.info}
      />
    );
  });

  return (
    <section className="cards-section">
      <h2>Our Staff</h2>
      <div className="cards-container">{staffcards}</div>
    </section>
  )
}

