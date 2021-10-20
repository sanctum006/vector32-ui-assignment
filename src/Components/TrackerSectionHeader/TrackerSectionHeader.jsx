import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import "./TrackerSectionHeader.css";

function TrackerSectionHeader() {
  return (
    <div className="trackerSectionHeader__container">
      <div className="trackerSectionHeader__name">Hello Pushpendra</div>
      <div className="trackerSectionHeader__options">
        <MenuIcon
          style={{
            backgroundColor: "white",
            color: "#203149",
            padding: "4px 5px",
            borderRadius: "3px",
            margin: "0px 7px 0px",
            cursor: "pointer",
          }}
        />
        <AppsIcon
          style={{
            backgroundColor: "#203149",
            color: "#3CDC9F",
            padding: "4px 5px",
            borderRadius: "3px",
            margin: "0px 7px 0px",
            cursor: "pointer",
          }}
        />
        |
        <AddBoxIcon
          style={{
            backgroundColor: "#f2f2f2",
            color: "#3CDC9F",
            fontSize: "2.6rem",
            padding: "0",
            borderRadius: "3px",
            margin: "0px 4px 0px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}

export default TrackerSectionHeader;
