const express = require('express');
const app = express();

let userValidAccessToken = null;
let userValidRefreshToken = null;
let tokenExpiry = null;
let appValidState = null;
let userinfoData = null;

console.log("GLOBAL ACCESS TOKEN: \n", userValidAccessToken);
console.log("GLOBAL REFRESH TOKEN: \n", userValidRefreshToken);
console.log("GLOBAL APP STATE: \n", appValidState);
console.log("GLOBAL USER INFO: \n", userinfoData);

// 3.3 ================ Send Global Access Token & App State to React ================ 3.3 //

app.get("/api/set-access-token", (req, res) => {
    try {
      res.json({
        access_token: userValidAccessToken,
        refresh_token: userValidRefreshToken,
        token_expiry_seconds: tokenExpiry,
        app_state: appValidState,
      });
      console.log(
        `SENT ACCESS TOKEN TO BROWSER COOKIE: ${userValidAccessToken} \n
           SENT REFRESH TOKEN TO BROWSER COOKIE: ${userValidRefreshToken} \n
           SENT ACCESS TOKEN EXPIRY IN SECONDS TO BROWSER COOKIE: ${tokenExpiry} \n
           SENT GLOBAL APP STATE: ${appValidState} \n`
      );
      console.log("TOKENS SUCCESSFULLY SENT TO REACT");
    } catch (error) {
      console.error("Error in /api/set-access-token endpoint:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  app.post("/api/reset-data", async (req, res) => {
    // Extract the user email from the request body
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: "User email is required" });
    }
  
    try {
      // Reset your global variables or perform necessary actions here
      userValidAccessToken = null;
      userValidRefreshToken = null;
      tokenExpiry = null;
      appValidState = null;
      userinfoData = null;
  
      // Delete sign-in records associated with the provided user email from the PostgreSQL database
      const result = await deleteSignInRecords(email);
  
      res.json({
        message: "Reset successful",
        email,
        deletedRecords: result.rowCount,
      });
    } catch (error) {
      console.error("Error during reset:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  // Define a new endpoint for refreshing the token
  app.post("/api/refresh-token", async (req, res) => {
    console.log("Received refresh token request");
    const refreshToken = req.body.refresh_token;
  
    try {
      await useRefreshToken(refreshToken);
      res.status(200).send("Access Token Successfully Refreshed");
      tokenExpiry = null;
    } catch (error) {
      console.error("Error refreshing token: ", error);
      res.status(500).send("Error refreshing token");
    }
  });
  
  // 3.3 ================ Send Global Access Token & App State to React ================ 3.3 //

module.exports = app;
