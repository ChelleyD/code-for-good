import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";

function BackDisplay({ backImage, description2 }) {
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
    </Card>
  );
}

export default BackDisplay;
