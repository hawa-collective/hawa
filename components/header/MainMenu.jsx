"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const isActive = (link) => pathname === link;

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      <div className="collapse navbar-collapse font_futurabook" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  priority
                  src="/images/logo/hawalogo.png"
                  alt="logo"
                  width={75}
                  height={35}
                />
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link
              href="/"
              className={`nav-link ${isActive("/") ? "active-menu" : ""}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/#howdoesitwork"
              className={`nav-link ${isActive("/#howdoesitwork") ? "active-menu" : ""}`}
            >
              Guide
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              href="/our-story"
              className={`nav-link ${isActive("/our-story") ? "active-menu" : ""}`}
            >
              Our Story
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://hawacollective.medium.com/"
              target="_blank"
              className="nav-link"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li className="nav-item dropdown">
            <Link
              href="/contact"
              className={`nav-link ${isActive("/contact") ? "active-menu" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link
              href="/login"
              className="btn-twentyOne fw-500 tran3s font-lemon-yellow mobile_login_btn"
              style={{ fontSize: "50px" }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
