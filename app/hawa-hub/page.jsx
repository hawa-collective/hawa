import Profile from "@/components/profile/Profile";
import Footer from "@/components/home-page/home-10/Footer";
import Header from "@/components/home-page/home-10/Header";
import HeroSubscribe from "@/components/home-page/home-10/HeroSubscribe";
import Card from "@mui/material/Card";
import FullWidthTabs from "@/components/tabs/Tabs";
import TopBarMain from "@/components/hawahub/TopBar/TopBarMain";
import ProductsMain from "@/components/hawahub/Products/ProductsMain";
export const metadata = {
  title: "Hawa Hub - The Hawa Collective",
};
const HawaHub = () => {
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
		Theme Inner Banner
		============================================== 
		*/}
      <div className="inner-banner-three text-center p-30">
        <div className="mt-150 text-center">
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">Hawa Hub</h2>
            </div>
            <p className="fs-20 mt-30 lg-mt-20 hide-mid hide-mobile">
              Welcome to Hawa Hub! 😊
              <br /> A one stop dashboard where you can
              <br />
              explore sanitary products, rate them yourself, and answer surveys.
            </p>
            <p className="fs-20 mt-30 lg-mt-20 hide-large">Hawa Hub is not ready on tabs and mobile.</p>
          </div>
          {/* End container */}

          <div
            className="container hide-mid hide-mobile"
            style={{
              minWidth: "100%",
            }}
          >
            {/* <div className="contact-section-two text-start mt-80 lg-mt-60"> */}
            <div className="text-start mt-80 lg-mt-60">
              <div className="row" style={{ justifyContent: "center" }}>
                <TopBarMain />
              </div>
              <div className="row" style={{ justifyContent: "center" }}>
                <ProductsMain />
              </div>
            </div>
            {/* /.contact-section-two */}
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.inner-banner-three */}

      {/* 
        =============================================
        Footer
        ============================================== 
        */}
      <div className="footer-style-one theme-basic-footer position-relative">
        <div className="shapes shape-one" />
        <div className="container">
          <div className="inner-wrapper">
            <Footer />
            <div className="bottom-footer">
              <p className="copyright text-center m0">
                © {new Date().getFullYear()}
                The Hawa Collective
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

export default HawaHub;
