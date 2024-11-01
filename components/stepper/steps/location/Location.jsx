"use client";

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import countries from "@/data/countries";
import Image from "next/image";

export default function Location({ handleNext }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [error, setError] = useState(false);

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
      sessionStorage.setItem("location", value.label);
      setSelectedLocation(value);
      setError(false); // Clear the error when a valid location is selected
    } else {
      setSelectedLocation(null);
    }
  };

  const handleContinueClick = () => {
    if (!selectedLocation) {
      setError(true); // Show error if no location is selected
    } else {
      handleNext("age");
    }
  };

  return (
    <div className="fade-in-entry flex-col-center">
      <div className="height-15"></div>
      <Image
        src="/images/media/country.png"
        alt="location animated icon"
        width={200}
        height={200}
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
            error={!!error} // Boolean check to ensure it's true/false
            helperText={error ? "Please select a country" : ""}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      {selectedLocation === null ? (
        <span className="mt-3 warn-text">Please select a country</span>
      ) : (
        <button
          className="mt-3 tran3s button-primary ripple-btn fw-500"
          onClick={handleContinueClick}
          style={{ backgroundColor: "#8D447F" }}
          disabled={!selectedLocation} // Disable button if no location is selected
        >
          CONTINUE
        </button>
      )}
    </div>
  );
}
