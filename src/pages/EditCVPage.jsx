import { useLocation, useNavigate } from "react-router-dom";
import CVForm from "../components/CVForm"; 

export default function EditCVPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, index } = location.state || {}; 

  const handleSubmit = (formData) => {
    const storedCVs = JSON.parse(localStorage.getItem("cvs")) || [];
    storedCVs[index] = formData;
    localStorage.setItem("cvs", JSON.stringify(storedCVs)); 
    navigate("/all-cvs"); 
  };

  return (
    <div className="edit-cv-page">
      <h1>Edit Your CV</h1>
      <CVForm onSubmit={handleSubmit} initialData={data} />
    </div>
  );
}
