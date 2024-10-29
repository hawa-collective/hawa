"use client";

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function Introduction({ handleNext }) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsPageLoaded(true);
    };

    // Check if the document is already fully loaded
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    <Card
      className="fade-in-entry flex-col-center"
      sx={{ maxWidth: 1080, boxShadow: "none", padding: "0" }}
    >
      <div className="mt-4">
        <Image
          priority
          src="/images/favicon/icon.png"
          alt="favicon"
          width={100}
          height={100}
        />
      </div>
      <CardContent>
        <div
          className="mb-15"
          style={{
            display: "inline-flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="m-0 me-1 p-0"
          >
            Hey You!
          </Typography>
          {/* <div className="ms-1">
            <Image
              src="/images/media/hand-wave.png"
              alt="logo"
              width={35}
              height={35}
            />
          </div> */}
        </div>
        <Typography variant="body2" component="div" className="text-dark padding_none" style={{ fontSize: "19px", letterSpacing: "0.05rem", }}>
          Hawa is dedicated to educating the public about menstrual heath.
          Completing this survey helps us bring you and many others useful
          information on menstrual products.
          <br />
          <br />
          Details on the specific rating you give products will only be
          available on your account. We take the average score given by all
          people that rate the product and use that average as the product
          score.
          <br />
          <br />
          We understand this may be a sensitive topic and that's why we shall
          keep your data private. Please read our <a href="/policy/privacy" target="_blank" style={{ color: "8e44ff", textDecoration: "underline" }}>privacy policy</a>.
          <br />
          <br />
          Thank you for joining us on our journey to give a voice to the users
          of menstrual products.
        </Typography>
        <div className="flex-col-center mt-15">
          <Typography
            className="tran3s"
            style={{ fontSize: "13px", marginTop: "5px" }}
          >
            {isPageLoaded ? (
              <strong>Takes 1 minute 15 seconds</strong>
            ) : (
              <strong>Patience is a virtue</strong>
            )}
          </Typography>
          {isPageLoaded ? (
            <button
              className="mt-1 tran3s button-primary ripple-btn fw-500"
              onClick={() => handleNext("name")}
              style={{ backgroundColor: "#8D447F" }}
            >
              GET STARTED
            </button>
          ) : (
            <button
              className="mt-3 tran3s button-primary ripple-btn fw-500 button-disabled"
              onClick={() => handleNext("location")}
              style={{ backgroundColor: "#707070" }}
            >
              LOADING...
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
