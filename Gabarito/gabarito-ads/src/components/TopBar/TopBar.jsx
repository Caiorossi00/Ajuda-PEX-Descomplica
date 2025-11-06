import React from "react";
import ModuleTitle from "./ModuleTitle";
import SearchBar from "./SearchBar";
import "../../assets/styles/TopBar.scss";

const TopBar = ({ onSelect, onSearch }) => {
  return (
    <div id="top-bar">
      <ModuleTitle onSelect={onSelect} />
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default TopBar;
