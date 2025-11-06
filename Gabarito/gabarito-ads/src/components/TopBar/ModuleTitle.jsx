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
        <option value="modulo1A">Módulo 1A</option>
        <option value="modulo1B">Módulo 1B</option>
        <option value="modulo2A">Módulo 2A</option>
      </select>
    </div>
  );
};

export default ModuleTitle;
