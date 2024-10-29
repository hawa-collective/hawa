import React from "react";
import Introduction from "./introduction/introduction";
import Name from "./Name/Name";
import Location from "./location/Location";
import Age from "./Age/Age";
import Flow from "./FlowType/Flow";
import Period from "./Period/Period";
import ProductType from "./product-type/ProductType";
import PadsTamponsUndies from "./PadsTamponsUndies/PadsTamponsUndies";
import CupAndDisk from "./CupAndDisk/CupAndDisk";
import RateProduct from "./RateProduct/RateProduct";
import HeaviestPads from "./HeaviestPads/HeaviestPads";
import HeaviestCups from "./HeaviestCups/HeaviestCups";
import Comment from "./Comment/Comment";

function Steps({
  stepStatus,
  ProductTypeSelect,
  setProductType,
  productType,
  Brand,
  setBrand,
  ratings,
  setRatings,
  handleNext,
}) {
  const rendersteps = (stepStatus, productType) => {
    console.log("Step Status:", stepStatus);

    switch (stepStatus) {
      case "introduction":
        return <Introduction handleNext={handleNext} />;
      case "name":
        return <Name handleNext={handleNext} />;
      case "location":
        return <Location handleNext={handleNext} />;
      case "age":
        return <Age handleNext={handleNext} />;
      case "flow":
        return <Flow handleNext={handleNext} />;
      case "period":
        return <Period handleNext={handleNext} />;
      case "type":
        return (
          <ProductType
            ProductTypeSelect={ProductTypeSelect}
            setProductType={setProductType}
            productType={productType}
            Brand={Brand}
            handleNext={handleNext}
          />
        );
      case "specific":
        if (
          productType === "tampon" ||
          productType === "pad" ||
          productType === "underwear"
        ) {
          return (
            <PadsTamponsUndies
              Brand={Brand}
              setBrand={setBrand}
              handleNext={handleNext}
            />
          );
        }
        return (
          <CupAndDisk
            Brand={Brand}
            setBrand={setBrand}
            handleNext={handleNext}
          />
        );
      case "rating":
        return (
          <RateProduct
            productType={productType}
            setProductType={setProductType}
            Brand={Brand}
            rating={ratings}
            setRating={setRatings}
            handleNext={handleNext}
          />
        );
      case "heaviest":
        if (
          productType === "tampon" ||
          productType === "pad" ||
          productType === "underwear"
        ) {
          return (
            <HeaviestPads productType={productType} handleNext={handleNext} />
          );
        }
        return (
          <HeaviestCups productType={productType} handleNext={handleNext} />
        );
      case "comment":
        return (
          <Comment Brand={Brand} setBrand={setBrand} handleNext={handleNext} />
        );
      default:
        return <div>Unknown step !!!!</div>;
    }
  };

  return (
    <div className="questionnaire_width">
      {rendersteps(stepStatus, productType)}
    </div>
  );
}

export default Steps;
