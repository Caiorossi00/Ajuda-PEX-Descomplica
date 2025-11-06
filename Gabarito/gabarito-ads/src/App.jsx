import React, { useState } from "react";
import Card from "./components/Main/Card";
import TopBar from "./components/TopBar/TopBar";
import { gabarito } from "./data/gabarito";
import "./assets/styles/App.css";

function App() {
  const [selectedModule, setSelectedModule] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const selected = selectedModule
    ? gabarito.find((modulo) => modulo.id === selectedModule)
    : null;

  let allTemas = selected
    ? selected.temas.map((tema) => ({ ...tema, modulo: selected.modulo }))
    : gabarito.flatMap((modulo) =>
        modulo.temas.map((tema) => ({ ...tema, modulo: modulo.modulo }))
      );

  if (searchTerm.trim() !== "") {
    allTemas = allTemas.filter((tema) =>
      tema.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div id="App">
      <TopBar onSelect={setSelectedModule} onSearch={setSearchTerm} />

      <div id="main">
        {allTemas.length > 0 ? (
          allTemas.map((tema) => (
            <Card
              key={`${tema.modulo}-${tema.id}`}
              tema={tema}
              modulo={tema.modulo}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>
            Nenhum tema encontrado.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
