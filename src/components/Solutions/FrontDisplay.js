import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Typography } from "@mui/material";
function FrontDisplay({ frontImage, description, hovered }) {
  return (
    <Card style={{ backgroundColor: "rgb(255, 0, 0)" }}>
      <CardMedia
        component="img"
        height="400"
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