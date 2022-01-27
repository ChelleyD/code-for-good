import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function SimpleAccordion() {
    return (
      <div> 
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
                <Typography>What is Climate Change?</Typography>
          </AccordionSummary>
          
          <AccordionDetails>
            <Typography>
            Climate change is a long-term change in
            the average weather patterns that have come to define Earth's local, regional and
             global climates.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel2a-content"
             id="panel2a-header">
            <Typography>How do you explain climate change to a child?</Typography>
          </AccordionSummary>
          
          <AccordionDetails>
            <Typography>
              Climate change describes a change in the typical weather for a 
              region — such as high and low temperatures and amount of rainfall — over
              a long period of time. Scientists have observed that, overall, Earth is warming.
              In fact, many of the warmest years on record have happened in the past 20 years.
            </Typography>
          </AccordionDetails>
        </Accordion>
      
      </div>
);
}