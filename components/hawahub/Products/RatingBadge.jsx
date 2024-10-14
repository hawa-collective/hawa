import React, { useState } from "react";
import { Badge, Space, } from "antd";
const RatingBadge = ({rating, color}) => {
  const [show, setShow] = useState(true);
  return (
    <Space>
      <Badge count={show ? rating : 0} showZero color={color}  style={{ fontWeight: "bold" }} />
    </Space>
  );
};
export default RatingBadge;
