import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionMUI() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h6" component="div">
            Question: 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Tanvir mahmud Fahim. Software developer at Dynamic Megasoft Limited.
            Studied at Computer Science and Engineering department at Stamford
            University Bangladesh
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h6" component="div">
            Question: 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Tanvir mahmud Fahim. Software developer at Dynamic Megasoft Limited.
            Studied at Computer Science and Engineering department at Stamford
            University Bangladesh
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h6" component="div">
            Question: 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Tanvir mahmud Fahim. Software developer at Dynamic Megasoft Limited.
            Studied at Computer Science and Engineering department at Stamford
            University Bangladesh
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
