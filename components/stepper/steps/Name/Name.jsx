import React, { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import VideoBlock from '@/components/about/VideoBlock';

export default function Name({ handleNext }) {
    const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleNameChange = (event) => {
    // Filter non-numeric characters
    let value = event.target.value;
  
    if (value === '') {
      // Allow the input field to be empty
      setName('');
      sessionStorage.setItem("name", '');
      setError(true); // Set an error if the input is empty
    } else {
      // Set the value as entered by the user
      setName(value);
      sessionStorage.setItem("name", value);
      setError(false); // Clear error if age is valid
    }
  };

  const handleContinueClick = () => {
    if (!name) {
      setError(true); // Show error if no name is entered
    } else {
      handleNext("location");
    }
  };

  useEffect(() => {
    // Retrieve the stored age from sessionStorage when the component mounts
    const storedName = sessionStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);
  return (
    <div className="fade-in-entry flex-col-center">
      <div className="height-15"></div>
      <Image
        src="/images/media/name.png"
        alt="age icon"
        width={150}
        height={150}
      />
      <span
        className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1"
        style={{ textAlign: "center" }}
      >
        Type in your preferred username that will be used in your profile.
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
          label="Enter your name"
          variant="standard"
          type="text"
          value={name}
          onChange={handleNameChange}
          error={!!error}
          helperText={error ? "Please enter your name" : ""}
        />
      </Box>
      {name === "" ? (
        <span className="mt-3 warn-text">Enter your name to continue.</span>
      ) : (
        <button
          className="mt-3 tran3s button-primary ripple-btn fw-500"
          onClick={handleContinueClick}
          style={{ backgroundColor: "#8D447F" }}
          disabled={!name}
        >
          CONTINUE
        </button>
      )}
    </div>
  )
}
