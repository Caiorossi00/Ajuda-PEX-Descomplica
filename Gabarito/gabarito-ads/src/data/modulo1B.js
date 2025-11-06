export const modulo1B = {
  id: "modulo1B",
  modulo: "Módulo 1B",
  temas: [
    {
      id: 1,
      titulo: "Programação Assíncrona",
      exercicios: [
        { numero: 1, resposta: "A" },
        { numero: 2, resposta: "D" },
        { numero: 3, resposta: "B" },
      ],
      penseEResponda: [
        {
          numero: 1,
          resposta:
            "Promises permitem lidar com operações assíncronas de forma mais previsível.",
        },
      ],
      listaDeRevisao: [
        { numero: 1, resposta: "C" },
        { numero: 2, resposta: "B" },
      ],
    },
    {
      id: 2,
      titulo: "APIs e Fetch",
      exercicios: [
        { numero: 1, resposta: "E" },
        { numero: 2, resposta: "A" },
      ],
      penseEResponda: [
        {
          numero: 1,
          resposta:
            "Fetch é usado para realizar requisições HTTP e retornar Promises com os dados da resposta.",
        },
      ],
      listaDeRevisao: [{ numero: 1, resposta: "D" }],
    },
  ],
};
