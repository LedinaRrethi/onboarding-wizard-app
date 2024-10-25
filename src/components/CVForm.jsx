import React, { useState } from "react";
import CVFormStep from "../components/CVFormStep";
import Button from "../components/Button"; 

const steps = [
  { step: 1, label: "Personal Info", fields: ["name", "email", "address"] },
  { step: 2, label: "Education", fields: ["degree", "institution", "year"] },
  { step: 3, label: "Work Experience", fields: ["company", "role", "duration"] },
];

const CVForm = ({ onSubmit, initialData }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialData || {});

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="cv-form">
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
        {currentStep > 1 && <Button onClick={handlePrev}>Previous</Button>}
        {currentStep < steps.length ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={() => onSubmit(formData)}>Submit</Button>
        )}
      </div>
    </div>
  );
};

export default CVForm;
