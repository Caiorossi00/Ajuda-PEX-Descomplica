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
        {
          id: 3,
          titulo: "Criação de uma API com Java e Spring Boot",
          exercicios: [
            { numero: 1, resposta: "C - Like" },
            {
              numero: 2,
              resposta: "C - Persistir dados com Hibernate.",
            },
            {
              numero: 3,
              resposta: "B - Definir a classe como um controlador REST.",
            },
            {
              numero: 4,
              resposta:
                "B - Ajudar a entender a estrutura e os relacionamentos entre as tabelas do banco de dados.",
            },
            {
              numero: 5,
              resposta: "D - Spring Batch",
            },
            {
              numero: 6,
              resposta: "B - Apenas as afirmações II, III e V estão corretas.",
            },
          ],
        },
        {
          id: 4,
          titulo: "Autenticação e Autorização",
          exercicios: [
            {
              numero: 1,
              resposta:
                "B - Validar a identidade do usuário que está tentando acessar o sistema.",
            },
            {
              numero: 2,
              resposta:
                "D - Definir e controlar o que um usuário autenticado pode fazer dentro do sistema.",
            },
            {
              numero: 3,
              resposta: "A - @EnableWebSecurity",
            },
            {
              numero: 4,
              resposta: "E - BCryptPasswordEncoder()",
            },
            {
              numero: 5,
              resposta:
                "C - Interceptar requisições HTTP e validar tokens JWT.",
            },
            {
              numero: 6,
              resposta: "E - Apenas I, II, III e IV.",
            },
          ],
        },
        {
          id: 5,
          titulo: "Acrescentando Banco de Dados",
          exercicios: [
            {
              numero: 1,
              resposta:
                "B - Gerenciar, organizar e recuperar dados de forma eficiente.",
            },
            {
              numero: 2,
              resposta: "D - MySQL Workbench.",
            },
            {
              numero: 3,
              resposta: "C - CREATE DATABASE FrameBlog.",
            },
            {
              numero: 4,
              resposta:
                "E - ​spring.datasource.url=jdbc:mysql://localhost:3306/FrameBlog",
            },
            {
              numero: 5,
              resposta: "B - Flyway​",
            },
            {
              numero: 6,
              resposta: "D - II, III, IV e V",
            },
          ],
        },
        {
          id: 6,
          titulo: "Tratamento de falhas e exceções",
          exercicios: [
            {
              numero: 1,
              resposta:
                "B - Falhas são erros inesperados causados por fatores externos, como problemas de hardware.",
            },
            {
              numero: 2,
              resposta:
                "D - Capturar e tratar exceções que ocorrem no bloco `try`.",
            },
            {
              numero: 3,
              resposta:
                "A - Para executar um código independentemente de ter ocorrido uma falha ou não.",
            },
            {
              numero: 4,
              resposta:
                "C - Uma condição prevista ou imprevista na lógica do programa que pode ser tratada.",
            },
            {
              numero: 5,
              resposta:
                "E - Criar mensagens de erro específicas e informativas para facilitar a depuração.​",
            },
            {
              numero: 6,
              resposta: "B- ​Apenas I, II e V estão corretas.",
            },
          ],
          penseEResponda: ["B - Apenas II, III e V estão corretas."],
        },
        {
          id: 7,
          titulo: "Versionamento de API",
          exercicios: [
            {
              numero: 1,
              resposta:
                "B - Manter diferentes versões da API para suportar funcionalidades novas e antigas.",
            },
            {
              numero: 2,
              resposta: "D - Utilização de métodos POST para versionamento",
            },
            {
              numero: 3,
              resposta:
                "A - Para facilitar a implementação, teste e verificação de contratos e dependências.",
            },
            {
              numero: 4,
              resposta:
                "B - Mantém a URL base limpa e evita a necessidade de múltiplas URLs.",
            },
            {
              numero: 5,
              resposta:
                "A - Permitir que diferentes clientes utilizem a versão da API que melhor atende às suas necessidades.​",
            },
            {
              numero: 6,
              resposta: "A - Apenas as afirmações I, II e IV estão corretas.",
            },
          ],
        },
      ],
      listaDeRevisao: [
        { numero: 1, resposta: "A - I, II, III." },
        { numero: 2, resposta: "B - II, III." },
        { numero: 3, resposta: "C - I, IV." },
        { numero: 4, resposta: "A - I, III, V." },
        { numero: 5, resposta: "A - I, IV." },
      ],
    },
  ],
};
