import React from "react";
import { Search } from "lucide-react";
import "../../assets/styles/SearchBar.scss";

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div id="search-bar">
      <Search className="search-icon" size={18} />
      <input type="text" placeholder="Buscar tema" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
