// Importa os hooks useState e useEffect do React
import { useState, useEffect } from "react";

// Importa o componente responsável por exibir cada seguidor
import Seguidor from "./Seguidor";

// Importa o custom hook que busca os dados da API
import { buscarDados } from "./buscarDados";

function App() {

  // Obtém os dados dos seguidores e o estado de carregamento
  const { carregando, dados } = buscarDados();

  // Estado que guarda a página atual
  const [pagina, definirPagina] = useState(0);

  // Estado que guarda os seguidores da página atual
  const [seguidores, definirSeguidores] = useState([]);

  // Executa sempre que:
  // - os dados terminarem de carregar
  // - a página mudar
  // - os dados forem alterados
  useEffect(() => {

    // Se ainda estiver carregando, interrompe a execução
    if (carregando) return;

    // Define os seguidores da página atual
    definirSeguidores(dados[pagina]);

  }, [carregando, pagina, dados]);

  // Função para voltar para a página anterior
  const selecionarPaginaAnterior = () => {

    definirPagina((paginaAtual) => {

      // Calcula a página anterior
      let paginaAnterior = paginaAtual - 1;

      // Se estiver na primeira página,
      // volta para a última
      if (paginaAnterior < 0) {
        paginaAnterior = dados.length - 1;
      }

      return paginaAnterior;
    });
  };

  // Função para avançar para a próxima página
  const selecionarProximaPagina = () => {

    definirPagina((paginaAtual) => {

      // Calcula a próxima página
      let proximaPagina = paginaAtual + 1;

      // Se passar da última página,
      // volta para a primeira
      if (proximaPagina > dados.length - 1) {
        proximaPagina = 0;
      }

      return proximaPagina;
    });
  };

  // Função que seleciona uma página específica
  const selecionarPagina = (indice) => {
    definirPagina(indice);
  };

  return (
    <main>

      {/* Título principal da aplicação */}
      <div className="titulo-secao">

        {/* Exibe "carregando..." enquanto busca os dados */}
        <h1>{carregando ? "carregando..." : "paginação"}</h1>

        {/* Linha decorativa */}
        <div className="sublinhado"></div>
      </div>

      <section className="seguidores">

        {/* Container dos cartões de seguidores */}
        <div className="container">

          {/* Percorre a lista de seguidores da página atual */}
          {seguidores.map((seguidorItem) => {

            // Renderiza o componente Seguidor
            return (
              <Seguidor
                key={seguidorItem.id}
                {...seguidorItem}
              />
            )
          })}
        </div>

        {/* Exibe os botões apenas após o carregamento */}
        {!carregando && (

          <div className="container-botoes">

            {/* Botão da página anterior */}
            <button
              className="botao-anterior"
              onClick={selecionarPaginaAnterior}
            >
              anterior
            </button>

            {/* Cria os botões numerados das páginas */}
            {dados.map((item, indice) => {

              return (
                <button

                  // Adiciona uma classe especial para a página ativa
                  className={`botao-pagina ${indice === pagina ? "botao-ativo" : null}`}

                  // Seleciona a página clicada
                  onClick={() => selecionarPagina(indice)}
                >

                  {/* Número da página */}
                  {indice + 1}
                </button>
              )
            })}

            {/* Botão da próxima página */}
            <button
              className="botao-proximo"
              onClick={selecionarProximaPagina}
            >
              próximo
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

// Exporta o componente App
export default App;
