"use client";

import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState(false);
  const [isCookiePolicyAccepted, setIsCookiePolicyAccepted] = useState(false); // State for cookie policy
  const supabase = createClient();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue); // Update email state on every change

    // Validate the email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const completeEmail = emailRegex.test(emailValue);

    if (completeEmail) {
      setError(false); // Clear error state if email is valid
    } else if (isCookiePolicyAccepted && !completeEmail) {
      setError(true);
      setNotice("Please complete the email address.");
    } else {
      setError(true);
      setNotice("Please enter a valid email address.");
    }
  };

  const handleCookiePolicyChange = (e) => {
    setIsCookiePolicyAccepted(e.target.checked); // Update state when checkbox is clicked
  };

  const signInWithEmail = async (email) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false, // Set this according to your use case
        emailRedirectTo: "http://localhost:3000/survey", // Change to your redirect URL
      },
    });

    if (error) {
      console.error("Error sending OTP:", error.message);
      setMessage("Error sending OTP. Please try again.");
      return;
    }

    setMessage("A login link has been sent to the email entered below.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isCookiePolicyAccepted) {
      setError(true);
      setNotice("You must agree to the cookie policy to proceed.");
      return; // Prevent form submission if cookie policy is not accepted
    } else if (isCookiePolicyAccepted && error) {
      setNotice("Please complete the email address.");
    }

    if (isCookiePolicyAccepted && !error) {
      // Proceed only if there are no errors
      await signInWithEmail(email);
    }
  };

  return (
    <div>
      <form action="#" className="user-data-form mt-0" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            {message && (
              <p
                style={{
                  fontSize: "14px",
                  color: "green",
                  textAlign: "center",
                }}
              >
                {message}
              </p>
            )}
            {error && notice && (
              <p
                style={{
                  fontSize: "14px",
                  color: "#600c00",
                  textAlign: "center",
                }}
              >
                {notice}
              </p>
            )}
            <div className="input-group-meta mb-30">
              <input
                type="email"
                placeholder="myemail@gmail.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="agreement-checkbox d-flex justify-content-between align-items-center">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  checked={isCookiePolicyAccepted}
                  onChange={handleCookiePolicyChange}
                />
                <label htmlFor="remember">
                  I accept the{" "}
                  <a href="/policy/privacy" target="_blank">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/policy/cookie" target="_blank">
                    Cookie Policy
                  </a>{" "}
                  while using this website.
                </label>
              </div>
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12 mt-3">
            <button
              className="btn-twentyTwo w-100 fw-500 tran3s mt-0 font-lemon-yellow med_link_font"
              type="submit"
            >
              Send Link
            </button>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
