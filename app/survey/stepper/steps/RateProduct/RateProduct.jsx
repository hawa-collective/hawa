import React from "react";
import ProductRater from "@/components/product-rater/ProductRater";

export default function RateProduct({ productType, setProductType, Brand, handleNext }) {
  const handleRatingChange = (factor, rating) => {
    sessionStorage.setItem(factor, rating);
  };

  return (
    <div className="flex-col-center">
      <div>
        <span
          className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1"
          style={{ textAlign: "center" }}
        >
          Rate <em>{Brand.brand}</em> based on the factors below:
        </span>
        <div className="height-15"></div>
      </div>
      <div>
        <div className="mb-35">
          <h5 className="font_futurabook">Affordability</h5>
          <ProductRater productType={productType} setProductType={setProductType} factorName="Affordability" onRatingChange={handleRatingChange} />
        </div>
        <div className="mb-35">
          <h5 className="font_futurabook">Ease of Use</h5>
          <ProductRater productType={productType} setProductType={setProductType} factorName="EaseOfUse" onRatingChange={handleRatingChange} />
        </div>
        <div className="mb-35">
          <h5 className="font_futurabook">Comfort</h5>
          <ProductRater productType={productType} setProductType={setProductType} factorName="Comfort" onRatingChange={handleRatingChange} />
        </div>
      </div>
      <button
        className="mt-3 tran3s button-primary ripple-btn fw-500"
        onClick={() => handleNext("heaviest")}
        style={{ backgroundColor: "#000000" }}
      >
        NEXT
      </button>
    </div>
  );
}
