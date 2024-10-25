import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import CVList from "../components/CVList";
import SearchAndFilter from "../components/SearchAndFilter";
import Button from "../components/Button"; 
import { getCVsFromLocalStorage } from "../utils/localStorage";

export default function AllCVsPage() {
  const [cvs, setCvs] = useState([]);
  const [filteredCvs, setFilteredCvs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCvs = getCVsFromLocalStorage();
    setCvs(storedCvs);
    setFilteredCvs(storedCvs);
  }, [navigate]); 

  const handleSearch = (query) => {
    const filtered = cvs.filter((cv) =>
      cv.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCvs(filtered);
  };

  const clearAllCVs = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all CVs?");
    if (confirmClear) {
      localStorage.removeItem("cvs"); 
      setCvs([]); 
      setFilteredCvs([]); 
    }
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this CV?");
    if (confirmDelete) {
      const updatedCvs = cvs.filter((_, i) => i !== index); 
      setCvs(updatedCvs); 
      setFilteredCvs(updatedCvs); 
      localStorage.setItem("cvs", JSON.stringify(updatedCvs)); 
    }
  };

  return (
    <div className="all-cvs-page">
      <SearchAndFilter onSearch={handleSearch} />
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Button onClick={clearAllCVs}>Clear All CVs</Button>
        <Button onClick={() => navigate("/")}>Go to Home</Button> 
      </div>
      <CVList cvs={filteredCvs} handleDelete={handleDelete} /> 
    </div>
  );
}
