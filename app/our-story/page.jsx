import Header from "@/components/home-page/home-10/Header";
import Footer from "@/components/home-page/home-10/Footer";
import Partners from "@/components/services/Partners";
import Faq from "@/components/services/Faq";
import Testimonial from "@/components/home-page/home-3/Testimonial";
import Block from "@/components/services/Block";
import Team3 from "@/components/team/Team3";
import Link from "next/link";
import VideoBlock from "@/components/about/VideoBlock";
import Counter from "@/components/about/Counter";
export const metadata = {
  title: "About Us V1 || Jano - Creative Multipurpose React NextJS Template",
};
const OurStory = () => {
  const features = [
    { text: "Great sanitary product(s) insights." },
    { text: "Empowering all women, uplifting the younger group." },
    {
      text: "Educating the world about the struggles of picking the right sanitary product.",
    },
  ];

  const starRating = Array(4)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header />

      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Our Mission.
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  We’re giving sanitary products a new light.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30 font_futurabook">Our Story</h6>
                <p className="text-lg tx-dark">
                  The Hawa Collective was formed to give a different perspective
                  to the mensuration cycle. We are driven with the goal of
                  educating all women (binary & non-binary) on the sanitary
                  product(s) that work for them. We believe that well-managed
                  sanitary health will generally improve one's quality of life.
                </p>
                <div className="row">
                  <Counter />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_171.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* <!-- 
			=============================================
				Feature Section Fifty Two
			============================================== 
			--> */}
      <VideoBlock />

      {/* <!-- /.fancy-feature-fiftyTwo --> */}

      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="block-style-four pe-xxl-5 me-xxl-4 md-mb-70"
                data-aos="fade-right"
              >
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">WHY HAWA?</div>
                  <h2 className="main-title fw-500 tx-dark">
                    Everything you've ever needed when choosing a sanitary product that works for
                    you.
                  </h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-20 pb-30 lg-pt-10 lg-pb-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="style-none list-item">
                  {features.map((feature, index) => (
                    <li key={index}>{feature.text}</li>
                  ))}
                </ul>
                <div className="d-inline-flex align-items-center mt-35 lg-mt-20">
                  <ul className="d-flex style-none rating">{starRating}</ul>
                  <div className="fs-20 ms-2">
                    <strong className="fw-500 tx-dark">4</strong>
                    <span className="tx-dark fs-16 opacity-50">
                      (a few recent reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xxl-5 col-lg-6 ms-auto">
              <Block />
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySeven */}

      {/*
			=====================================================
				Team Section Two
			=====================================================
			*/}
      <div className="team-section-two position-relative pt-200 lg-pt-120 hide-all">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <div className="title-style-six text-center text-lg-start pb-40 lg-pb-20 md-pb-10">
                  <h2 className="main-title fw-500 tx-dark">Our Team</h2>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <Team3 />
            </div>
            {/* /.row */}

            <p
              className="cr-text text-center text-lg tx-dark mt-75 lg-mt-50"
              data-aos="fade-up"
            >
              Our{" "}
              <span className="text-decoration-underline fw-500">
                committed staff
              </span>{" "}
              is dedicated to help where needed.
            </p>
            <div className="text-center md-mt-20">
              <Link
                href="/pages-menu/team-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                View full team
              </Link>
            </div>
          </div>
          {/* /.wrapper */}
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-one d-none d-xl-inline-block"
        />
      </div>
      {/* /.team-section-two */}

      {/*
			=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      <div
        className="feedback-section-eleven position-relative mt-50 pt-100 pb-70 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">What Other's Think of Hawa</h2>
          </div>
        </div>
        {/* End .container */}
        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <Testimonial />
            </div>
            {/* /.feedback_slider_seven */}
          </div>
          {/* /.slider-wrapper */}
        </div>
        {/* /.inner-content */}
      </div>
      {/* /.feedback-section-eleven */}

      {/* 
			=============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      <div className="fancy-feature-thirtyEight mt-180 lg-mt-120 hide-all">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="block-style-seven" data-aos="fade-right">
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">SOLUTION</div>
                  <h2 className="main-title fw-500 tx-dark">
                    Digital solutions for businss.
                  </h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                  Do you have more question about our solution? Just send us a
                  message for help
                </p>
                <div className="btn-eighteen position-relative d-inline-block tx-dark">
                  <Link href="/page-menu/about-us-v1" className="fw-500 tran3s">
                    More About solution
                    <i className="fa-solid fa-angle-right" />
                  </Link>
                </div>
              </div>
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="partner-section-six position-relative mt-130 lg-mt-80 hide-all">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h3 className="title tx-dark text-center text-lg-start md-pb-10 m0">
                  <span>100+</span> Trusted Partners
                </h3>
              </div>
              <div className="col-xl-6 col-lg-7 ms-auto">
                <div className="logo-wrapper text-center d-flex justify-content-center justify-content-lg-between flex-wrap">
                  <Partners />
                </div>
                {/* /.logo-wrapper */}
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
      </div>
      {/* /.partner-section-six */}

      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80 hide-all"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Have Any Project?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Get Started Today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-sixteen */}

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-one theme-basic-footer position-relative">
        <div className="shapes shape-one" />
        <div className="container">
          <div className="inner-wrapper">
            <Footer />
            <div className="bottom-footer">
              <p className="copyright text-center m0 foooter-copyright">
                © {new Date().getFullYear()} <span>The Hawa Collective</span>
                <br />
                All geneder inclusive{" "}
                {/* <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/karl-full-stack-dev/"
                >
                  The Hawa Tech Team
                </a> */}
              </p>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
      {/* /.footer-style-one */}
    </>
  );
};

export default OurStory;