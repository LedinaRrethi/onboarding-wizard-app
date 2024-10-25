import { useLocation, useNavigate } from "react-router-dom";
import CVForm from "../components/CVForm"; 

export default function EditCVPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialData = location.state || {};

  const handleSubmit = (formData) => {
    const storedCVs = JSON.parse(localStorage.getItem("cvs")) || [];
    storedCVs[location.state.index] = formData; 
    localStorage.setItem("cvs", JSON.stringify(storedCVs));
    navigate("/resume-preview", { state: formData });
  };

  return (
    <div className="edit-cv-page">
      <h1>Edit Your CV</h1>
      <CVForm onSubmit={handleSubmit} initialData={initialData} />
    </div>
  );
}
