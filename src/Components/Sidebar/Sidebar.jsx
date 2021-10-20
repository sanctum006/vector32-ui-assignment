import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import DateRangeIcon from "@mui/icons-material/DateRange";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__upperContainer">
        <div className="menuBtn">
          <MenuIcon style={{ color: "#6B7581", fontSize: "2rem" }} />
        </div>
        <div className="sidebar__menuOptions">
          <HomeIcon
            style={{
              color: "#6B7581",
              fontSize: "2rem",
            }}
          />
          <DateRangeIcon style={{ color: "#6B7581", fontSize: "2rem" }} />
          <SettingsIcon style={{ color: "#6B7581", fontSize: "2rem" }} />
        </div>
      </div>
      <div className="sidebar__lowerContainer">
        <button className="sidebar__exitBtn">
          <ExitToAppIcon style={{ color: "#3CDC9F", fontSize: "2rem" }} />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
