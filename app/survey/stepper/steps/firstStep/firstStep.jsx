// firstStep/page.jsx

"use client";

import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import countries from "@/data/countries";

import Image from "next/image";

import { useTheme } from "@mui/material/styles";

export default function FirstStep({ step }) {
  
  const theme = useTheme();
  return (
    <div className="fade-in-entry flex-col-center">
      <div className="height-15"></div>
      <Image
        src="/images/media/location.webp"
        alt="location animated icon"
        width={100}
        height={100}
      />
      <span
        className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1"
        style={{ textAlign: "center" }}
      >
        Choose your location
      </span>
      <div className="height-15"></div>
      <Autocomplete
        style={{ boxShadow: "1px 1px #a5a5a5", borderRadius: "20px" }}
        id="country-select-demo"
        sx={{ width: 400 }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <Box
              key={key}
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...optionProps}
            >
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  );
}
