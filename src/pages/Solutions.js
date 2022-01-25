import React from "react";
import FlipCard from "../components/Solutions/Flip";
import Grid from "@mui/material/Grid";
import SolutionsInfo from "../components/Solutions/Solutions.info";

function Solutions() {

  return (
    <Grid container spacing={2}>
      {SolutionsInfo.map((solution) => {
        return (
          <Grid item xs={4}>
            <FlipCard frontImage={solution.frontImage} description={solution.description} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Solutions;
