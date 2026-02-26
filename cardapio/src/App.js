import { useState } from "react";
import Cardapio from "./Cardapio";
import Categorias from "./Categorias";
import itens from "./dados";

const todasCategorias = ["todos", ...new Set(itens.map((item) => item.categoria))];

function App() {
  const [itensDoCardapio, definirItensDoCardapio] = useState(itens);
  const [categorias, definirCategorias] = useState(todasCategorias);

  const filtrarItens = (categoria) => {
    if (categoria === "todos") {
      definirItensDoCardapio(itens);
      return;
    }
    const novosItens = itens.filter((item) => item.categoria === categoria);
    definirItensDoCardapio(novosItens);
  }

  return (
    <main>
      <section className="cardapio secao">
        <div className="titulo">
          <h2>nosso cardápio</h2>
          <div className="sublinhado"></div>
        </div>
        <Categorias categorias={categorias} filtrarItens={filtrarItens} />
        <Cardapio itens={itensDoCardapio} />
      </section>
    </main>
  );
}

export default App;
