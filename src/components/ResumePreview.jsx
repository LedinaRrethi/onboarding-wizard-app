import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResumePreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location; 

  return (
    <div className="resume-preview">
      <h2>Your CV</h2>
      {Object.keys(state).map((key) => (
        <div key={key}>
          <strong>{key}: </strong> {state[key]}
        </div>
      ))}
      <button onClick={() => navigate("/")}>Go to Home</button>
      <button onClick={() => navigate("/all-cvs")}>View All CVs</button>
    </div>
  );
}
