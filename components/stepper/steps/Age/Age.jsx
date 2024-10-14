import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Image from "next/image";

export default function Age({ handleNext }) {
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Retrieve the stored age from sessionStorage when the component mounts
    const storedAge = sessionStorage.getItem("age");
    if (storedAge) {
      setAge(storedAge);
    }
  }, []);

  const handleAgeChange = (event) => {
    // Filter non-numeric characters
    let value = event.target.value.replace(/[^0-9]/g, '');
  
    if (value === '') {
      // Allow the input field to be empty
      setAge('');
      sessionStorage.setItem("age", '');
      setError(true); // Set an error if the input is empty
    } else {
      // Set the value as entered by the user
      setAge(value);
      sessionStorage.setItem("age", value);
      setError(false); // Clear error if age is valid
    }
  };
  
  const handleAgeBlur = () => {
    // Enforce minimum age when input loses focus and is not empty
    if (age !== '' && parseInt(age, 10) < 16) {
      const validAge = "16";
      setAge(validAge);
      sessionStorage.setItem("age", validAge);
      setError(false); // Clear error if age is valid
    }
  };
  
  
  
  

  const handleContinueClick = () => {
    if (!age) {
      setError(true); // Show error if no age is entered
    } else {
      handleNext("flow");
    }
  };

  return (
    <div className="fade-in-entry flex-col-center">
      <div className="height-15"></div>
      <Image
        src="/images/media/age-img.svg"
        alt="age icon"
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
          type="number" // Ensure input is restricted to numbers
          value={age}
          onChange={handleAgeChange}
          error={!!error}
          helperText={error ? "Please enter your age" : ""}
        />
      </Box>
      {age === "" || age < 16 ? (
        <span className="mt-3 warn-text">You must be 16 years and older to continue.</span>
      ) : (
        <button
          className="mt-3 tran3s button-primary ripple-btn fw-500"
          onClick={handleContinueClick}
          style={{ backgroundColor: "#000000" }}
          disabled={!age}
        >
          CONTINUE
        </button>
      )}
    </div>
  );
}
