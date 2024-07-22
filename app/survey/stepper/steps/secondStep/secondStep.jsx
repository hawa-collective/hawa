"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Image from "next/image";

import cards from "../../cards/cards";

const optionOneTwo = [
  <Button
    key="one"
    className="mb-3 flex-col-center background-light border-light pt-3"
    style={{ width: "177px" }}
  >
    <div className="fade-in-entry flex-col-center">
      <div>
        <Image
          src="/images/media/under-18.png"
          alt="location animated icon"
          width={77}
          height={77}
        />
      </div>
      <div className="mt-3"></div>
      <div>
        <p>Under 18</p>
      </div>
    </div>
  </Button>,
  <Button
    key="two"
    className="flex-col-center background-light border-light pt-3"
    style={{ width: "177px" }}
  >
    <div className="fade-in-entry flex-col-center">
      <div>
        <Image
          src="/images/media/26-35.png"
          alt="location animated icon"
          width={77}
          height={77}
        />
      </div>
      <div className="mt-3"></div>
      <div>
        <p>26 - 35</p>
      </div>
    </div>
  </Button>,
];
const bottomCards = [
  <Button
    key="three"
    className="mb-3 flex-col-center background-light border-light pt-3"
    style={{ width: "177px" }}
  >
    <div className="fade-in-entry flex-col-center">
      <div>
        <Image
          src="/images/media/19-25.png"
          alt="location animated icon"
          width={77}
          height={77}
        />
      </div>
      <div className="mt-3"></div>
      <div>
        <p>19 - 25</p>
      </div>
    </div>
  </Button>,
  <Button
    key="four"
    className="flex-col-center background-light border-light pt-3"
    style={{ width: "177px" }}
  >
    <div className="fade-in-entry flex-col-center">
      <div>
        <Image
          src="/images/media/36+.png"
          alt="location animated icon"
          width={77}
          height={77}
        />
      </div>
      <div className="mt-3"></div>
      <div>
        <p>Over 36</p>
      </div>
    </div>
  </Button>,
];

export default function SecondStep() {
  return (
    <div className="fade-in-entry flex-col-center">
      <div className="height-15"></div>
      <span
        className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1"
        style={{ textAlign: "center" }}
      >
        What’s your age group?
      </span>
      <div className="height-15"></div>
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="Vertical group"
          variant="contained"
          className="p-1"
        >
          {optionOneTwo}
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          aria-label="Vertical button group"
          variant="contained"
          className="p-1"
        >
          {bottomCards}
        </ButtonGroup>
      </Box>
    </div>
  );
}
