import React from "react";
import { Flex, Tag } from "antd";

const ProductBadge = ({ title }) => (
  <Tag
    color="#600c00"
    style={{
      minWidth: "100%",
      borderRadius: "17px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      fontStyle: "italic",
    }}
  >
    {title}
  </Tag>
);
export default ProductBadge;
