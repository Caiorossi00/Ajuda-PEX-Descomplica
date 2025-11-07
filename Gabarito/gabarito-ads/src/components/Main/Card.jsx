import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/Card.scss";

const Card = ({ tema, modulo }) => {
  const navigate = useNavigate();
  const { subtemas = [], listaDeRevisao = [] } = tema;

  const totalExercicios = subtemas.filter(
    (sub) => sub.exercicios?.length > 0
  ).length;

  const totalPenseEResponda = subtemas.reduce(
    (acc, sub) => acc + (sub.penseEResponda?.length || 0),
    0
  );

  const totalListas = listaDeRevisao.length;

  const handleRespostasClick = () => {
    navigate(`/${modulo.id}/${tema.id}`);
  };

  return (
    <div className="card">
      <h3>{modulo.modulo}</h3>
      <h1>{tema.titulo}</h1>
      <ul>
        <li>{totalExercicios} conjuntos de exercícios</li>
        <li>{totalPenseEResponda} P&R</li>
        <li>{totalListas} listas de revisão</li>
      </ul>
      <button onClick={handleRespostasClick}>Respostas</button>
    </div>
  );
};

export default Card;
