import "../App.css";
import "../styles/Home.css";
import { Typography } from "@mui/material";
import React from "react";
import Links from "../components/Nav/Links";
import { Link } from "react-router-dom";
// import Hero from "../images/home/hero2.png";
import Button from "@mui/material/Button";
import { Parallax } from "react-parallax";
import HeroSlide from "../images/image-home/HeroSlide";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper";
import HomeContent from "../components/Home/HomeContent";
// install Swiper modules
SwiperCore.use([Autoplay]);

function Home() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {HeroSlide.map((element) => {
          return (
            <SwiperSlide>
              <Parallax
                bgImage={element.name}
                strength={500}
                style={{ height: "100%", width: "100%", objectFit: "fill" }}
              >
                <div className="frame1"></div>
              </Parallax>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="frame1-text">
        <Typography variant="h3" style={{ fontWeight: 600 }}>
          Save Earth.
        </Typography>

        <Typography variant="h6">
          The modern day activities that you love are killing the planet. Global
          warming is causing climate change. Find out what you can do today to
          help save the Earth.
        </Typography>

        <Link to="/solutions" className="page-link">
          <Button
            className="frame1-btn"
            variant="contained"
            size="medium"
            sx={{ fontSize: "1rem" }}
          >
            Make a Change
          </Button>
        </Link>
      </div>

      <HomeContent />
    </div>
  );
}

export default Home;
