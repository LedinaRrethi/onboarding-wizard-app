import React, { useRef, useEffect } from "react";

export default function CVFormStep({ stepData, formData, setFormData }) {
  const inputRefs = useRef([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus(); 
    }
  }, []);

  return (
    <div className="form-step">
      <h2>{stepData.label}</h2>
      {stepData.fields.map((field, index) => (
        <div key={field} className="form-group">
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type="text"
            name={field}
            ref={(el) => (inputRefs.current[index] = el)} 
            value={formData[field] || ""}
            onChange={handleChange}
            required
          />
        </div>
      ))}
    </div>
  );
}
