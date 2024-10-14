import React from "react";
import Image from "next/image";
import { Button, Drawer, Space } from "antd";
import RatingBadge from "./RatingBadge";
import AgeBadge from "./AgeBadge";
import FlowBadge from "./FlowBadge";
import FlowComparison from "./FlowComparison";
const ProductDetails = ({ open, placement, onClose }) => {
  const productTitle = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Image
        src="/images/media/cup.png"
        alt="logo"
        width={50}
        height={50}
        className="me-2"
      />
      <h1
        className="font_futurabook"
        style={{
          fontWeight: "900",
          fontSize: "33px",
          lineHeight: "60px",
          marginBottom: "0",
        }}
      >
        Diva Cup Details
      </h1>
    </div>
  );
  return (
    <>
      <Drawer
        className="product_details_drawer"
        title={productTitle}
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button
              onClick={onClose}
              style={{ color: "#600c00", borderColor: "#600c00" }}
            >
              Close
            </Button>
          </Space>
        }
        // style={{
        //   backgroundImage: "url(/images/assets/bg-17.svg)",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center center",
        // }}
        style={{
          backgroundImage: 'url("/images/assets/bg-1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div className="me-5" style={{ flexGrow: "1" }}>
            <h3>How did other users rate this product?</h3>
            <p>
              Rated <RatingBadge rating="3" color="#b46639" /> by 7 users
            </p>
            <p>
              Affordability <RatingBadge rating="3" color="#b46639" />
            </p>
            <p>
              Comfort <RatingBadge rating="3" color="#b46639" />
            </p>
            <p>
              Ease Of Use <RatingBadge rating="4" color="#c6d830" />
            </p>
          </div>
          <div className="me-5" style={{ flexGrow: "2" }}>
            <h3>Usage statistics from other users</h3>
            <p className="flex-row">
              Age range that prefers to use Diva Cup <AgeBadge age="18-24" />
            </p>
            <p className="flex-row">
              Type of flow that prefers this product <FlowBadge flow="light" />
            </p>
            <p className="flex-row">
              Light flow users <FlowComparison users="10" />
            </p>
            <p className="flex-row">
              Heavy flow users <FlowComparison users="0" />
            </p>
          </div>
          {/* <div>Comments from users</div> */}
        </div>
      </Drawer>
    </>
  );
};
export default ProductDetails;
