"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import cupsAndDisks from "@/data/cups-and-disks";
import Image from "next/image";

export default function CupAndDisk({ Brand, setBrand, handleNext }) {
  const [error, setError] = useState(false);

  const handleBrandChange = (event, value) => {
    if (value) {
      sessionStorage.setItem("brand", value.brand);
      setBrand(value);
      setError(false); // Clear the error when a valid brand is selected
    } else {
      setBrand(null);
    }
  };

  useEffect(() => {
    const storedBrand = sessionStorage.getItem("brand");

    if (storedBrand) {
      const brandObject = cupsAndDisks.find(
        (brand) => brand.brand === storedBrand
      );
      setBrand(brandObject);
    }
  }, []);

  const handleNextClick = () => {
    if (!Brand) {
      setError(true); // Show error if no brand is selected
    } else {
      handleNext("rating");
    }
  };

  return (
    <>
      <div className="fade-in-entry flex-col-center">
        <div className="height-15"></div>
        <div className="flex-row-center">
          <div>
            <Image
              src="/images/media/cup.png"
              alt="location animated icon"
              width={75}
              height={75}
              className="mx-2"
            />
          </div>
          <div>
            <Image
              src="/images/media/disk2.png"
              alt="location animated icon"
              width={75}
              height={75}
              className="mx-2"
            />
          </div>
        </div>
        <span
          className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1"
          style={{ textAlign: "center" }}
        >
          Choose the brand you love most.
        </span>
        <p>Type in the brand you use or "other" if it does not exist.</p>
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
          options={cupsAndDisks}
          value={Brand}
          onChange={handleBrandChange}
          autoHighlight
          getOptionLabel={(option) => option.brand}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
              <Box
                key={key}
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...optionProps}
              >
                {option.brand} - {option.type}
              </Box>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Pick your Cup or Disk"
              error={!!error} // Boolean check to ensure it's true/false
              helperText={error ? "Please type in your preferred brand" : ""}
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
        {!Brand ? (
          <span className="mt-3">Please type in your brand to continue</span>
        ) : (
          <button
            className="mt-3 tran3s button-primary ripple-btn fw-500"
            onClick={handleNextClick}
            style={{ backgroundColor: "#000000" }}
            disabled={!Brand} // Disable button if no brand is selected
          >
            CONTINUE
          </button>
        )}
      </div>
    </>
  );
}
