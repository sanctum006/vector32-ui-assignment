import React from "react";
import Navbar from "../Navbar/Navbar";
import TrackerSection from "../TrackerSection/TrackerSection";
import "./Mainbar.css";

function Mainbar() {
  return (
    <div className="mainbar__container">
      <Navbar />
      <TrackerSection />
    </div>
  );
}

export default Mainbar;
