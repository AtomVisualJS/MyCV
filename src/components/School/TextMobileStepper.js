import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  {
    label: "Animateur en colonie de vacances",
    description: `Planification et mise en place d’activités.
    Analyse des processus d’influence et décisionnel chez plusieurs publics (enfants, adultes atteint de pathologies mentales,...)`,
  },
  {
    label: "Vendeur polyvalent, chez la marque BUT",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Préparateur de commandes chez la marque E.Leclerc.",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          borderRadius: "5px",
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: "1.2rem",
          }}
        >
          {steps[activeStep].label}
        </div>
        <br />
      </Paper>
      <Box
        sx={{
          height: 105,
          maxWidth: 400,
          pl: 2,
          width: "100%",
          color: "white",
          borderRadius: "15px",
          fontSize: "0.956rem",
        }}
      >
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        style={{ backgroundColor: "transparent" }}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
