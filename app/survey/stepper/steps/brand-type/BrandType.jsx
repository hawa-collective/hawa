// firstStep/pBrand.jsx

"use client";

import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BrandType({ handleNext }) {
  const [Brand, setProduct] = React.useState("");

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  return (
    <div className="fade-in-entry flex-col-center">
      <span
        className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1"
        style={{ textAlign: "center" }}
      >
        Choose the brand you love
      </span>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Tampons, Pads & Underwears
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={Brand}
          onChange={handleChange}
          label="Brand"
        >
          <MenuItem value="">
            <em>Tampons, Pads & Underwears</em>
          </MenuItem>
          <MenuItem value={10}>Always Discreet Pads</MenuItem>
          <MenuItem value={20}>Always Maxi Thick</MenuItem>
          <MenuItem value={30}>Always Maxi Thick</MenuItem>
          <MenuItem value={10}>Always Radiant Pads</MenuItem>
          <MenuItem value={20}>Always Ultra Thin Pads</MenuItem>
          <MenuItem value={30}>Be Girl Period Panties</MenuItem>
        </Select>
        <button
          className="mt-3 tran3s button-primary ripple-btn fw-500"
          onClick={() => handleNext("rating")}
          style={{ backgroundColor: "#000000" }}
        >
          CONTINUE
        </button>
      </FormControl>
    </div>
  );
}
