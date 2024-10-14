import React from "react";
import { Card } from "antd";
import Image from "next/image";
import HeroSubscribe from "@/components/home-page/home-10/HeroSubscribe";

const SearchBar = () => (
  <Card
    bordered={false}
    className="card hero-banner-one p-30"
    style={{
      backgroundColor: "#dffcf0",
      border: "none"
    }}
  >
    <HeroSubscribe />
  </Card>
);
export default SearchBar;
