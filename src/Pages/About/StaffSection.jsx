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

  return <div>{staffcards}</div>;
}

