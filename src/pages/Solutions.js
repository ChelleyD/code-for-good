import React from "react";
import FlipCard from "../components/Solutions/Flip";
import Grid from "@mui/material/Grid";
import SolutionsInfo from "../components/Solutions/Solutions.info";
import "../styles/Solution.css"
//import Display from "..components/Solutions/Display.jsimport"

<head>
    <title><h2>Solution</h2></title>
</head>

function Solutions() {

  return (
   <div className="solution-container">
  <p><h2>A Better Solution</h2></p>
  <p><h2>Click on cards to find out how you can help do your part.</h2></p>
  <p>
    <Grid container spacing={2}>
      {SolutionsInfo.map((solution) => {
        return (
          
          <Grid item xs={4}>
            <FlipCard frontImage={solution.frontImage} description={solution.description}  backImage={solution.backImage} description2={solution.description2}/>
          </Grid>
        );
      })}
    </Grid>
  </p> </div> 
  );
}

export default Solutions;
