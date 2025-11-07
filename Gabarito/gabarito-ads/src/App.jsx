import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Main/Card";
import TopBar from "./components/TopBar/TopBar";
import Respostas from "./components/Main/Respostas";
import { gabarito } from "./data/gabarito";
import "./assets/styles/App.css";

function App() {
  const [selectedModule, setSelectedModule] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const selected = selectedModule
    ? gabarito.find((modulo) => modulo.id === selectedModule)
    : null;

  let allTemas = selected
    ? selected.temas.map((tema) => ({
        ...tema,
        modulo: selected.modulo,
        moduloId: selected.id,
      }))
    : gabarito.flatMap((modulo) =>
        modulo.temas.map((tema) => ({
          ...tema,
          modulo: modulo.modulo,
          moduloId: modulo.id,
        }))
      );

  if (searchTerm.trim() !== "") {
    allTemas = allTemas.filter((tema) =>
      tema.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <Router>
      <div id="App">
        <TopBar onSelect={setSelectedModule} onSearch={setSearchTerm} />

        <Routes>
          <Route
            path="/"
            element={
              <div id="main">
                {allTemas.length > 0 ? (
                  allTemas.map((tema) => (
                    <Card
                      key={`${tema.moduloId}-${tema.id}`}
                      tema={tema}
                      modulo={{ id: tema.moduloId, modulo: tema.modulo }}
                    />
                  ))
                ) : (
                  <p style={{ textAlign: "center", width: "100%" }}>
                    Nenhum tema encontrado.
                  </p>
                )}
              </div>
            }
          />

          <Route path="/:moduloId/:temaId" element={<Respostas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
