import React from "react";
import { useNavigate } from "react-router-dom";
import CVForm from "../components/CVForm";
import {  saveCVToLocalStorage } from "../utils/localStorage";

export default function AddCVPage() {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {

    saveCVToLocalStorage(formData);
    navigate("/resume-preview", { state: formData });
  };


  return (
    <div className="add-cv-page">
      <h1>Add Your CV</h1>
      <CVForm onSubmit={handleSubmit} />
    </div>
  );
}
