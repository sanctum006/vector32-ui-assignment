import React from "react";
import TrackerUpcoming from "../TrackerUpcoming/TrackerUpcoming";
import WorkoutTracker from "../WorkoutTracker/WorkoutTracker";
import "./TrackerSectionBody.css";

function TrackerSectionBody() {
  return (
    <div className="trackerSectionBody__container">
      <TrackerUpcoming />
      <WorkoutTracker />
      <WorkoutTracker />
    </div>
  );
}

export default TrackerSectionBody;
