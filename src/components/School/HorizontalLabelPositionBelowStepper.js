import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Animateur en colonie de vacances',
  'Préparateur de commandes E.Leclerc',
  'Vendeur polyvalent  BUT',
];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={-1} alternativeLabel>
        {steps.map((label) => (
          <Step style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',}} key={label}>
            <StepLabel
                
            >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}