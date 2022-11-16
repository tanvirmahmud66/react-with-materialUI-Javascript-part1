import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const AccordionMUIAnother = () => {
  return (
    <div>
        <Accordion>
            <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                I am Tanvir Mahmud Fahim and I am a software developer at Dynamic Megasoft Limited as Front-end Developer
            </AccordionDetails>
        </Accordion>
    </div>
  )
}
