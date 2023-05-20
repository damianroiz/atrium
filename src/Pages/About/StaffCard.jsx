import React from "react";
import "../../../src/style.css";

export default function StaffCard({ img, name, position }) {
  return (
    <div className="staff-card">
      <img src={`../images/${img}`} alt=""></img>
      <div className="staff-card-info">
        <span>{name}</span>
        <span>{position}</span>
      </div>
    </div>
  );
}
