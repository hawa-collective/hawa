import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TamponsPadsUndies from "@/data/tampons-pads-undies";
import Image from "next/image";

export default function PadsTamponsUndies({ Brand, setBrand, handleNext }) {
  const [error, setError] = useState(false);

  const handleBrandChange = (event, value) => {
    if (value) {
      // Store the selected brand in session storage
      sessionStorage.setItem("brand", value.brand);
      setBrand(value);
      setError(false); // Clear the error when a valid brand is selected
    } else {
      setBrand(null);
    }
  };

  useEffect(() => {
    // Retrieve the stored brand from sessionStorage
    const storedBrand = sessionStorage.getItem("brand");

    if (storedBrand) {
      const brandObject = TamponsPadsUndies.find(
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
              src="/images/media/tampon.png"
              alt="tampon icon"
              width={75}
              height={75}
              className="mx-2"
            />
          </div>
          <div>
            <Image
              src="/images/media/pad.png"
              alt="pad icon"
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
        <p style={{ fontSize: "14px" }}>Type in the brand you use or "other" if it does not exist.</p>
        <div className="height-15"></div>
        <Autocomplete
          style={{ boxShadow: "1px 1px #a5a5a5", borderRadius: "20px" }}
          id="brand-select"
          sx={{
            width: {
              xs: "90vw", // small devices
              sm: "50vw", // tablets and mid devices
              md: "30vw", // desktops
            },
          }}
          options={TamponsPadsUndies}
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
              label="For example 'Always Ultra'"
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
          <span className="mt-3 warn-text">Please type in your brand to continue</span>
        ) : (
          <button
            className="mt-3 tran3s button-primary ripple-btn fw-500"
            onClick={handleNextClick}
            style={{ backgroundColor: "#8D447F" }}
            disabled={!Brand} // Disable button if no brand is selected
          >
            CONTINUE
          </button>
        )}
      </div>
    </>
  );
}
