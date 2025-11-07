import React from "react";
import "../../assets/styles/Card.scss";

const Card = ({ tema, modulo }) => {
  const { subtemas = [], listaDeRevisao = [] } = tema;

  const totalExercicios = subtemas.filter(
    (sub) => sub.exercicios?.length > 0
  ).length;

  const totalPenseEResponda = subtemas.reduce(
    (acc, sub) => acc + (sub.penseEResponda?.length || 0),
    0
  );

  const totalListas = listaDeRevisao.length;

  return (
    <div className="card">
      <h3>{modulo}</h3>
      <h1>{tema.titulo}</h1>
      <ul>
        <li>{totalExercicios} conjuntos de exercícios</li>
        <li>{totalPenseEResponda} P&R</li>
        <li>{totalListas} listas de revisão</li>
      </ul>
      <button>Respostas</button>
    </div>
  );
};

export default Card;
