import { useState, useEffect } from "react";
import { FaUser, FaEnvelopeOpen, FaCalendarTimes, FaMap, FaPhone, FaLock } from "react-icons/fa";

const url = "https://randomuser.me/api/";
const imagemPadrao = "https://randomuser.me/api/portraits/men/79.jpg";

function App() {
  const [carregando, definirCarregando] = useState(true);
  const [pessoa, definirPessoa] = useState(null);
  const [valor, definirValor] = useState("pessoa aleatória");
  const [titulo, definirTitulo] = useState("nome");

  const selecionarValor = (evento) => {
    if (evento.target.classList.contains("icone")) {
      const rotulo = evento.target.dataset.rotulo;
      definirTitulo(rotulo);
      definirValor(pessoa[rotulo]);
    }
  }

  const selecionarPessoa = async () => {
    definirCarregando(true);
    const resposta = await fetch(url);
    const dados = await resposta.json();
    const dadosPessoaAPI = dados.results[0];
    console.log(dadosPessoaAPI);
    const { phone: telefone, email } = dadosPessoaAPI;
    const { large: imagem } = dadosPessoaAPI.picture;
    const { password: senha } = dadosPessoaAPI.login;
    const { first: nome, last: sobrenome }= dadosPessoaAPI.name;
    const { dob: { age: idade } } = dadosPessoaAPI;
    const { street: { number: numeroDaCasa, name: nomeDaRua} } = dadosPessoaAPI.location;

    const novaPessoa = {
      imagem,
      telefone,
      email,
      senha,
      idade,
      rua: `${numeroDaCasa} ${nomeDaRua}`,
      nome: `${nome} ${sobrenome}`,
    };

    definirPessoa(novaPessoa);
    definirCarregando(false);
    definirTitulo("nome");
    definirValor(novaPessoa.nome);
  }

  useEffect(() => {
    selecionarPessoa();
  }, []);

  return (
    <main>
      <div className="bloco fundo-preto"></div>
      <div className="bloco">
        <div className="container">
          <img
            className="imagem-usuario"
            src={(pessoa && pessoa.imagem) || imagemPadrao}
          />
          <p clasName="titulo-usuario">Meu {titulo} é</p>
          <p className="valor-usuario">{valor}</p>
          <div className="lista-informacoes">
            <button
              className="icone"
              data-rotulo="nome"
              onMouseOver={selecionarValor}
            >
              <FaUser />
            </button>
            <button
              className="icone"
              data-rotulo="email"
              onMouseOver={selecionarValor}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icone"
              data-rotulo="idade"
              onMouseOver={selecionarValor}
            >
              <FaCalendarTimes />
            </button>
            <button
              className="icone"
              data-rotulo="rua"
              onMouseOver={selecionarValor}
            >
              <FaMap />
            </button>
            <button
              className="icone"
              data-rotulo="telefone"
              onMouseOver={selecionarValor}
            >
              <FaPhone />
            </button>
            <button
              className="icone"
              data-rotulo="senha"
              onMouseOver={selecionarValor}
            >
              <FaLock />
            </button>
          </div>
          <button
            className="botao"
            type="button"
            onClick={selecionarPessoa}
          >
            {carregando ? "carregando..." : "usuário aleatório"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
