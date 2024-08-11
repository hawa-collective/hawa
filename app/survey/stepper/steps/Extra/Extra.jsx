import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Extra({Brand, handleNext}) {
  const [extraComment, setExtraComment] = useState("");

  const handleExtraComment = (event) => {
    const value = event.target.value;
    // Update the state with the new value
    setExtraComment(value);
    // Store the value in sessionStorage
    sessionStorage.setItem("extra", value);
  }

  useEffect(() => {
    // Retrieve the stored age from sessionStorage when the component mounts
    const storedExtraComment = sessionStorage.getItem("extra");
    if (storedExtraComment) {
      setExtraComment(storedExtraComment);
    }
  }, []);
  
  return (
    <div className="fade-in-entry flex-col-center">
      <div className="height-15"></div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <span
        className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1"
        style={{ textAlign: "center" }}
      >
        Is there anything else you would like to say about <strong><em>{Brand.brand}</em></strong>?
      </span>
      <div className="height-15"></div>
        <div>
          {/* <TextField
              id="standard-multiline-flexible"
              label="Multiline"
              multiline
              maxRows={4}
              variant="standard"
            /> */}
          <TextField
            id="standard-textarea"
            label="Give your extra comments (optional)"
            placeholder="Type here"
            multiline
            variant="standard"
            value={extraComment}
            onChange={handleExtraComment}
          />
          {/* <TextField
              id="standard-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="standard"
            /> */}
        </div>
      </Box>
      <button
        className="mt-3 tran3s button-primary ripple-btn fw-500"
        onClick={() => handleNext("finish")}
        style={{ backgroundColor: "#000000" }}
      >
        FINISH
      </button>
    </div>
  );
}
