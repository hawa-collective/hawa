"use client";

import { useEffect, useState } from "react";
import MainMenu from "../../header/MainMenu";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-one ${
        navbar ? "fixed" : ""
      }`}
    >
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
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
          <Link
              href="/hawa-hub"
              className="login-btn-three rounded-circle tran3s me-3"
            >
              <i className="bi bi-person" />
            </Link>
            <Link
              href="/login"
              className="contact-btn-one fs-16 fw-500 text-white tran3s d-none d-lg-block ls-05"
            >
              LOGIN
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header;
