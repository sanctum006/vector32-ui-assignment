import React from "react";
import TrackerSectionBody from "../TrackerSectionBody/TrackerSectionBody";
import TrackerSectionHeader from "../TrackerSectionHeader/TrackerSectionHeader";
import "./TrackerSection.css";

function TrackerSection() {
  return (
    <div className="trackerSection__container">
      <TrackerSectionHeader />
      <TrackerSectionBody />
    </div>
  );
}

export default TrackerSection;
