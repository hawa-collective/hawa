import { Height } from "@mui/icons-material";

const Illustration = () => {
  const shapes = [
    // { src: "/images/shape/shape_01.svg", className: "shapes shape-one" },
    // { src: "/images/shape/shape_02.svg", className: "shapes shape-two" },
    { src: "/images/shape/shape_03.svg", className: "shapes shape-three" },
    { src: "/images/shape/shape_04.svg", className: "shapes shape-four" },
    { src: "/images/shape/shape_02.svg", className: "shapes shape-five" },
    // { src: "/images/media/cycle.png", className: "shapes shape-six" },
    // { src: "/images/media/menses.png", className: "shapes shape-seven" },
  ];

  return (
    <div className="illustration-holder">
      <img
        src="/images/assets/hero-9.jpg"
        alt="illustration"
        className="lazy-img main-illustration w-100"
        style={{ maxHeight: "815px" }}
      />
      {shapes.map((shape, i) => (
        <img
          key={i}
          src={shape.src}
          alt="illustration"
          className={`lazy-img ${shape.className}`}
        />
      ))}
    </div>
  );
};

export default Illustration;
