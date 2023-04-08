import React from "react";
import "../../../src/style.css";

export default function StaffCard(props) {
  return (
    <div className="staff-card">
      <img src={`../images/${props.img}`} alt=""></img>
      <div className="staff-card-info">
        <span>{props.name}</span>
        <span>{props.position}</span>
        <span>{props.info}</span>
      </div>
    </div>
  );
}
