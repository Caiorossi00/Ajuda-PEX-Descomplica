export const modulo3B = {
  id: "modulo3b",
  modulo: "Módulo 3B",
  temas: [
    {
      id: 1,
      titulo: "Framework",
      subtemas: [
        {
          id: 1,
          titulo: "Apresentação de conceitos e ferramentas básicas",
          exercicios: [
            {
              numero: 1,
              resposta:
                "C - Implementar e testar funcionalidades sem afetar a produção",
            },
            {
              numero: 2,
              resposta: "B - É Fortemente tipada e orientada a objetos",
            },
            {
              numero: 3,
              resposta:
                "C - ​Um conjunto de técnicas, ferramentas e conceitos pré-definidos para facilitar o desenvolvimento em Java.",
            },
            {
              numero: 4,
              resposta:
                "C - Automatizar o gerenciamento de dependências e a construção de projetos.",
            },
            {
              numero: 5,
              resposta:
                "B - ​Combinar diversas ferramentas de desenvolvimento em uma interface gráfica.",
            },
            { numero: 6, resposta: "A - ​I, III e V" },
          ],
        },
        {
          id: 2,
          titulo: "Programação Reativa",
          exercicios: [
            { numero: 1, resposta: "D - Escalabilidade" },
            {
              numero: 2,
              resposta:
                "B - Facilitar a implementação de pipelines de consumo de eventos.",
            },
            {
              numero: 3,
              resposta:
                "E - Capacidade de se recuperar de falhas e continuar funcionando.",
            },
            {
              numero: 4,
              resposta:
                "A - Aplicações que exigem alta responsividade e são orientadas a eventos.",
            },
            {
              numero: 5,
              resposta:
                "D - Flux lida com zero ou N elementos, enquanto Mono lida com zero ou um elemento.",
            },
            { numero: 6, resposta: "A - II, III e IV" },
          ],
          penseEResponda: [
            "A programação reativa melhora a escalabilidade e a resiliência de uma aplicação web ao permitir o processamento assíncrono e não bloqueante de eventos, otimizando o uso de recursos e possibilitando que o sistema lide com múltiplas requisições simultâneas de forma eficiente. Em um sistema de notificações em tempo real, por exemplo, cada evento disparado, como uma nova mensagem ou curtida — é tratado como um fluxo de dados contínuo, permitindo que as notificações sejam enviadas instantaneamente a vários usuários sem sobrecarregar o servidor. Além disso, caso ocorra uma falha em algum componente, o sistema reativo pode redirecionar fluxos, retentar operações e manter a aplicação estável, garantindo alta disponibilidade e resposta rápida mesmo sob grande volume de eventos.",
          ],
        },
      ],
      listaDeRevisao: [
        { numero: 1, resposta: "A" },
        { numero: 2, resposta: "A" },
      ],
    },
  ],
};
