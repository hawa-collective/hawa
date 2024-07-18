import Link from "next/link";

const servicesData = [
  {
    bgColor: "rgba(255, 171, 51, 0.18)",
    iconSrc: "/images/icon/icon_one.svg",
    title: "Login to begin",
    description:
      "Login to view and rate sanitary products. First time user? You will be taken through a short survey - so that we know a little about you.",
  },
  {
    bgColor: "rgba(100, 219, 226, 0.18)",
    iconSrc: "/images/icon/icon_two.svg",
    title: "Search for product",
    description:
      "You can search for rated products using their product types such as 'pad' or brand name such as 'awalys ultra'.",
  },
  {
    bgColor: "rgba(255, 160, 194, 0.18)",
    iconSrc: "/images/icon/icon_three.svg",
    title: "View and rate products",
    description:
      "Access rated products in more detail. Compare as you seek different opinions from other women and make your own ratings.",
  },
  // {
  //   bgColor: "rgba(246, 243, 255, 1)",
  //   iconSrc: "/images/icon/icon_04.svg",
  //   title: "Rate Products",
  //   description:
  //     "Now it's your time to rate honestly to help give other women a wider perspective when choosing sanitary products.",
  // },
];

const Services = () => {
  return (
    <>
      <div className="title-style-one text-center text-lg-start" data-aos="fade-right" style={{ display: "flex", justifyContent: "center" }}>
        <h2 className="main-title fw-bold tx-dark">
          How does it <span>work</span>?
        </h2>
      </div>
      <div style={{ height: "25px" }}></div>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`col-lg-4 col-sm-6 p-15`}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <div className="card-style-one pe-xxl-5 position-relative mt-40 px-3">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: service.bgColor }}
            >
              <img src={service.iconSrc} alt="icon" className="lazy-img animate_jumpfour" />
            </div>
            <h5 className="fw-500 mt-35 mb-25">
              {/* <Link
                href="/pages-menu/service-details"
                className="tran3s tx-dark"
              >
                {service.title}
              </Link> */}
              <span
                href="/pages-menu/service-details"
                className="tran3s tx-dark card_link_font font_futurabook"
              >
                {service.title}
              </span>
            </h5>
            <p className="mb-25 text-lg">{service.description}</p>
            {/* <Link href="/pages-menu/service-details">
              <img
                src="/images/icon/icon_05.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link> */}
          </div>
          {/* /.card-style-one */}
        </div>
      ))}
    </>
  );
};

export default Services;
