import React, { useState, useEffect } from "react";
import ProductRater from "@/components/product-rater/ProductRater";

export default function RateProduct({
  productType,
  setProductType,
  Brand,
  handleNext,
}) {
  const [ratings, setRatings] = useState({
    affordability: null,
    ease: null,
    comfort: null,
  });

  useEffect(() => {
    // Retrieve ratings from sessionStorage when the component mounts
    const storedRatings = {
      affordability: sessionStorage.getItem("affordability"),
      ease: sessionStorage.getItem("ease"),
      comfort: sessionStorage.getItem("comfort"),
    };
    setRatings(storedRatings);
  }, []);

  const handleRatingChange = (factor, rating) => {
    // Update rating in sessionStorage and state
    setRatings((prevRatings) => {
      const updatedRatings = { ...prevRatings, [factor]: rating };
      sessionStorage.setItem(factor, rating);
      return updatedRatings;
    });
  };

  // Check if all ratings are provided
  const allRatingsProvided = Object.values(ratings).every(
    (rating) => rating !== null
  );

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
        <div className="flex-col-center mb-35 ratecard my-3 br-4">
          <div className="px-3 pt-2">
            <h4 className="font_futurabook fw-bold fw-bold">Affordability</h4>
          </div>
          <div className="px-3 pb-4" style={{ marginTop: "-20px" }}>
            <ProductRater
              productType={productType}
              setProductType={setProductType}
              factorName="affordability"
              onRatingChange={handleRatingChange}
              rating={ratings.affordability}
            />
          </div>
        </div>
        <div className="flex-col-center mb-35 ratecard my-3 br-4">
          <div className="px-3 pt-2">
            <h4 className="font_futurabook fw-bold">Ease of Use</h4>
          </div>
          <div className="px-3 pb-4" style={{ marginTop: "-20px" }}>
            <ProductRater
              productType={productType}
              setProductType={setProductType}
              factorName="ease"
              onRatingChange={handleRatingChange}
              rating={ratings.ease}
            />
          </div>
        </div>
        <div className="flex-col-center mb-35 ratecard my-3 br-4">
          <div className="px-3 pt-2">
            <h4 className="font_futurabook fw-bold">Comfort</h4>
          </div>
          <div className="px-3 pb-4" style={{ marginTop: "-20px" }}>
            <ProductRater
              productType={productType}
              setProductType={setProductType}
              factorName="comfort"
              onRatingChange={handleRatingChange}
              rating={ratings.comfort}
            />
          </div>
        </div>
      </div>
      {allRatingsProvided ? (
        <button
          className="mt-3 tran3s button-primary ripple-btn fw-500"
          onClick={() => handleNext("heaviest")}
          style={{ backgroundColor: "#8D447F" }}
        >
          CONTINUE
        </button>
      ) : (
        <span className="mt-3 warn-text">
          Please rate all factors to continue.
        </span>
      )}
    </div>
  );
}
