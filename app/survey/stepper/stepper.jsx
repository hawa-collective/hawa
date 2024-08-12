// stepper/page.jsx

"use client";

import React, { useState, Fragment } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import Steps from "./steps/steps";

// const steps = [
//   "Your location & age",
//   "Select your age",
//   "Heaviness of flow",
//   "Period Type",
//   "Type of product",
//   "Brand name",
//   "Brand comfort",
// ];
const steps = 10;

export default function HorizontalLinearStepper() {
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(1);
  const [skipped, setSkipped] = useState(new Set());
  const [stepStatus, setStepStatus] = useState("introduction");
  const [productType, setProductType] = useState("");
  const [ratings, setRatings] = useState(null); // Default value

  const [Brand, setBrand] = useState(null);

  const isStepOptional = (step) => {
    return step === null;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  // const handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };
  const handleNext = (nextStatus) => {
    console.log("HANDLE NEXT CLICKED!");
    console.log("STATUS: ", nextStatus);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setStepStatus(nextStatus);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    switch (stepStatus) {
      case "location":
        setStepStatus("introduction");
        break;
      case "age":
        setStepStatus("location");
        break;
      case "flow":
        setStepStatus("age");
        break;
      case "period":
        setStepStatus("flow");
        break;
      case "type":
        setStepStatus("period");
        break;
      case "rating":
        setStepStatus("specific");
        break;
      case "specific":
        setStepStatus("type");
        break;
      case "heaviest":
        setStepStatus("rating");
        break;
      case "extra":
        setStepStatus("heaviest");
        break;
      default:
        setStepStatus("introduction");
        break;
    }
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const percentProgress = (progress, steps) => {
    const progressPercentage = (progress / steps) * 100;
    while (progressPercentage <= 100) {
      return Math.trunc(progressPercentage);
    }
    // return Math.trunc(progressPercentage);
  };

  const handleReset = () => {
    setActiveStep(0);
    setStepStatus("introduction");
    setProductType("");
    sessionStorage.removeItem("location");
    sessionStorage.removeItem("age");
    sessionStorage.removeItem("flow");
    sessionStorage.removeItem("period");
    sessionStorage.removeItem("product type");
    sessionStorage.removeItem("brand");
    sessionStorage.removeItem("Affordability");
    sessionStorage.removeItem("EaseOfUse");
    sessionStorage.removeItem("Comfort");
    sessionStorage.removeItem("usage");
    sessionStorage.removeItem("extra");
  };

  const ProductTypeSelect = (productType) => {
    console.log("Product Type:", productType);
    setProductType(productType);
    setStepStatus("specific");
    sessionStorage.setItem("product type", productType);
  };
  return (
    <Box sx={{ width: "100%" }} className="fade-in-entry flex-col-center">
      {/* <div className="inner-content position-relative">
        <div className="logo order-lg-0">
          <Link href="/" className="d-block">
            <img src="/images/logo/hawalogo.png" alt="" width={75} />
          </Link>
        </div>
      </div> */}
      {/* /.inner-content */}
      {/* <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper> */}
      {stepStatus !== "introduction" && stepStatus !== "finish" ? (
        <MobileStepper
          style={{ width: "100%" }}
          className={activeStep === 0 ? `hide-all` : ``}
          variant="progress"
          steps={steps}
          position="static"
          activeStep={activeStep - 1}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button size="large">
              <span className="fs-27 font-lemon-yellow">
                {percentProgress(activeStep, steps)}%
              </span>
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft
                  style={{ fontSize: "50px", color: "#000000" }}
                />
              ) : (
                <KeyboardArrowRight style={{ display: "none" }} />
              )}
            </Button>
          }
          backButton={
            <Button
              size="large"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight
                  style={{ fontSize: "50px", color: "#000000" }}
                />
              ) : (
                <KeyboardArrowLeft
                  style={{ fontSize: "50px", color: "#000000" }}
                />
              )}
            </Button>
          }
        />
      ) : null}

      {stepStatus === "finish" ? (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Fragment>
      ) : (
        <>
          <div className="flex-col-center" style={{ minHeight: "350px" }}>
            <div>
              {stepStatus !== "introduction" ? (
                <Button onClick={handleReset}>Reset</Button>
              ) : null}
              <Steps
                stepStatus={stepStatus}
                ProductTypeSelect={ProductTypeSelect}
                setProductType={setProductType}
                productType={productType}
                activeStep={activeStep}
                Brand={Brand}
                setBrand={setBrand}
                rating={ratings}
                setRating={setRatings}
                handleBack={handleBack}
                handleNext={handleNext}
              />
            </div>
            {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                className={activeStep === 0 ? `hide-all` : ``}
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button
                onClick={handleNext}
                className={activeStep === 0 ? `hide-all` : ``}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box> */}
          </div>
        </>
      )}
    </Box>
  );
}
