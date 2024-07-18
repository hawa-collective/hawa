import HeroSubscribe from "./HeroSubscribe";
import Illustration from "./Illustration";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-7">
          <h1 className="hero-heading fw-bold tx-dark">
            Keep that <br /> flow in{" "}
            <span className="position-relative d-inline-block">Check.</span>
          </h1>
          <p className="text-intro mb-60 pt-50 pe-xl-5 lg-pt-30 lg-mb-40">
            Search for rated products that will work for your flow.
            {" "}
          <a href="#howdoesitwork" className="fw-bold text-decoration-underline font-lemon-yellow">How does it work?</a>
          </p>
          

          <HeroSubscribe />

          <div className="pr-info fw-500 fs-20 tx-dark mt-35">
            Over{" "}
            <span className="fw-bold text-decoration-underline font-lemon-yellow">
              200+
            </span>
            {" "}rated sanitary products in Kenya.
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="card-one shapes bg-white">
        <div className="icon rounded-circle position-absolute fs-18 text-white">
          <i className="bi bi-check-lg" />
        </div>
        <h6 className="fw-500 tx-dark mb-15 font-eustache hero_cta_font">Discover stories from other women.</h6>
        <a href="#" className="more-btn tran3s text-uppercase fw-500 fs-13">
          Learn More
        </a>
      </div>
      {/* End card-one */}

      <Illustration />
      {/* /.illustration-holder */}
    </div>
  );
};

export default Hero;
