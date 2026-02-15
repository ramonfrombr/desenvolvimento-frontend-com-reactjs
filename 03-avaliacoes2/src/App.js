import { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import dados from "./dados";

function App() {
  const [pessoas, definirPessoas] = useState(dados);
  const [indice, definirIndice] = useState(0);

  const proximoSlide = () => {
    definirIndice((indiceAntigo) => {
      let indice = indiceAntigo + 1;

      if (indice > pessoas.length - 1) {
        indice = 0;
      }

      return indice;
    });
  };

  const slideAnterior = () => {
    definirIndice((indiceAntigo) => {
      let indice = indiceAntigo - 1;

      if (indice < 0) {
        indice = pessoas.length - 1;
      }

      return indice;
    });
  };

  /*
  useEffect(() => {
    const ultimoIndice = pessoas.length - 1;

    if (indice < 0) {
      definirIndice(ultimoIndice);
    }

    if (indice > ultimoIndice) {
      definirIndice(0);
    }
  }, [indice, pessoas]);
  */

  useEffect(() => {
    let carrossel = setInterval(() => {
      definirIndice((indiceAntigo) => {
        let indice = indiceAntigo + 1;
        if (indice > pessoas.length - 1) {
          indice = 0;
        }
        return indice;
      }); // avança slide
    }, 5000);

    return () => {
      clearInterval(carrossel);
    }
  }, [indice]) // recriar o timer sempre que o indice muda

  return (
    <section className="secao">
      <div className="titulo">
        <h2>
          <span>/</span> avaliações
        </h2>
      </div>

      <div className="centro-secao">
        {pessoas.map((pessoa, indicePessoa) => {
          const {id, imagem, nome, titulo, citacao } = pessoa;

          let posicao = "proximoSlide";

          if (indicePessoa === indice) {
            posicao = "slideAtivo";
          }

          if (
            indicePessoa === indice-1 ||
            (indice === 0 && indicePessoa === pessoas.length - 1)
          ) {
            posicao = "ultimoSlide";
          }

          return (
            <article className={posicao} key={id}>
              <img src={imagem} alt={nome} className="imagem-pessoa" />
              <h4>{nome}</h4>
              <p className="titulo">{titulo}</p>
              <p className="texto">{citacao}</p>
              <FaQuoteRight className="icone" />
            </article>
          )
        })}

        <button className="anterior" onClick={slideAnterior}>
          <FiChevronLeft />
        </button>

        <button className="proximo" onClick={proximoSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
