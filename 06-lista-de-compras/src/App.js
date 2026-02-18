import { useState, useEffect } from "react";
import Lista from "./Lista";
import Alerta from "./Alerta";

const selecionarArmazemLocal = () => {
  let lista = localStorage.getItem("lista");
  if (lista) {
    return (lista = JSON.parse(localStorage.getItem("lista")));
  } else {
    return [];
  }
}

function App() {
  const [nome, definirNome] = useState("");
  const [lista, definirLista] = useState(selecionarArmazemLocal());
  const [estaEditando, definirEstaEditando] = useState(false);
  const [alerta, definirAlerta] = useState({
    exibir: false,
    mensagem: "",
    tipo: ""
  });
  const [idEdicao, definirIdEdicao] = useState(null);

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    if (!nome) {
      exibirAlerta(true, "perigo", "por favor insira um valor");
    } else if(nome && estaEditando) {
      definirLista(
        lista.map((item) => {
          if (item.id === idEdicao) {
            return { ...item, titulo: nome};
          }
          return item;
        })
      );
      definirNome("");
      definirIdEdicao(null);
      definirEstaEditando(false);
      exibirAlerta(true, "sucesso", "valor alterado");
    } else {
      exibirAlerta(true, "sucesso", "item adicionado à lista");
      const novoItem= {
        id: new Date().getTime().toString(),
        titulo: nome,
      };

      definirLista([...lista, novoItem]);
      definirNome("");
    }
  }

  const exibirAlerta = (exibir = false, tipo = "", mensagem = "") => {
    definirAlerta({ exibir, tipo, mensagem });
  }

  const limparLista = () => {
    exibirAlerta(true, "perigo", "lista vazia");
    definirLista([]);
  }

  const removerItem = (id) => {
    exibirAlerta(true, "perigo", "item removido");
    definirLista(lista.filter((item) => item.id !== id));
  }

  const editarItem = (id) => {
    const itemSelecionado = lista.find((item) => item.id === id);
    definirEstaEditando(true);
    definirIdEdicao(id);
    definirNome(itemSelecionado.titulo);
  }

  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(lista));
  }, [lista])

  return (
    <section className="centro-secao">
      <form className="formulario-compras" onSubmit={enviarFormulario}>
        {alerta.exibir && (
          <Alerta
            {...alerta}
            lista={lista}
            removerAlerta={exibirAlerta}
          />
        )}

        <h3>Lista de Compras</h3>
        <div className="controle-formulario">
          <input
            type="text"
            className="campo-compras"
            placeholder="ex: ovos"
            value={nome}
            onChange={(evento) => definirNome(evento.target.value)}
          />
          <button type="submit" className="botao-enviar">
            {estaEditando ? "editar" : "enviar"}
          </button>
        </div>
      </form>
      {lista.length > 0 && (
        <div className="container-compras">
          <Lista
            itens={lista}
            removerItem={removerItem}
            editarItem={editarItem}
          />
          <button className="botao-limpar" onClick={limparLista}>
            limpar itens
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
