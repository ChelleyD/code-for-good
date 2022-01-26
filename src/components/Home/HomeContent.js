import React from "react";
import { Typography } from "@mui/material";
import "../../App.css";
import NewsList from "../NewsList";

const HomeContent = () => {
  return (
    <div className="home-content">
      <Typography
        className="section-heading"
        variant="h5"
        style={{ fontWeight: 600, color: "#2E2C2C" }}
      >
        Mission Statement
      </Typography>

      <Typography style={{ color: "#2E2C2C" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet
        proin fermentum Leo. Pretium vulputate sapien nec sagittis. Sed faucibus
        turpis in eu mi bibendum neque egestas congue. A arcu cursus vitae
        congue.
      </Typography>

      <div className="page-divider"></div>

      <Typography
        className="section-heading"
        variant="h5"
        style={{ fontWeight: 600, color: "#2E2C2C" }}
      >
        Click on a location to view its past climate trends
      </Typography>

      <div className="climate-trends">
        <div className="ct-globe"></div>
        <div className="ct-visual"></div>
      </div>

      <div className="page-divider"></div>

      <Typography
        className="section-heading"
        variant="h5"
        style={{ fontWeight: 600, color: "#2E2C2C" }}
      >
        Stay updated about current events
      </Typography>

      <NewsList />

      <Typography
        className="section-heading"
        variant="h5"
        style={{ fontWeight: 600, color: "#2E2C2C" }}
      >
        Resources
      </Typography>

      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </Typography>
      <Typography>
        ut labore et dolore magna aliqua. Felis imperdiet proin fermentum Leo.
        Pretium vulputate
      </Typography>
      <Typography>
        sapien nec sagittis. Sed faucibus turpis in eu mi bibendum neque egestas
        congue.
      </Typography>
    </div>
  );
};

export default HomeContent;
