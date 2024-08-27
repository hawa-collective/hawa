import React from "react";
import Stepper from "./stepper/stepper";
import Link from "next/link";

function Survey() {
  return (
    <React.Fragment>
      <>
        {/* 
        =============================================
        Theme Main Menu
        ============================================== 
        */}
        <header className="theme-main-menu sticky-menu theme-menu-eight">
          <div className="inner-content position-relative">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link href="/" className="d-block">
                  <img
                    priority
                    src="/images/logo/hawalogo.png"
                    alt=""
                    width={55}
                  />
                </Link>
              </div>
              <Link href="/" className="go-back-btn fw-500 tran3s">
                Quit X
              </Link>
            </div>
          </div>
          {/* /.inner-content */}
        </header>
        {/* /.theme-main-menu */}
        <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
          {/* Navigation start */}

          {/* Navigation end */}
          <div className="form-wrapper position-relative m-auto">
            <div className="text-center">
              {/* <h2 className="tx-dark mb-30 lg-mb-10">Quick Survey</h2>
              <p className="fs-20 tx-dark">
                This survey should only take 2mins of your time<br />
                <Link href="/signup">Start Survey</Link>
              </p> */}
              <Stepper />
            </div>
          </div>
          {/* End form-wrapper */}

          <p className="mt-auto pt-50 foooter-insight text-center">
            Taking this survey means you agree to our{" "}
            <a href="/policy/privacy" target="_blank" className="red-text">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/policy/cookie" target="_blank" className="red-text">
              Cookie Policy
            </a>
            .
          </p>
          {/* <div className="height-25"></div> */}
          <p className="mt-auto foooter-copyright text-center">
            Copyright @2024 The Hawa Collective
          </p>
          <img
            src="/images/media/flipped-running.png"
            alt="illustration"
            className="lazy-img illustration-one"
            //data-aos="fade-left"
          />
          <img
            src="/images/media/sapiens3.png"
            alt="illustration"
            className="lazy-img illustration-two"
            //   data-aos="fade-right"
          />
        </div>
      </>
    </React.Fragment>
  );
}

export default Survey;
