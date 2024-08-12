"use client";

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";

export default function Period({ handleNext }) {
  const [period, setPeriod] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Retrieve the stored period from sessionStorage when the component mounts
    const storedPeriod = sessionStorage.getItem("period");
    if (storedPeriod) {
      setPeriod(storedPeriod);
    }
  }, []);

  const handlePeriodSelect = (selectedPeriod) => {
    setPeriod(selectedPeriod);
    sessionStorage.setItem("period", selectedPeriod);
    setError(false); // Clear error when a valid option is selected
  };

  const handleContinueClick = () => {
    if (!period) {
      setError(true); // Show error if no period option is selected
    } else {
      handleNext("type");
    }
  };

  return (
    <div className="fade-in-entry flex-col-center">
      <div className="height-15"></div>
      <span
        className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1"
        style={{ textAlign: "center" }}
      >
        Is your period regular or irregular?
      </span>
      <div className="height-15"></div>

      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className={`survey-card my-2 ${
          period === "regular" ? "floating-card" : ""
        }`}
      >
        <Button
          key="regular"
          className={`p-0 flex-col-sp-between ${
            period === "regular" ? "selected-background" : "background-light"
          }`}
          style={{ width: "100%" }}
          onClick={() => handlePeriodSelect("regular")}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent className="flex-start-col" sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5" style={{ textTransform: "initial" }}>
                Regular
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                className="text-initial"
              >
                Occurs almost every month
              </Typography>
            </CardContent>
          </Box>
          <div className="flex-col-center p-2">
            <Image
              src="/images/media/regular-flow.png"
              alt="regular flow icon"
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
          period === "irregular" ? "floating-card" : ""
        }`}
      >
        <Button
          key="irregular"
          className={`p-0 flex-col-sp-between ${
            period === "irregular" ? "selected-background" : "background-light"
          }`}
          style={{ width: "100%" }}
          onClick={() => handlePeriodSelect("irregular")}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent className="flex-start-col" sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5" style={{ textTransform: "initial" }}>
                Irregular
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                className="text-initial"
              >
                May skip some months
              </Typography>
            </CardContent>
          </Box>
          <div className="flex-col-center p-2">
            <Image
              src="/images/media/irregular-flow.png"
              alt="irregular flow icon"
              width={75}
              height={75}
            />
          </div>
        </Button>
      </Card>

      {period === null ? (
        <span className="mt-3 warn-text">Please select an option</span>
      ) : (
        <button
        className="mt-3 tran3s button-primary ripple-btn fw-500"
        onClick={() => handleNext("type")}
        style={{ backgroundColor: "#000000" }}
      >
        CONTINUE
      </button>
      )}
    </div>
  );
}
