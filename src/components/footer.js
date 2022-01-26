import React from 'react';
import { Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";

const Footer = () => {
  return (
    <div className="footer">
        <Typography variant="body2">
          FAQ
        </Typography>

        <Typography
          variant="body2"
          onClick={() =>
            window.open("mailto:save-earth@we-are-the-world.com", "_blank")
          }
        >
          Contact Us
        </Typography>

        <div className="footer-social">
          <Typography variant="body2">Social:</Typography>
          <FacebookIcon
            color="white"
            onClick={() => window.open("https://www.facebook.com/", "_blank")}
          />
          <InstagramIcon
            color="white"
            onClick={() => window.open("https://www.instagram.com/", "_blank")}
          />
          <RedditIcon
            color="white"
            onClick={() => window.open("https://www.reddit.com/", "_blank")}
          />
        </div>
      </div>
  );
};

export default Footer;
