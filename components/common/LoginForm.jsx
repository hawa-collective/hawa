"use client";

import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";

console.log("Current Process: ", process.env.NODE_ENV); // Outputs 'production'


const LoginForm = () => {
  const production = `https://hawatest.netlify.app/survey`;
  const development = `http://localhost:3000/survey`;

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState(false);
  const [policyError, setPolicyError] = useState(false);
  const [isCookiePolicyAccepted, setIsCookiePolicyAccepted] = useState(false); // State for cookie policy
  const supabase = createClient();

  console.log("Message Status: ", message);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue); // Update email state on every change

    // Validate the user email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const completeEmail = emailRegex.test(emailValue.trim());

    if (completeEmail) {
      setError(false);
      setNotice("");
    } else if (isCookiePolicyAccepted && !completeEmail) {
      setError(true);
      setNotice("Please complete the email address.");
    } else if (!isCookiePolicyAccepted && !completeEmail) {
      setError(true);
      setNotice("You must complete the email address and accept the privacy & cookie policies.");
    } else {
      setError(false);
      setNotice("");
    }
  };

  const handleCookiePolicyChange = (e) => {
    setIsCookiePolicyAccepted(e.target.checked); // Update state when checkbox is clicked
  };

  const signInWithEmail = async (email) => {
    const development=`http://localhost:3000`;
    const redirectUrl =
      process.env.NODE_ENV === "production" ? production : development;
  
    console.log("Signing in with email:", email);
    console.log("Redirect URL:", redirectUrl);
  
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: redirectUrl,
      },
    });
  
    if (error) {
      console.error("Error sending OTP:", error.message);
      setMessage("Error sending OTP. Please try again.");
      setError(true);
      return;
    }
  
    setError(false);
    setMessage("A login link has been sent to the email entered below.");
  };  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isCookiePolicyAccepted) {
      setPolicyError(true);
      setNotice("You must accept the privacy & cookie policies.");
      return; // Prevent form submission if cookie policy is not accepted
    } else if (isCookiePolicyAccepted && !error) {
      setPolicyError(false);
      // Proceed only if there are no errors
      await signInWithEmail(email);
    }
    // checkUserStatus();
  };

  async function checkUserStatus() {
    const { data: user, error } = await supabase.auth.getUser();

    if (error) {
      console.error("Error retrieving user:", error.message);
      return;
    }

    if (user) {
      console.log("User is signed in:", user);
    } else {
      console.log("No user is signed in.");
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    checkUserStatus();

    if (error) {
      console.error("Error logging out user:", error.message);
      alert("Error logging out: " + error.message); // Display an alert in case of error
      return;
    }

    alert("User has been successfully logged out!"); // Display an alert if successful
  }

  return (
    <div>
      <form action="#" className="user-data-form mt-0" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            {message && (
              <p
                className={`text-center ${
                  message && !error ? "success-text" : "warn-text"
                }`}
              >
                {message}
              </p>
            )}

            {notice && !message && (
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
            {/* <button
              className="btn-twentyTwo w-100 fw-500 tran3s mt-0 font-lemon-yellow med_link_font"
              type="button"
              onClick={() => signOut()}
            >
              Sign Out
            </button> */}
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
