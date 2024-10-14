// import React from "react";
// import { Flex, Tag } from "antd";

// const FlowComparison = ({ users }) => (
//   <Tag
//     color="#600c00"
//     style={{
//       borderRadius: "17px",
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "center",
//       alignItems: "center",
//       margin: "0 5px",
//       fontStyle: "italic",
//     }}
//   >
//     {users}
//   </Tag>
// );
// export default FlowComparison;

import React, { useState } from "react";
import { Badge, Space, } from "antd";
const FlowComparison = ({users}) => {
  const [show, setShow] = useState(true);
  return (
    <Space className="ms-2">
      <Badge count={show ? users : 0} showZero color="#600c00"   style={{ fontWeight: "bold" }}/>
    </Space>
  );
};
export default FlowComparison;

