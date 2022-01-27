import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Typography } from "@mui/material";
function FrontDisplay({ frontImage, description, hovered }) {
  return (
    <Card  style={{ width: "400px", height: "560px", background: "#ff726f", }}>
      <CardMedia
        component="img"
        height="300"
        image={frontImage}
        alt="no image loaded"
      />
      <CardContent>
        <p>Description: { description } </p>
      </CardContent>
      {/* ternary expression */}
      {hovered ? 
      <Typography variant="h5">
        Click to flip
      </Typography>
      : null}
    </Card>
  );
}

export default FrontDisplay;