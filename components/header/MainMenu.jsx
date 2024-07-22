"use client";

import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
  contactItems,
} from "@/data/menu";

import Image from "next/image";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

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
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse font_futurabook" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/hawalogo.png"
                  alt="logo"
                  width={100}
                  height={50}
                />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item">
          <a
              // className="nav-link dropdown-toggle active-menu"
              href="/"
              role="button"
              className="nav-link active-menu"
            >
              Home
            </a>
            {/* <a
              // className="nav-link dropdown-toggle active-menu"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }

              // style={{color:'green'}}
            >
              Home
            </a> */}
            {/* <ul className="dropdown-menu">
              <li>
                <div className="row">
                  {menuItems.map((menu, index) => (
                    <div className="col-lg-4" key={index}>
                      <div className="menu-column">
                        <h6
                          className={
                            menu.items.some((elm) => isActive(elm.link))
                              ? "mega-menu-title active-menu"
                              : "mega-menu-title"
                          }
                        >
                          {menu.title}
                        </h6>
                        <ul className="style-none mega-dropdown-list">
                          {menu.items.map((item, index) => (
                            <li key={index}>
                              <Link
                                href={item.link}
                                className={`dropdown-item ${
                                  isActive(item.link) ? "active" : ""
                                }`}
                              >
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            </ul> */}
          </li>
          {/* End li (home mega menu) */}

          <li className="nav-item">
            <a
              // className="nav-link dropdown-toggle"
              className="nav-link"
              href="/#howdoesitwork"
              role="button"
            >
              Guide
            </a>
            {/* <ul className="dropdown-menu">
              {pagesItems.map((item, index) => (
                <li className="dropdown-submenu dropdown" key={index}>
                  <a
                    // className="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    className={
                      item.subItems.some((elm) => isActive(elm.link))
                        ? "dropdown-item dropdown-toggle active-menu"
                        : "dropdown-item dropdown-toggle"
                    }
                    href="#"
                  >
                    <span>{item.title}</span>
                  </a>
                  <ul className="dropdown-menu">
                    {item.subItems.map((subMenu, i) => (
                      <li key={i}>
                        <Link
                          href={subMenu.link}
                          className={`dropdown-item ${
                            isActive(subMenu.link) ? "active" : ""
                          }`}
                        >
                          <span>{subMenu.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul> */}
          </li>
          {/* End li (pages) */}

          <li className="nav-item dropdown">
            <a
              className="nav-link"
              // className={
              //   portfolioItems.some((elm) => isActive(elm.link))
              //     ? "nav-link dropdown-toggle active-menu"
              //     : "nav-link dropdown-toggle"
              // }
              href="/pages-menu/about-us-v1"
            >
              Our Story
            </a>
            {/* <ul className="dropdown-menu">
              {portfolioItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`dropdown-item ${
                      isActive(item.link) ? "active" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul> */}
          </li>
          {/* End li (portfolio) */}

          <li className="nav-item">
            <a
              className="nav-link"
              // className={
              //   blogItems.some((elm) => isActive(elm.link))
              //     ? "nav-link dropdown-toggle active-menu"
              //     : "nav-link dropdown-toggle"
              // }
              href="https://revolution.fuelthemes.net/revolution-corporate-agency/blog/"
              target="_blank"
              role="button"
            >
              Blog
            </a>
            {/* <ul className="dropdown-menu">
              {blogItems.map((blog, index) => (
                <li key={index}>
                  <Link
                    href={blog.link}
                    className={`dropdown-item ${
                      isActive(blog.link) ? "active" : ""
                    }`}
                  >
                    <span>{blog.text}</span>
                  </Link>
                </li>
              ))}
            </ul> */}
          </li>
          {/* End li (blog) */}

          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="/contact/contact-v2"
              role="button"
              
            >
              Contact
            </a>
            {/* <ul className="dropdown-menu">
              {contactItems.map((contact, index) => (
                <li key={index}>
                  <Link
                    href={contact.link}
                    className={`dropdown-item ${
                      isActive(contact.link) ? "active" : ""
                    }`}
                  >
                    <span>{contact.text}</span>
                  </Link>
                </li>
              ))}
            </ul> */}
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            {/* <Link
              href="/contact/contact-v1"
              className="btn-twentyOne fw-500 tran3s"
            >
              Contact us
            </Link> */}
            <Link
              href="/login"
              className="btn-twentyOne fw-500 tran3s font-lemon-yellow med_link_font"
            >
              Login
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
