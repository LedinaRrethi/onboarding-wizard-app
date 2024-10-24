import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import CVList from "../components/CVList";
import SearchAndFilter from "../components/SearchAndFilter";

export default function AllCVsPage() {
  const [cvs, setCvs] = useState([]);
  const [filteredCvs, setFilteredCvs] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedCvs = JSON.parse(localStorage.getItem("cvs")) || [];
    setCvs(storedCvs);
    setFilteredCvs(storedCvs);
  }, []);

  const handleSearch = (query) => {
    const filtered = cvs.filter((cv) =>
      cv.name.includes(query)
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
      <button onClick={clearAllCVs}>Clear All CVs</button>
      <button onClick={() => navigate("/")}>Go to Home</button> 
      <CVList cvs={filteredCvs} setCvs={setCvs} handleDelete={handleDelete} /> 
    </div>
  );
}
