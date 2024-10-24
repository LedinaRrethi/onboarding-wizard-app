import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CVFormStep from "../components/CVFormStep";

const steps = [
  { step: 1, label: "Personal Info", fields: ["name", "email", "address"] },
  { step: 2, label: "Education", fields: ["degree", "institution", "year"] },
  { step: 3, label: "Work Experience", fields: ["company", "role", "duration"] },
];

export default function AddCVPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);
  
  const handleSubmit = () => {
    const storedCVs = JSON.parse(localStorage.getItem("cvs")) || [];
    localStorage.setItem("cvs", JSON.stringify([...storedCVs, formData]));
    navigate("/resume-preview", { state: formData });
  };

  return (
    <div className="add-cv-page">
      {steps.map(
        (step) =>
          currentStep === step.step && (
            <CVFormStep
              key={step.step}
              stepData={step}
              formData={formData}
              setFormData={setFormData}
            />
          )
      )}
      <div className="nav-buttons">
        {currentStep > 1 && <button onClick={handlePrev}>Previous</button>}
        {currentStep < steps.length ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}
