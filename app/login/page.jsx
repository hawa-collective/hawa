import Link from "next/link";
import LoginForm from "@/components/common/LoginForm";
import Image from "next/image";

export const metadata = {
  title: "Login - Hawa Collective",
};
const LogIn = () => {
  const currentYear = new Date().getFullYear();
  return (
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
                <Image
                  src="/images/logo/hawalogo.png"
                  alt="logo"
                  width={80}
                  height={40}
                />
              </Link>
            </div>
            <Link
              href="/"
              className="go-back-btn fw-500 tran3s"
              style={{ fontSize: "15px" }}
            >
              <img src="/images/logo/back.png" alt="" width={83} /> Back home
            </Link>
          </div>
        </div>
        {/* /.inner-content */}
      </header>
      {/* /.theme-main-menu */}

      {/* 
        =============================================
        User Data Page
        ============================================== 
        */}
      <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
        <div className="form-wrapper position-relative m-auto">
          <div className="text-center">
            <div className="flex-col-center">
              <Image
                src="/images/logo/favicon.png"
                alt="disk icon"
                width={77}
                height={77}
              />
              <h2 className="tx-dark mb-30 lg-mb-10 font_futurabook text-uppercase fs-18 ls-1">
                Login to view and rate menstrual products
              </h2>
              <p className="tx-dark fs-17">
                You will be taken through a short survey for your first login -
                so that you can rate the products you use.
              </p>
            </div>
            <p className="ls-05" style={{ fontSize: "16px", color: "#000000" }}>
              Enter your email to receive a login link.
            </p>
            {/* <p className="fs-20 tx-dark">
              Still don&lsquo;t have an account?{" "}
              <Link href="/signup">Sign up</Link>
            </p> */}
          </div>
          <LoginForm />
        </div>
        {/* End form-wrapper */}

        <p className="mt-auto pt-50 foooter-copyright">
          Copyright @{currentYear} The Hawa Collective.
        </p>
        <img
          src="/images/media/login-pad.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/media/login-cup.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
      {/* /.fancy-feature-fiftyOne */}
    </>
  );
};

export default LogIn;
