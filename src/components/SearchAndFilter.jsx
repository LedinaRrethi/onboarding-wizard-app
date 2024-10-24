import React from "react";

export default function SearchAndFilter({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by name"
        onChange={handleSearch}
      />
    </div>
  );
}
