import React, { useState } from "react";
import Card from "./components/Main/Card";
import TopBar from "./components/TopBar/TopBar";
import { gabarito } from "./data/gabarito";
import "./assets/styles/App.css";

function App() {
  const [selectedModule, setSelectedModule] = useState("");

  // Se "Todos os módulos" for selecionado, mostra tudo.
  // Caso contrário, encontra o módulo específico.
  const selected = selectedModule
    ? gabarito.find((modulo) => modulo.id === selectedModule)
    : null;

  // Monta a lista final de temas para renderização
  const allTemas = selected
    ? selected.temas.map((tema) => ({ ...tema, modulo: selected.modulo }))
    : gabarito.flatMap((modulo) =>
        modulo.temas.map((tema) => ({ ...tema, modulo: modulo.modulo }))
      );

  return (
    <div id="App">
      <TopBar onSelect={setSelectedModule} />

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
