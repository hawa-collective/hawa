import Link from "next/link";

// import Blog from "@/components/home-page/home-10/Blog";
// import FancyBlock from "@/components/home-page/home-10/FancyBlock";
// import FancyBlock2 from "@/components/home-page/home-10/FancyBlock2";
import Header from "@/components/home-page/home-10/Header";
import Hero from "@/components/home-page/home-10/Hero";
// import OurAim from "@/components/home-page/home-10/OurAim";
import Blog from "@/components/home-page/home-5/Blog";
import Services from "@/components/home-page/home-10/Services";
// import Testimonial from "@/components/home-page/home-10/Testimonial";
import FancyBanner from "@/components/home-page/home-10/FancyBanner";
import CallToActions from "@/components/home-page/home-10/CallToActions";
import Footer from "@/components/home-page/home-10/Footer";
export const metadata = {
  title: "The Hawa Collective",
};
const HawaCollective = () => {
  return (
    <>
      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />
      {/* <!-- /.theme-main-menu --> */}
      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <div className="hero-banner-one p-30">
        <div className="bg-wrapper" data-aos="fade">
          <Hero />
          {/* /.container */}
          <img
            src="/images/media/allprods.png"
            alt="illustration"
            className="lazy-img shapes shape-eight hide-mobile"
            style={{ width: "133px" }}
          />
        </div>
      </div>
      {/* /.hero-banner-one */}

      {/* 
        =============================================
        Feature Section One
        ============================================== 
        */}
      <div className="fancy-feature-one pt-100 lg-pt-0">
        <div
          id="howdoesitwork"
          className="inner-content pt-110 lg-pt-60 md-pt-30"
        >
          <div className="row gx-xxl-5">
            <Services />
          </div>
        </div>
        {/* /.inner-content */}
        <div className="container pt-100 lg-pt-0">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <img
                src="/images/assets/our-story.png"
                alt="img"
                className="lazy-img"
              />
              {/* <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-bold tx-dark m0">
                  Making Sanitary Products easy to <span>choose</span>.
                </h2>
              </div> */}
              {/* /.title-style-one */}
            </div>
            <div className="col-lg-5 ms-auto" data-aos="fade-left">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-bold tx-dark m0">
                  Making Sanitary Products easy to <span>choose</span>.
                </h2>
              </div>
              <p className="text-lg text-center text-lg-start md-pt-30 m0">
                We are a collective group dedicated to educating the public
                about sanitary health. We have recently begun a campaign towards
                eradicating sanitary health poverty.
              </p>
              <br />
              <div className="flex_centered_mobile text-centre flex-row-center">
                <button className="tran3s position-absolute text-centre button-primary btn-one fw-500">
                  OUR STORY
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* /.fancy-feature-one */}

      {/* 
        =============================================
        Feature Section Two
        ============================================== 
        */}
      {/* <div className="fancy-feature-two position-relative pt-225 mt-40 lg-pt-100 sm-pt-60">
        <div className="container"> */}
      {/* <OurAim /> */}
      {/* <div
            className="title-style-one text-center text-lg-start"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h2 className="main-title fw-bold tx-dark m0">
              The <span>Hawa Flow</span> blogs
            </h2>
          </div>
          <Blog />
        </div> */}
      {/* /.container */}
      {/* </div> */}
      {/* /.fancy-feature-two */}

      {/*
			=====================================================
				Feedback Section One
			=====================================================
			*/}
      {/* <div
        className="feedback-section-one position-relative p-30 mt-200 lg-mt-130 "
        data-aos="fade-up"
      >
        <div className="bg-wrapper position-relative pt-150 pb-180 lg-pt-100 lg-pb-120">
          <img
            src="/images/shape/shape_14.svg"
            alt="img"
            className="lazy-img shapes shape-one"
          />
          <div className="shapes shape-two" />
          <div className="shapes shape-three" />
          <Testimonial />
        </div> */}
      {/* /.bg-wrapper */}
      {/* </div> */}
      {/* /.feedback-section-one */}

      {/* 
			=============================================
				Feature Section Two
			============================================== 
			*/}
      {/* <div className="fancy-feature-two position-relative pt-250 lg-pt-120">
        <div className="container">
          <FancyBlock />
        </div> */}
      {/* /.container */}
      {/* </div> */}
      {/* /.fancy-feature-two */}

      {/*
			=====================================================
				Card Style Two
			=====================================================
			*/}
      {/* <div className="wrapper pt-110 lg-pt-80">
        <div className="container">
          <div className="row justify-content-between">
            <FancyBlock2 />
          </div>
        </div>
      </div> */}
      {/* /.wrapper */}

      {/*
			=====================================================
				Blog Section One
			=====================================================
			*/}
      <div className="blog-section-one p-30 mt-100 lg-mt-75">
        <div className="bg-wrapper pt-70 pb-70 lg-pt-100 lg-pb-100 position-relative">
          {/* <div className="shapes shape-one">
          <img
            src="/images/media/allprods.png"
            alt="icon"
            className="lazy-img shapes shape-two"
            style={{ height: "177px" }}
          />
          </div>
          <div className="shapes shape-three">
            <img
              src="/images/media/heartsfill.png"
              alt="icon"
              className="lazy-img"
              style={{ height: "177px" }}
            />
          </div> */}

          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <div className="title-style-one text-center text-sm-start xs-mb-30">
                  <h2 className="main-title fw-bold tx-dark m0">
                    The <span>Hawa Flow</span> blogs.
                  </h2>
                </div>
                {/* /.title-style-one */}
              </div>
              <div className="col-lg-6 col-sm-5 ms-auto d-flex justify-content-center justify-content-sm-end">
                <Link
                  href="https://hawacollective.medium.com/"
                  target="_blank"
                  className="tran3s btn-one fw-500 button-primary"
                >
                  View all Blogs
                </Link>
              </div>
            </div>
            {/* End .row */}

            <div className="row pt-50 lg-pt-30">
              <Blog />
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.blog-section-one */}

      {/* 
			=============================================
				Wrapper
			============================================== 
			*/}
      <FancyBanner />
      {/* /.wrapper */}

      {/*
			=====================================================
				Fancy Short Banner One
			=====================================================
			*/}
      <CallToActions />
      {/* /.fancy-short-banner-one */}

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-one theme-basic-footer position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <Footer />
            <div className="bottom-footer flex-col-center">
              <div>
                <p className="copyright text-center m0 foooter-copyright">
                  © {new Date().getFullYear()} <span>The Hawa Collective</span>
                </p>
              </div>
              <div>
                <span
                  className="copyright text-center m0 foooter-copyright"
                  // style={{ border: "1px solid #000000", padding: "5px 30px" }}
                >
                  All gender inclusive
                </span>
              </div>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
      {/* /.footer-style-one */}
    </>
  );
};

export default HawaCollective;
