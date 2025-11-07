import React, { useState } from "react";

const ModuleTitle = ({ onSelect }) => {
  const [selectedModule, setSelectedModule] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedModule(value);
    onSelect?.(value);
  };

  return (
    <div id="module-title">
      <select value={selectedModule} onChange={handleChange}>
        <option value="">Todos os módulos</option>
        <option value="modulo3B">Módulo 3B</option>
      </select>
    </div>
  );
};

export default ModuleTitle;
