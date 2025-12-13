import { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import pessoas from "./dados";

function Avaliacao () {
    const [indice, definirIndice] = useState(0);
    const { nome, cargo, imagem, texto } = pessoas[indice];

    const verificarNumero = (numero) => {
        if (numero > pessoas.length - 1) {
            return 0;
        }

        if (numero < 0) {
            return pessoas.length - 1;
        }

        return numero;
    };

    const pessoaAnterior = () => {
        definirIndice((indiceAtual) => {
            let novoIndice = indiceAtual - 1;
            return verificarNumero(novoIndice);
        });
    };

    const proximaPessoa = () => {
        definirIndice((indiceAtual) => {
            let novoIndice = indiceAtual + 1;
            return verificarNumero(novoIndice);
        });
    };

    const pessoaAleatoria = () => {
        let numeroAleatorio = Math.floor(Math.random() * pessoas.length);
        if (numeroAleatorio === indice) {
            numeroAleatorio = indice + 1;
        }
        definirIndice(verificarNumero(numeroAleatorio));
    }

    return (
        <article className="avaliacao">
            <div className="container-imagem">
                <img src={imagem} alt={nome} className="imagem-pessoa" />
                <span className="icone-citacao">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="autor">{nome}</h4>
            <p className="cargo">{cargo}</p>
            <p className="informacao">{texto}</p>
            <div className="container-botoes">
                <button className="botao-anterior" onClick={pessoaAnterior}>
                    <FaChevronLeft />
                </button>
                <button className="botao-proximo" onClick={proximaPessoa}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="botao-aleatorio" onClick={pessoaAleatoria}>
                pessoa aleatória
            </button>
        </article>
    );
};

export default Avaliacao;
