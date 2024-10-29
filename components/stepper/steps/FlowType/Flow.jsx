"use client";

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";

export default function Flow({ handleNext }) {
  const [flow, setFlow] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Retrieve the stored flow from sessionStorage when the component mounts
    const storedFlow = sessionStorage.getItem("flow");
    if (storedFlow) {
      setFlow(storedFlow);
    }
  }, []);

  const handleFlowSelect = (selectedFlow) => {
    setFlow(selectedFlow);
    sessionStorage.setItem("flow", selectedFlow);
    setError(false); // Clear error when a valid option is selected
    handleNext("period")
  };

  // const handleContinueClick = () => {
  //   if (!flow) {
  //     setError(true); // Show error if no flow option is selected
  //   } else {
  //     handleNext("period");
  //   }
  // };

  return (
    <div className="fade-in-entry flex-col-center">
      <div className="height-15"></div>
      <span
        className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1"
        style={{ textAlign: "center" }}
      >
        Do you consider your flow to be heavy?
      </span>
      <div className="height-15"></div>

      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className={`survey-card my-2 ${
          flow === "heavy" ? "floating-card" : ""
        }`}
      >
        <Button
          key="heavy"
          className={`p-0 flex-col-sp-between ${
            flow === "heavy" ? "selected-background" : "background-light"
          }`}
          style={{ width: "100%" }}
          onClick={() => handleFlowSelect("heavy")}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent className="flex-start-col" sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5" style={{ textTransform: "initial" }}>
                Yes
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                className="text-initial"
              >
                Needs frequent changing
              </Typography>
            </CardContent>
          </Box>
          <div className="flex-col-center p-2">
            <Image
              src="/images/media/heavy.png"
              alt="heavy flow icon"
              width={75}
              height={75}
            />
          </div>
        </Button>
      </Card>

      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className={`survey-card my-2 ${
          flow === "light" ? "floating-card" : ""
        }`}
      >
        <Button
          key="light"
          className={`p-0 flex-col-sp-between ${
            flow === "light" ? "selected-background" : "background-light"
          }`}
          style={{ width: "100%" }}
          onClick={() => handleFlowSelect("light")}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent className="flex-start-col" sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5" style={{ textTransform: "initial" }}>
                No
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                className="text-initial"
              >
                It's a breeze - light & short
              </Typography>
            </CardContent>
          </Box>
          <div className="flex-col-center p-2">
            <Image
              src="/images/media/light.png"
              alt="light flow icon"
              width={75}
              height={75}
            />
          </div>
        </Button>
      </Card>

      {flow === null ? (
        <span className="mt-3 warn-text">Please select an option</span>
      ) : (
        <button
        className="mt-3 tran3s button-primary ripple-btn fw-500"
        onClick={() => handleNext("period")}
        style={{ backgroundColor: "#8D447F" }}
      >
        CONTINUE
      </button>
      )}
    </div>
  );
}
