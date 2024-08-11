"use client";

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import countries from "@/data/countries";
import Image from "next/image";

export default function Location({ handleNext }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    // Retrieve the stored location from sessionStorage
    const storedLocation = sessionStorage.getItem("location");

    if (storedLocation) {
      const locationObject = countries.find(
        (country) => country.label === storedLocation
      );
      setSelectedLocation(locationObject);
    }
  }, []);

  const handleLocationChange = (event, value) => {
    if (value) {
      // Store the selected location in session storage
      sessionStorage.setItem("location", value.label);
      setSelectedLocation(value); // Set the selected value to state
    }
  };

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
        Select your country
      </span>
      <div className="height-15"></div>
      <Autocomplete
        style={{ boxShadow: "1px 1px #a5a5a5", borderRadius: "20px" }}
        id="country-select"
        sx={{
          width: {
            xs: "90vw", // small devices
            sm: "50vw", // tablets and mid devices
            md: "30vw", // desktops
          },
        }}
        options={countries}
        value={selectedLocation} // Bind value to state
        autoHighlight
        getOptionLabel={(option) => option.label}
        onChange={handleLocationChange}
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
              ({option.code}) {option.label}
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
      <button
        className="mt-3 tran3s button-primary ripple-btn fw-500"
        onClick={() => handleNext("age")}
        style={{ backgroundColor: "#000000" }}
      >
        CONTINUE
      </button>
    </div>
  );
}
