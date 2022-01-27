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

        <Accordion>
          <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel2a-content"
             id="panel2a-header">
            <Typography>Do scientists really agree on climate change?</Typography>
          </AccordionSummary>
          
          <AccordionDetails>
            <Typography>
            A 2019 review of scientific papers found the consensus
             on the cause of climate change to be at 100%, and a 
             2021 study concluded that over 99% of scientific papers
             agree on the human cause of climate change.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel2a-content"
             id="panel2a-header">
            <Typography>How bad is climate change 2021</Typography>
          </AccordionSummary>
          
          <AccordionDetails>
            <Typography>
            2021 was consistent with the long-term human-caused
             global warming trend of about 0.2 °C (0.36 °F) per decade.
             From India to England, Russia, China, New Zealand, the U.S.,
             Indonesia, Uganda, Germany, ... extreme precipitation and flooding
             over the span of just a few months.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel2a-content"
             id="panel2a-header">
            <Typography>Can climate change be stopped?</Typography>
          </AccordionSummary>
          
          <AccordionDetails>
            <Typography>
            While climate change cannot be stopped,
            it can be slowed. To avoid the worst consequences of climate change,
            we'll need to reach “net zero” carbon emissions by 2050 or sooner.
            Net zero means that, on balance, no more carbon is dumped into the
            atmosphere than is taken out
            </Typography>
          </AccordionDetails>
        </Accordion>
      
      </div>
);
}