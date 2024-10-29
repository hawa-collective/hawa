import Link from "next/link";
import Form from "./Form";

const CallToActions = () => {
  return (
    <div className="fancy-short-banner-one mt-120">
      <div className="container">
        <div className="bg-wrapper position-relative" data-aos="fade-up">
          <div className="shapes shape-one" />
          {/* <div className="shapes shape-one">
            <img
              src="/images/media/powerperiod.png"
              alt="icon"
              className="lazy-img"
              style={{ height: "100px" }}
            />
          </div> */}
          <div className="inner-wrapper">
            <div className="subscribe-area">
              <div className="row align-items-end form-padding">
                <div className="col-lg-6">
                  <div className="title-style-two">
                    <div className="sc-title fw-500 ">Become the Hawa community</div>
                    <h4 className="main-title fw-bold tx-dark">
                      Receive emails on news and updates.
                    </h4>
                  </div>
                  {/* /.title-style-two */}
                </div>
                {/* End .col */}

                <div className="col-lg-6">
                  <div className="subscribe-form">
                    <Form />
                    <p className="m0 pt-10 already_sign_in_link ">
                      Already a member?{" "}
                      <Link href="/login" className="tx-dark">
                        Sign in.
                      </Link>
                    </p>
                  </div>
                  {/* /.subscribe-form */}
                </div>
              </div>
            </div>
            {/* /.subscribe-area */}
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
    </div>
  );
};

export default CallToActions;
