"use client";
const HeroSubscribe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action="#"
        className="position-relative bg-white"
      >
        <label className="position-absolute fs-15">
          Product type or brand name
        </label>
        <input
          type="text"
          placeholder="pads, tampons and cups"
          className="fs-17 position-absolute w-100 tx-dark fw-500"
        />
        <button className="tran3s position-absolute futura_button search_font">
          SEARCH
        </button>
      </form> 
    </>
  );
};

export default HeroSubscribe;
