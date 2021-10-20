import React from "react";
import imgLink from "./../../Assets/meditating-man.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./WorkoutTracker.css";

function WorkoutTracker() {
  return (
    <div className="workoutTracker__container">
      <div className="workoutTracker__upperContainer">
        <div
          style={{
            backgroundImage: `url(${imgLink})`,
            width: "100px",
            height: "100px",
            backgroundPosition: "center",
            backgroundSize: "200px",
          }}
        ></div>
        {/* <img src={imgLink} alt="img-link" width="100px" /> */}
        <div className="workoutTracker__textBox">
          <h1>10</h1>
          <div>
            <h1>Remaining</h1>
            <h1>workouts</h1>
          </div>
        </div>
      </div>
      <div className="workoutTracker__lowerContainer">
        <h1 style={{ fontSize: "1.1rem" }}>My Services</h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#3cdc9f",
            display: "flex",
            alignItems: "center",
          }}
        >
          EMS Workout
          <KeyboardArrowDownIcon
            style={{
              color: "#3CDC9F",
              fontSize: "1rem",
              border: "1px solid #aaa",
              borderRadius: "100px",
              margin: "0 10px",
            }}
          />
        </p>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0",
          }}
        >
          <div
            style={{
              padding: "0",
            }}
          >
            <p
              style={{
                color: "#aaa",
                fontSize: "0.8rem",
                padding: "0",
                margin: "0",
              }}
            >
              Type
            </p>
            <h2 style={{ fontSize: "1rem", margin: "5px 0" }}>EMS Workout</h2>
          </div>
          <div>
            <p
              style={{
                color: "#aaa",
                fontSize: "0.8rem",
                padding: "0",
                margin: "0",
              }}
            >
              Expire In
            </p>
            <h2 style={{ fontSize: "1rem", margin: "px 0" }}>25 days left</h2>
          </div>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0",
          }}
        >
          <div
            style={{
              padding: "0",
            }}
          >
            <p
              style={{
                color: "#aaa",
                fontSize: "0.8rem",
                padding: "0",
                margin: "0",
              }}
            >
              Workouts amount
            </p>
            <h2 style={{ fontSize: "1rem", margin: "5px 0" }}>15</h2>
          </div>
          <div>
            <p
              style={{
                color: "#aaa",
                fontSize: "0.8rem",
                padding: "0",
                margin: "0",
              }}
            >
              Remaining workouts
            </p>
            <h2 style={{ fontSize: "1rem", margin: "5px 0" }}>5</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutTracker;
