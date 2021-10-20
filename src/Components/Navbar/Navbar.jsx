import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navabar__container">
      <div className="navbar__logo">
        <img src="https://hubeg.com/assets/img/logo-c-h.svg" alt="logo" />
      </div>
      <div className="navbar__profileOptions">
        <NotificationsNoneIcon
          style={{ color: "#3CDC9F", fontSize: "1.8rem" }}
        />
        <div className="navabar__username">
          <AccountCircleIcon />
          Pushpendra Yadav
        </div>
        <KeyboardArrowDownIcon
          style={{
            color: "#3CDC9F",
            fontSize: "1.5rem",
            border: "1px solid #aaa",
            borderRadius: "100px",
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
