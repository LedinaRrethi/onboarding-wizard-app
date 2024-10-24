import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Welcome to Onboard Wizard </h1>
      <h2>Let's Build Your CV</h2>
      <div className="button-container">
        <button onClick={() => navigate("/add-cv")}>Add Your CV</button>
        <button onClick={() => navigate("/all-cvs")}>View All CVs</button>
      </div>
    </div>
  );
}
