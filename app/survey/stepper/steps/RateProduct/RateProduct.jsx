import React, { useState, useEffect } from "react";
import ProductRater from "@/components/product-rater/ProductRater";

export default function RateProduct({
  productType,
  setProductType,
  Brand,
  handleNext,
}) {
  const [ratings, setRatings] = useState({
    Affordability: null,
    EaseOfUse: null,
    Comfort: null,
  });

  useEffect(() => {
    // Retrieve ratings from sessionStorage when the component mounts
    const storedRatings = {
      Affordability: sessionStorage.getItem("Affordability"),
      EaseOfUse: sessionStorage.getItem("EaseOfUse"),
      Comfort: sessionStorage.getItem("Comfort"),
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
        <div className="flex-col-center mb-35 floating-card my-3 br-4">
          <div className="px-3 pt-2">
            <h4 className="font_futurabook fw-bold fw-bold">Affordability</h4>
          </div>
          <div style={{ border: "1px dotted #1c1c1c", width: "100%" }}></div>
          <div className="px-3 py-2" style={{ backgroundColor: "#600c00" }}>
            <ProductRater
              productType={productType}
              setProductType={setProductType}
              factorName="Affordability"
              onRatingChange={handleRatingChange}
              rating={ratings.Affordability}
            />
          </div>
        </div>
        <div className="flex-col-center mb-35 floating-card my-3 br-4">
          <div className="px-3 pt-2">
            <h4 className="font_futurabook fw-bold">Ease of Use</h4>
          </div>
          <div style={{ border: "1px dotted #1c1c1c", width: "100%" }}></div>
          <div className="px-3 py-2" style={{ backgroundColor: "#600c00" }}>
          <ProductRater
            productType={productType}
            setProductType={setProductType}
            factorName="EaseOfUse"
            onRatingChange={handleRatingChange}
            rating={ratings.EaseOfUse}
          />
          </div>
        </div>
        <div className="flex-col-center mb-35 floating-card my-3 br-4">
          <div className="px-3 pt-2">
            <h4 className="font_futurabook fw-bold">Comfort</h4>
          </div>
          <div style={{ border: "1px dotted #1c1c1c", width: "100%" }}></div>
          <div className="px-3 py-2" style={{ backgroundColor: "#600c00" }}>
          <ProductRater
            productType={productType}
            setProductType={setProductType}
            factorName="Comfort"
            onRatingChange={handleRatingChange}
            rating={ratings.Comfort}
          />
          </div>
        </div>
      </div>
      {allRatingsProvided ? (
        <button
          className="mt-3 tran3s button-primary ripple-btn fw-500"
          onClick={() => handleNext("heaviest")}
          style={{ backgroundColor: "#000000" }}
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
