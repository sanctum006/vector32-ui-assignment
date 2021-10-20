import React from "react";
import highFiveMan from "./../../Assets/high-five-man.png";
import "./TrackerUpcoming.css";

function TrackerUpcoming() {
  return (
    <div className="trackerUpcoming__container">
      <div className="trackerUpcoming__upperContainer">
        <div>
          <img src={highFiveMan} alt="high-five-man-img" width="100px" />
        </div>
        <div>
          <h1>Upcoming</h1>
          <h1>Workout</h1>
        </div>
      </div>
      <div className="trackerUpcoming__middleContainer">
        <p>Next workout in</p>
        <h1>2 days</h1>
        <p>10:00, 12 Oct 2020</p>
      </div>
      <div className="trackerUpcoming__lowerContainer">
        <p>Studio name and address</p>
        <h1>EMSBudyStudio</h1>
        <h3>Kosmodrom 1a/7. 11 - 587 Krakow</h3>
        <button>Workout Schedule</button>
      </div>
    </div>
  );
}

export default TrackerUpcoming;
