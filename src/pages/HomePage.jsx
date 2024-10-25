import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function HomePage() {
  const navigate = useNavigate();

    const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column", 
    alignItems: "center", 
    gap: "20px", 
    marginTop: "20px", 
  };

  return (
    <div className="home-page">
      <h1>Welcome to Onboard Wizard </h1>
      <h2>Let's Build Your CV</h2>
      <div style={buttonContainerStyle}>
        <Button onClick={() => navigate("/add-cv") }  >Add Your CV</Button>
        <Button onClick={() => navigate("/all-cvs")} >View All CVs</Button>
      </div>
    </div>
  );
}
