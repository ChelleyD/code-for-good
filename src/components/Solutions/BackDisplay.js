import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import { Typography } from "@mui/material";

function BackDisplay({ backImage, description2, hovered }) {
  return (
    <Card style={{ backgroundColor: "rgb(86, 180, 49)" }}>
      <CardMedia
        component="img"
        height="230"
        image={backImage}
        alt="no image loaded"
      />
      <CardContent>
        <p>Description: {description2}</p>

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

export default BackDisplay;
