import React from "react";
import { Flex, Tag } from "antd";

const AgeBadge = ({ age }) => (
  <Tag
    color="#600c00"
    style={{
      borderRadius: "17px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 5px",
      fontStyle: "italic",
      fontWeight: "bold"
    }}
  >
    {age} years
  </Tag>
);
export default AgeBadge;
