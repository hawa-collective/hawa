import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Image from "next/image";

export default function Age({ handleNext }) {
  const [age, setAge] = useState("");

  useEffect(() => {
    // Retrieve the stored age from sessionStorage when the component mounts
    const storedAge = sessionStorage.getItem("age");
    if (storedAge) {
      setAge(storedAge);
    }
  }, []);

  const handleAgeChange = (event) => {
    const value = event.target.value;
    // Update the state with the new value
    setAge(value);
    // Store the value in sessionStorage
    sessionStorage.setItem("age", value);
  };

  return (
    <div className="fade-in-entry flex-col-center">
      <div className="height-15"></div>
      <Image
        src="/images/media/age-img.svg"
        alt="location animated icon"
        width={100}
        height={100}
      />
      <span
        className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1"
        style={{ textAlign: "center" }}
      >
        How old are you?
      </span>
      <div className="height-15"></div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Enter your age"
          variant="standard"
          value={age} // Bind value to state
          onChange={handleAgeChange} // Handle change event
        />
      </Box>
      <button
        className="mt-3 tran3s button-primary ripple-btn fw-500"
        onClick={() => handleNext("flow")}
        style={{ backgroundColor: "#000000" }}
      >
        Next
      </button>
    </div>
  );
}
