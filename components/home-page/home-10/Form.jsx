"use client";
import React from "react";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="form-padding">
      <input type="email" placeholder="Your Email" required />
      <button type="submit" className="tran3s position-absolute">
        Subscribe
      </button>
    </form>
  );
};

export default Form;
