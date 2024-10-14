import React from "react";
import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";
import SurveyCard from "./SurveyCard";
import ProductFilter from "./ProductFilter";

export default function TopBarMain() {
  return (
    <>
    <div className="row">
      <div className="col-lg-2">
        <ProfileCard />
      </div>
      <div className="col-lg-10">
        <SearchBar />
      </div>
    </div>
    <div className="row mt-20">
      <div className="col-lg-2">
        <SurveyCard />
      </div>
      <div className="col-lg-10">
        <ProductFilter />
      </div>
    </div>
    </>
  );
}
