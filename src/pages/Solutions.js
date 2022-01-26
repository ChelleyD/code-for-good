import React from "react";
import FlipCard from "../components/Solutions/Flip";
import Grid from "@mui/material/Grid";
import SolutionsInfo from "../components/Solutions/Solutions.info";
import "../styles/Solution.css"
//import Display from "..components/Solutions/Display.jsimport"

<head>
    <title><h2>Solutions</h2></title>
</head>

function Solutions() {

  return (
   <div className="solution-container">
  <h2>Negative vs Positive Solutions</h2>
    <Grid container spacing={2}>
      {SolutionsInfo.map((solution) => {
        return (
          
          <Grid item xs={4}>
            <FlipCard frontImage={solution.frontImage} description={solution.description}  backImage={solution.backImage} description2={solution.description2}/>
          </Grid>
        );
      })}
    </Grid>
  </div> 
  );
}

export default Solutions;
