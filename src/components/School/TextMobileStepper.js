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
    label: "Vendeur polyvalent BUT",
    description:"Élaboration d’approches persuasives adaptée à un public cible. Connaissances des stratégies commerciales et marketing d’une marque.",
  },
  {
    label: "Préparateur de commandes E.Leclerc.",
    description: `Connaissances des objets et des pratiques de consommation Apprentissage de la relation et de la satisfaction client..`,
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
    <Box
      sx={{
        maxWidth: 400,
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <div
                  style={{
                    color: "white",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    fontFamily: "Roboto",
                    fontSize: "2rem",
                    textAlign: "center",
                    fontWeight: "bold",
                    borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
                  }}
                >
                  Mes Expériences
                </div>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 1,
          backgroundColor: "white",
          
          color: "black",
          borderColor: "black",
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
          color: "black",
          borderRadius: "0px",
          fontSize: "0.956rem",
          backgroundColor: "white",
        }}
      >
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        style={{ backgroundColor: "transparent", color:"whitesmoke" }}
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
