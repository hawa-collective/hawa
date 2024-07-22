"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";

export default function ThirdStep() {
  const theme = useTheme();

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
      <Button
        key="heavy"
        className="mb-3 p-0 background-light"
        style={{ width: "100%" }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="survey-card"
        >
          <Box sx={{ display: "flex", flexDirection: "column", }}>
            <CardContent className="flex-start-col" sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
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
              src="/images/media/heavy-flow.png"
              alt="heavy flow icon"
              width={55}
              height={55}
            />
          </div>
        </Card>
      </Button>
      <Button
        key="heavy"
        className="mb-3 p-0 background-light"
        style={{ width: "100%" }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="survey-card background-light"
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent className="flex-start-col" sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
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
              src="/images/media/light-flow.png"
              alt="heavy flow icon"
              width={55}
              height={55}
            />
          </div>
        </Card>
      </Button>
    </div>
  );
}
