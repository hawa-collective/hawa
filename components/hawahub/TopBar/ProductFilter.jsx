import React from "react";
import { Card } from "antd";
import Image from "next/image";
import HeroSubscribe from "@/components/home-page/home-10/HeroSubscribe";

const ProductFilter = () => (
  <Card
    bordered={false}
    className="p-30"
    style={{
      backgroundColor: "#dffcf0",
      minHeight: "133px",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}><Image
    src="/images/media/pad.png"
    alt="logo"
    width={60}
    height={60}
    />Pads</div>
      <div className="ms-5"><div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}><Image
    src="/images/media/tampon.png"
    alt="logo"
    width={60}
    height={60}
    />Tampons</div></div>
      <div className="ms-5"><div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}><Image
    src="/images/media/cup.png"
    alt="logo"
    width={60}
    height={60}
    />Cups</div></div>
      <div className="ms-5"><div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}><Image
    src="/images/media/disk2.png"
    alt="logo"
    width={60}
    height={60}
    />Disks</div></div>
    </div>
  </Card>
);
export default ProductFilter;
