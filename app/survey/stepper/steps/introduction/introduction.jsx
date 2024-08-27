"use client";

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
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
    <Card className="fade-in-entry flex-col-center" sx={{ maxWidth: 345 }}>
      <div className="mt-4">
        <Image
          priority
          src="/images/media/patience.png"
          alt="logo"
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
            className="m-0 me-1"
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
        <Typography variant="body2" component="div" className="text-dark">
          Hawa is dedicated to educating the public about menstrual heath.
          Completing this survey helps us bring you and many others useful
          information on sanitary products.
          <br />
          <br />
          We understand this may be a sensitive topic and that's why we do not
          sell your data.
          <br />
          <br />
          We only use collected data to curate a personalised experience and put
          together useful insights that guide on menstrual health.
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
              onClick={() => handleNext("location")}
              style={{ backgroundColor: "#000000" }}
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
