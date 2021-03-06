import React from "react";
import { Typography } from "@mui/material";
import "../../App.css";
import NewsList from "../NewsList";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import ReactPlayer from "react-player/youtube";

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
        Our goal at We Are the World is to educate the Average American. On
        average, families can save $500 a year on utility bills due to federal
        efficiency standards for appliances, lighting and plumbing - with the
        benefits outweighing the costs by 5 to 1. Existing energy standards are
        estimated to be responsible for about 300,000 jobs as of today, and are
        expected to rise to 500,000 by 2030. This can also be seen through
        investments in energy efficiency in buildings, transportation and
        industry - all of which pay off several times over in energy cost
        savings. Strengthening these standards would lead to even more consumer
        savings, economic benefits and jobs.
      </Typography>

      <div className="page-divider"></div>

      <Typography
        className="section-heading"
        variant="h5"
        style={{ fontWeight: 600, color: "#2E2C2C" }}
      >
        Watch a brief informative video about climate change below
      </Typography>

      <div className="cc-video-container">
        <ReactPlayer
          className="cc-video"
          url="https://youtu.be/-D_Np-3dVBQ"
          width={"700px"}
          height={"420px"}
        />
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
        className="resource-heading"
        variant="h6"
        style={{ fontWeight: 600, color: "#2E2C2C" }}
      >
        Resources
      </Typography>

      <div className="resources">
        <Typography>
          <a href="https://climate.nasa.gov/" target="_blank">
            NASA: Global Climate Change
          </a>
        </Typography>

        <SpaOutlinedIcon />

        <Typography>
          <a
            href="https://www.un.org/en/climatechange/what-is-climate-change"
            target="_blank"
          >
            United Nations: Climate Action
          </a>
        </Typography>

        <SpaOutlinedIcon />

        <Typography>
          <a
            href="https://www.nrdc.org/stories/how-you-can-stop-global-warming"
            target="_blank"
          >
            NRDC: Natural Resources Defense Council
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default HomeContent;
