import React from "react";
import { useNavigate } from "react-router-dom";

export default function CVList({ cvs, setCvs, handleDelete }) { 
  const navigate = useNavigate();

  return (
    <div className="cv-list">
      {cvs.map((cv, index) => (
        <div key={index} className="cv-item">
          <h3>{cv.name}</h3>
          <button onClick={() => navigate(`/edit-cv/${index}`, { state: cv })}>
            View
          </button>
          <button onClick={() => handleDelete(index)}>Delete</button> 
        </div>
      ))}
    </div>
  );
}
