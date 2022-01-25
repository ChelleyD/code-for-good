import { Typography } from "@mui/material";
import React from "react";
// import Hero from "../images/home/hero2.png";
import Button from "@mui/material/Button";
import { Parallax } from "react-parallax";
import HeroSlide from "../images/home/HeroSlide";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay]);

function Home() {
  return (
    <div className="App">
      <Swiper
        className="mySwiper"
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
              <Parallax bgImage={element.name} strength={500}>
                <div className="frame1">
                  <div className="frame1-text">
                    <Typography variant="h3" style={{ fontWeight: 600 }}>
                      Save Earth.
                    </Typography>

                    <Typography variant="h5">
                      The modern day activities that you love are killing the
                      planet. Global warming is causing climate change. Find out
                      what you can do today to help save the Earth.
                    </Typography>

                    <Button
                      className="frame1-btn"
                      variant="contained"
                      size="medium"
                      sx={{ fontSize: "1rem" }}
                    >
                      Make a Change
                    </Button>
                  </div>
                </div>
              </Parallax>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="home-content">
        <Typography
          className="section-heading"
          variant="h4"
          style={{ fontWeight: 600, color: "#2E2C2C" }}
        >
          Mission Statement
        </Typography>

        <Typography style={{ color: "#2E2C2C" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
          imperdiet proin fermentum Leo. Pretium vulputate sapien nec sagittis.
          Sed faucibus turpis in eu mi bibendum neque egestas congue. A arcu
          cursus vitae congue.
        </Typography>

        <div className="page-divider"></div>

        <Typography
          className="section-heading"
          variant="h4"
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
          variant="h4"
          style={{ fontWeight: 600, color: "#2E2C2C" }}
        >
          Stay updated about current events
        </Typography>

        <div className="news-articles"></div>

        <Typography
          className="section-heading"
          variant="h4"
          style={{ fontWeight: 600, color: "#2E2C2C" }}
        >
          Resources
        </Typography>

        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </Typography>
        <Typography>
          ut labore et dolore magna aliqua. Felis imperdiet proin fermentum Leo.
          Pretium vulputate
        </Typography>
        <Typography>
          sapien nec sagittis. Sed faucibus turpis in eu mi bibendum neque
          egestas congue.
        </Typography>
      </div>
    </div>
  );
}

export default Home;
