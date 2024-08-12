import Link from "next/link";

const servicesData = [
  {
    bgColor: "rgba(255, 171, 51, 0.18)",
    iconSrc: "/images/assets/step1.png",
    title: "Login to begin",
    description:
      "Login to view and rate sanitary products. First time user? You will be taken through a short survey - so that we know a little about you.",
  },
  {
    bgColor: "rgba(100, 219, 226, 0.18)",
    iconSrc: "/images/assets/step2.png",
    title: "Search for product",
    description:
      "You can search for rated products using their product types such as 'pad' or brand name such as 'awalys ultra'.",
  },
  {
    bgColor: "rgba(255, 160, 194, 0.18)",
    iconSrc: "/images/assets/step3.png",
    title: "View and rate products",
    description:
      "Access rated products in more detail. Compare as you seek different opinions from other women and make your own ratings.",
  },
];

const Services = () => {
  return (
    <>
      <div className="title-style-one text-lg-start" data-aos="fade-right">
        <h2 className="main-title fw-bold tx-dark text-center">
          How does it <span>work</span>?
        </h2>
      </div>
      <div style={{ height: "25px" }}></div>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`col-lg-4 col-sm-6 flex-col-center`}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <div className="card-style-one position-relative mt-40 px-3 pe-5 sm-p0 flex-col-center">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: service.bgColor }}
            >
              <img
                src={service.iconSrc}
                alt="icon"
                className="lazy-img animate_jumpfour"
              />
            </div>
            <h5 className="fw-500 mt-35 mb-25">
              <span
                href="/pages-menu/service-details"
                className="tran3s tx-dark card_link_font font_futurabook"
              >
                {service.title}
              </span>
            </h5>
            <p className="mb-25 text-lg text-center">{service.description}</p>
          </div>
          {/* /.card-style-one */}
        </div>
      ))}
    </>
  );
};

export default Services;
