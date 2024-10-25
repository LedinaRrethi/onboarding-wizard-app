import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button"; 

export default function ResumePreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location; 

  return (
    <div className="resume-preview">
      <h2>Your CV</h2>
      {(() => {
        const elements = []; 
        for (let key in state) { 
        
            elements.push(
              <div key={key}>
                <strong>{key}: </strong> {state[key]}
              </div>
            );
          
        }
        return elements; 
      })()}
      <Button onClick={() => navigate("/")}>Go to Home</Button>
      <Button onClick={() => navigate("/all-cvs")}>View All CVs</Button>
    </div>
  );
}
