import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccountAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Proposal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Proposal - Coca Cola Deal 02/04/2023
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Invoice </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Invoice Ryans Toys -  31/03/2023
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Proposal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Proposal Artic Air -  25/03/2023
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Proposal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Proposal Workeye - 01/04/2023
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
