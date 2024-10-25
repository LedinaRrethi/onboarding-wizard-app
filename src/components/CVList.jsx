import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button"; 

export default function CVList({ cvs, handleDelete }) { 
  const navigate = useNavigate();

  return (
    <div className="cv-list">
      {cvs.map((cv, index) => (
        <div key={index} className="cv-item">
          <h3>{cv.name}</h3>
          <Button onClick={() => navigate(`/edit-cv/${index}`, { state: { data: cv, index } })}>
            Edit
          </Button>
          <Button onClick={() => handleDelete(index)} className="delete-button"> 
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}
