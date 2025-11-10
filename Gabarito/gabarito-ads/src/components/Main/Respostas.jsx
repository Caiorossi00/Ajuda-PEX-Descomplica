import { useParams } from "react-router-dom";
import { gabarito } from "../../data/gabarito";
import { useState } from "react";
import "../../assets/styles/Respostas.scss";

const Respostas = () => {
  const { moduloId, temaId } = useParams();
  const modulo = gabarito.find((mod) => mod.id === moduloId);
  if (!modulo) return <p className="erro">Módulo não encontrado</p>;

  const tema = modulo.temas.find((t) => t.id.toString() === temaId);
  if (!tema) return <p className="erro">Tema não encontrado</p>;

  const [openSubtemas, setOpenSubtemas] = useState({});

  const toggleSubtema = (id) => {
    setOpenSubtemas((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="respostas-container">
      <h1>{tema.titulo}</h1>

      {tema.subtemas.map((sub) => {
        const isOpen = openSubtemas[sub.id] || false;
        return (
          <div key={sub.id} className="subtema">
            <div
              className="subtema-header"
              onClick={() => toggleSubtema(sub.id)}
            >
              <h2>{sub.titulo}</h2>
              <span>{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
              <div className="subtema-content">
                {sub.exercicios?.length > 0 &&
                  sub.exercicios.map((ex) => (
                    <p key={ex.numero}>{ex.resposta}</p>
                  ))}

                {sub.penseEResponda?.length > 0 &&
                  sub.penseEResponda.map((pr, idx) => <p key={idx}>{pr}</p>)}
              </div>
            )}
          </div>
        );
      })}

      {tema.listaDeRevisao.length > 0 && (
        <div className="lista-de-revisao">
          {tema.listaDeRevisao.map((lr) => (
            <p key={lr.numero}>
              {lr.numero}. {lr.resposta}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Respostas;
