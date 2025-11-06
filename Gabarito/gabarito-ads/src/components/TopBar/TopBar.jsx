import React from "react";
import ModuleTitle from "./ModuleTitle";
import SearchBar from "./SearchBar";
import "../../assets/styles/TopBar.scss";

const TopBar = ({ onSelect }) => {
  return (
    <div id="top-bar">
      <ModuleTitle onSelect={onSelect} />
      <SearchBar />
    </div>
  );
};

export default TopBar;
