import React from "react";

export default function NameAndRating({ name, rating, users }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
      }}
    >
      <p style={{ color: "#600c00" }}>Last updated on 9th Oct, 2024</p>
      <h1
        className="font_futurabook"
        style={{ fontSize: "33px", fontWeight: "bold" }}
      >
        {name}
      </h1>
      <p
        className="font_futurabook"
        style={{
          marginBottom: "0",
          fontWeight: "600",
          fontSize: "18px",
          letterSpacing: "0.07rem",
        }}
      >
        Rated {rating} by {users} users
      </p>
    </div>
  );
}
