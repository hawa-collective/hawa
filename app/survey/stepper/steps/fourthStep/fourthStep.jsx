"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";

export default function FourthStep() {
  const theme = useTheme();

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
      <Button
        key="regular"
        className="mb-3 background-light p-0"
        style={{ width: "100%" }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="survey-card-wide"
        >
          <Box sx={{ display: "flex", flexDirection: "column", }}>
            <CardContent className="flex-start-col" sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
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
              alt="heavy flow icon"
              width={55}
              height={55}
            />
          </div>
        </Card>
      </Button>
      <Button
        key="irregular"
        className="mb-3 background-light p-0"
        style={{ width: "100%" }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="survey-card-wide"
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent className="flex-start-col" sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Irregular
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                className="lowercase"
                className="text-initial"
              >
                May skip some months
              </Typography>
            </CardContent>
          </Box>
          <div className="flex-col-center p-2">
            <Image
              src="/images/media/irregular-flow.png"
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
