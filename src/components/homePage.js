import React from "react";
import "./homePage.css";
import ParticleBackground from "../ParticleBackground";
// import homeflixlogo from'../assets/homeflix_logo.svg'

export default function HomePage() {
  return (
    <div className="MainDiv">
      <ParticleBackground />

      <div className="header1">
        <h1 style={{ marginLeft: "150px", fontSize: "40px" }}>
          Experience Videos like{" "}
        </h1>
        <h1 style={{ marginLeft: "150px", fontSize: "40px" }}>
          Nothing Before.
        </h1>
        <p></p>
        <h6 style={{ marginLeft: "150px" }}>
          Watch Movies and Videos with your Friends!
        </h6>
        <br />
        <button
          type="submit"
          class="btn btn-primary"
          id="GSBtn"
          style={{ marginLeft: "150px" }}
        >
          Get Started ➜
        </button>
      </div>
    </div>
  );
}
