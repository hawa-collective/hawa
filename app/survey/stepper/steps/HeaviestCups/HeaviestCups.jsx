"use client";

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";

export default function HeaviestCups({ productType, handleNext }) {
  const [productUsage, setProductUsage] = useState("");

  useEffect(() => {
    // Retrieve the stored flow from sessionStorage when the component mounts
    const storedProductUsage = sessionStorage.getItem("usage");
    if (storedProductUsage) {
      setProductUsage(storedProductUsage);
    }
  }, []);

  const handleProductUsage = (productUsageSelection) => {
    setProductUsage(productUsageSelection);
    sessionStorage.setItem("usage", productUsageSelection);
  };

  return (
    <div className="fade-in-entry flex-col-center">
      <div className="height-15"></div>
      <span
        className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1"
        style={{ textAlign: "center" }}
      >
        How often do you need to empty the {productType} on your heaviest day ?
      </span>
      <p>From when you wake up to when you sleep</p>
      <div className="height-15"></div>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className={`survey-card my-2 ${
          productUsage === "1to2" ? "floating-card" : ""
        }`}
      >
        <Button
          key="1to2"
          className="p-0 flex-col-sp-between"
          style={{ width: "100%" }}
          onClick={() => handleProductUsage("1to2")}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent className="flex-start-col" sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                1 - 2
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                className="text-initial"
              >
                I'm a lightweight
              </Typography>
            </CardContent>
          </Box>
          <div className="flex-col-center p-2">
            <Image
              src="/images/media/smile.png"
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
          productUsage === "3to4" ? "floating-card" : ""
        }`}
      >
        <Button
          key="3to4"
          className="p-0 flex-col-sp-between"
          style={{ width: "100%" }}
          onClick={() => handleProductUsage("3to4")}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent className="flex-start-col" sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                3 - 4
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                className="lowercase text-initial"
              >
                Kitty under construction
              </Typography>
            </CardContent>
          </Box>
          <div className="flex-col-center p-2">
            <Image
              src="/images/media/sad-face.png"
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
          productUsage === "4plus" ? "floating-card" : ""
        }`}
      >
        <Button
          key="4plus"
          className="p-0 flex-col-sp-between"
          style={{ width: "100%" }}
          onClick={() => handleProductUsage("4plus")}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent className="flex-start-col" sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
                style={{ textTransform: "initial" }}
              >
                More than 4
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                className="lowercase text-initial"
              >
                This can be a challenge
              </Typography>
            </CardContent>
          </Box>
          <div className="flex-col-center p-2">
            <Image
              src="/images/media/mad-face.png"
              alt="heavy flow icon"
              width={75}
              height={75}
            />
          </div>
        </Button>
      </Card>
      {productUsage === "" ? (
        <span className="mt-3 warn-text">Please select an option</span>
      ) : (
        <button
          className="mt-3 tran3s button-primary ripple-btn fw-500"
          onClick={() => handleNext("extra")}
          style={{ backgroundColor: "#000000" }}
        >
          CONTINUE
        </button>
      )}
    </div>
  );
}
