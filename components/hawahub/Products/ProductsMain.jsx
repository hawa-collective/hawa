"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Card, Button, } from 'antd';
import ProductDetails from "./ProductDetails";
import ProductBadge from "./ProductBadge";
import NameAndRating from "./NameAndRating";

export default function ProductsMain() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ProductDetails open={open} placement={placement} onClose={onClose} />
      <Card
        bordered={false}
        style={{
          backgroundColor: "#dffcf0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "96%",
          marginTop: "20px",
        }}
        className="product_details_card"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <div>
            <Image
              src="/images/media/numbering.png"
              alt="logo"
              width={85}
              height={85}
            />
          </div>
          <div className="flex-row-center">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                marginRight: "30px",
              }}
            >
              <Image
                src="/images/media/cup.png"
                alt="logo"
                width={85}
                height={85}
              />
              <ProductBadge title="Cup" />
            </div>
            <NameAndRating name="Diva Cup" rating="3" users="7" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            flexGrow: 5,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="me-3"
            >
              <Image
                src="/images/media/rate.png"
                alt="logo"
                width={50}
                height={50}
              />
              <p className="m-0 text-bold">Rate</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a onClick={showDrawer}>
                <Image
                  src="/images/media/details.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <p className="m-0 text-bold">Details</p>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
