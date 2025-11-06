import React from "react";
import "../../assets/styles/Card.scss";

const Card = ({ tema, modulo }) => {
  const totalExercicios = tema.subtemas?.length || 0;
  const totalPenseEResponda = tema.penseEResponda?.length || 0;
  const totalListas = tema.listaDeRevisao?.length || 0;

  return (
    <div className="card">
      <h3>{modulo}</h3>
      <h1>{tema.titulo}</h1>
      <ul>
        <li>{totalExercicios} exercícios</li>
        <li>{totalPenseEResponda} P&R</li>
        <li>{totalListas} listas de revisão</li>
      </ul>
      <button>Respostas</button>
    </div>
  );
};

export default Card;
