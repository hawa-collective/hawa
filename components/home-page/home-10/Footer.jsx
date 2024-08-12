import Link from "next/link";
import Social from "./Social";

const Footer = () => {
  const footerLinks = [
    {
      title: "Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Guide", href: "/#howdoesitwork" },
        { label: "About us", href: "/pages-menu/about-us-v1" },
        { label: "Blog", href: "https://hawacollective.medium.com/" },
      ],
      classes: "col-lg-2 col-sm-4 ms-auto mb-30",
    },
    {
      title: "Help & Support",
      links: [
        { label: "FAQ", href: "/pages-menu/faq" },
        { label: "Instagram", href: "https://www.instagram.com/hawacollective/" },
        { label: "Careers", href: "#careers" },
        { label: "Contact Us", href: "/contact/contact-v2" },
      ],
      classes: "col-lg-3 col-sm-4 mb-30",
    },
  ];

  return (
    <div className="row">
      <div className="col-xl-3 col-lg-2 footer-intro mb-40">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo/hawalogo.png" alt="" width={100} />
          </Link>
        </div>
        <img
          src="/images/shape/shape_24.svg"
          alt="shape"
          className="mt-60 d-none d-lg-block"
        />
      </div>
      {/* End .col-xl-3 */}

      {footerLinks.map((link, index) => (
        <div key={index} className={link.classes}>
          <h5 className="footer-title tx-dark fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.links.map((linkItem, index) => (
              <li key={index}>
                <Link href={linkItem.href}>{linkItem.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* End menu data */}

      <div className="col-xl-3 col-sm-4 mb-30">
        <h5 className="footer-title tx-dark fw-500">Our Address</h5>
        <p className="fs-17">
          Nairobi, Kenya.
        </p>
        <a href="mailto:januinc@company.com" className="email tran3s fs-17">
          support@thehawacollective.org
        </a>
        <br />
        <div className="mobile mb-10">
         
        </div>

        <Social />
      </div>
    </div>
  );
};

export default Footer;
