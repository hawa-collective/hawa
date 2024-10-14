import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Comment({ Brand, handleNext }) {
  const supabase = createClient();
  const [extraComment, setExtraComment] = useState(null);

  const [email, setEmail] = useState(null);
  const [givenName, setGivenName] = useState(null);
  const [familyName, setFamilyName] = useState(null);
  const [nickName, setNickName] = useState(null);
  const [location, setLocation] = useState(null);
  const [age, setAge] = useState(null);
  const [flow, setFlow] = useState(null);
  const [period, setPeriod] = useState(null);
  const [product, setProduct] = useState(null);
  const [brand, setBrand] = useState(null);
  const [affordability, setAffordability] = useState(null);
  const [ease, setEase] = useState(null);
  const [comfort, setComfort] = useState(null);
  const [overall, setOverall] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [comment, setComment] = useState(null);
  const [collectedStatus, setCollectedStatus] = useState(false);

  console.log("Affordabilty: ", affordability);

  // Survey data submission to database
  const FirstSurveySubmission = async (surveyData) => {
    console.log("Survey Data: ", surveyData);

    try {
      const { data, error } = await supabase
        .from("Sign Up Form")
        .update(surveyData)
        .eq("email", surveyData.email);

      console.log("Response Data: ", data);
      console.log("Response Error: ", error);

      if (error) {
        throw error;
      }

      console.log("Survey submission updated successfully:", data);
    } catch (error) {
      console.error("Error updating survey submission:", error);
    }
  };

  useEffect(() => {
    // Fetch data from session storage once on component mount
    const email = sessionStorage.getItem("email") || "tombayeye9324@gmail.com";
    const given_name = "Tom";
    const family_name = "Bayeye";
    const nick_name = "heavy.bayeye";
    const location = sessionStorage.getItem("location");
    const age = sessionStorage.getItem("age");
    const flow = sessionStorage.getItem("flow");
    const period = sessionStorage.getItem("period");
    const product = sessionStorage.getItem("product type");
    const brand = sessionStorage.getItem("brand");
    const affordability = sessionStorage.getItem("affordability");
    const easeOfUse = sessionStorage.getItem("ease");
    const comfort = sessionStorage.getItem("comfort");
    const overall = 5;
    const quantity = sessionStorage.getItem("usage");
    const comment = sessionStorage.getItem("comment");
    const collected_status = true;

    console.log("easeOfUse: ", easeOfUse)

    if (
      email &&
      given_name &&
      family_name &&
      nick_name &&
      location &&
      age &&
      flow &&
      period &&
      product &&
      brand &&
      affordability &&
      easeOfUse &&
      comfort &&
      overall &&
      quantity &&
      comment
    ) {
      setEmail(email);
      setGivenName(given_name);
      setFamilyName(family_name);
      setNickName(nick_name);
      setLocation(location);
      setAge(age);
      setFlow(flow);
      setPeriod(period);
      setProduct(product);
      setBrand(brand);
      setAffordability(affordability);
      setEase(easeOfUse);
      setComfort(comfort);
      setOverall(overall);
      setQuantity(quantity);
      setComment(comment);
      setCollectedStatus(collected_status);
    }
  }, []);

  const handleExtraComment = (e) => {
    const value = e.target.value;
    setExtraComment(value);
    sessionStorage.setItem("comment", value);
  };

  const handleDataCollect = async () => {
    const surveyData = {
      email: "tombayeye9324@gmail.com",
      given_name: givenName,
      family_name: familyName,
      nick_name: nickName,
      location: location,
      age: age,
      flow: flow,
      period: period,
      product: product,
      brand: brand,
      affordability: affordability,
      ease: ease,
      comfort: comfort,
      overall: overall,
      quantity: quantity,
      comment: comment,
      collected_status: collectedStatus,
    };

    await FirstSurveySubmission(surveyData);
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();

    if (
      email !== null &&
      givenName !== null &&
      familyName !== null &&
      nickName !== null &&
      location !== null &&
      age !== null &&
      flow !== null &&
      period !== null &&
      product !== null &&
      brand !== null &&
      affordability !== null &&
      ease !== null &&
      comfort !== null &&
      overall !== null &&
      quantity !== null &&
      comment !== null
    ) {
      handleDataCollect(); // Call collect function only when values are set
    } else {
      console.log("Some required fields are missing!");
    }
  };

  useEffect(() => {
    // Retrieve the stored comment from sessionStorage when the component mounts
    const storedExtraComment = sessionStorage.getItem("comment");
    if (storedExtraComment) {
      setExtraComment(storedExtraComment);
    }
  }, []);

  return (
    <form onSubmit={handleSurveySubmit}>
      <div className="fade-in-entry flex-col-center">
        <div className="height-15"></div>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <span className="text-center survey-title mb-3 letter-spacing-5 font-jost p-1">
            Is there anything else you would like to say about{" "}
            <strong>
              <em>{Brand.brand}</em>
            </strong>
            ?
          </span>
          <div className="height-15"></div>
          <div>
            <TextField
              id="standard-textarea"
              label="Give your extra comments (optional)"
              placeholder="Type here"
              multiline
              variant="standard"
              value={extraComment}
              onChange={handleExtraComment}
            />
          </div>
        </Box>
        <button
          className="mt-3 tran3s button-primary ripple-btn fw-500"
          type="submit" // Use "submit" type for form submission
          style={{ backgroundColor: "#000000" }}
        >
          FINISH
        </button>
      </div>
    </form>
  );
}
