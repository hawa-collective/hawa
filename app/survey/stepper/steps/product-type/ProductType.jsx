"use client";

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Image from "next/image";

const ProductType = ({
  ProductTypeSelect,
  setProductType,
  productType,
  handleNext,
}) => {
  useEffect(() => {
    // Retrieve the stored flow from sessionStorage when the component mounts
    const storedProductType = sessionStorage.getItem("product type");
    if (storedProductType) {
      setProductType(storedProductType);
    }
  }, []);

  const optionOneTwo = [
    <Button
      key="pad"
      id="pad"
      className={`mb-3 flex-col-center  background-light pt-3 ${
        productType === "pad" ? "floating-card" : "border-light"
      }`}
      style={{ width: "177px" }}
      onClick={(e) => ProductTypeSelect(e.currentTarget.id)}
    >
      <div className="fade-in-entry flex-col-center">
        <div>
          <Image
            src="/images/media/pad.png"
            alt="location animated icon"
            width={77}
            height={77}
          />
        </div>
        <div className="mt-3"></div>
        <div>
          <p>Pad</p>
        </div>
      </div>
    </Button>,
    <Button
      key="cup"
      id="cup"
      className={`flex-col-center  background-light pt-3 ${
        productType === "cup" ? "floating-card" : "border-light"
      }`}
      style={{ width: "177px" }}
      onClick={(e) => ProductTypeSelect(e.currentTarget.id)}
    >
      <div className="fade-in-entry flex-col-center">
        <div>
          <Image
            src="/images/media/cup.png"
            alt="location animated icon"
            width={77}
            height={77}
          />
        </div>
        <div className="mt-3"></div>
        <div>
          <p>Cup</p>
        </div>
      </div>
    </Button>,
  ];

  const bottomCards = [
    <Button
      key="tampon"
      id="tampon"
      className={`mb-3 flex-col-center  background-light pt-3 ${
        productType === "tampon" ? "floating-card" : "border-light"
      }`}
      style={{ width: "177px" }}
      onClick={(e) => ProductTypeSelect(e.currentTarget.id)}
    >
      <div className="fade-in-entry flex-col-center">
        <div>
          <Image
            src="/images/media/tampon.png"
            alt="location animated icon"
            width={77}
            height={77}
          />
        </div>
        <div className="mt-3"></div>
        <div>
          <p>Tampon</p>
        </div>
      </div>
    </Button>,
    <Button
      key="disk"
      id="disk"
      className={`flex-col-center  background-light pt-3 ${
        productType === "disk" ? "floating-card" : "border-light"
      }`}
      style={{ width: "177px" }}
      onClick={(e) => ProductTypeSelect(e.currentTarget.id)}
    >
      <div className="fade-in-entry flex-col-center">
        <div>
          <Image
            src="/images/media/disk2.png"
            alt="location animated icon"
            width={77}
            height={77}
          />
        </div>
        <div className="mt-3"></div>
        <div>
          <p>Disk</p>
        </div>
      </div>
    </Button>,
  ];

  return (
    <div className="fade-in-entry flex-col-center">
      <div className="height-15"></div>
      <span
        className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1"
        style={{ textAlign: "center" }}
      >
        What type of sanitary product do you prefer?
      </span>
      <div className="height-15"></div>
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="Vertical group"
          variant="contained"
          className="p-1"
        >
          {optionOneTwo}
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          aria-label="Vertical button group"
          variant="contained"
          className="p-1"
        >
          {bottomCards}
        </ButtonGroup>
      </Box>
      <button
        className="mt-3 tran3s button-primary ripple-btn fw-500"
        onClick={() => handleNext("specific")}
        style={{ backgroundColor: "#000000" }}
      >
        CONTINUE
      </button>
    </div>
  );
};

export default ProductType;
