import React from "react";
import Introduction from "./introduction/introduction";
import Location from "./location/Location";
import Age from "./Age/Age";
import Flow from "./FlowType/Flow";
import Period from "./Period/Period";
import ProductType from "./product-type/ProductType";
import BrandType from "./brand-type/BrandType";
import PadsTamponsUndies from "./PadsTamponsUndies/PadsTamponsUndies";
import CupAndDisk from "./CupAndDisk/CupAndDisk";
import RateProduct from "./RateProduct/RateProduct";
import HeaviestPads from "./HeaviestPads/HeaviestPads";
import HeaviestCups from "./HeaviestCups/HeaviestCups";
import Extra from "./Extra/Extra";

function Steps({
  stepStatus,
  ProductTypeSelect,
  setProductType,
  productType,
  activeStep,
  Brand,
  setBrand,
  ratings,
  setRatings,
  handleBack,
  handleNext,
}) {
  const rendersteps = (stepStatus, productType) => {
    console.log("Step Status:", stepStatus, "\n", "Product Type:", productType);

    switch (stepStatus) {
      case "introduction":
        return <Introduction handleNext={handleNext} />;
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
      case "extra":
        return (
          <Extra Brand={Brand} setBrand={setBrand} handleNext={handleNext} />
        );
      default:
        return <div>Unknown step !!!!</div>;
    }
  };

  return <div>{rendersteps(stepStatus, productType)}</div>;
}

export default Steps;
