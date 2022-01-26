import Links from "./Links";
import React from "react";
import { Link } from "react-router-dom";
import EarthLogo from "../../images/nav-logo.png";
import { Typography } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import "../../App.css";

const Nav = () => {
  return (
    <div className="navbar">
      <Link to="/" className="page-link">
        <div className="logo">
          <img src={EarthLogo} className="logo-img" />
          <Typography
            variant="h6"
            className="logo-text"
            style={{ fontWeight: 600, color: "#707070" }}
          >
            WE ARE THE WORLD
          </Typography>
        </div>
      </Link>

      <div>
        {Links.map((element) => {
          return (
            <Link to={element.link} className="nav-links">
              {element.title}
            </Link>
          );
        })}

        <div className="hamburger-menu">
          <Menu fontSize="large" style={{ color: "#9AD455" }} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
