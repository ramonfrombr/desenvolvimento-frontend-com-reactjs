import { useState } from "react";
import Values from "values.js";
import CorUnica from "./CorUnica"

function App() {
  const [cor, definirCor] = useState("")
  const [erro, definirErro] = useState();
  const [lista, definirLista] = useState(new Values("#f15025").all(10));
  console.log(lista);

  const enviar = (evento) => {
    evento.preventDefault();
    try {
      let cores = new Values(cor).all(10);
      definirLista(cores);
      definirErro(false);
    } catch (erroCapturado) {
      definirErro(true);
      console.log(erroCapturado);
    }
  }

  return (
    <>
      <section className="container">
        <h3>gerador de cores</h3>
        <form onSubmit={enviar}>
          <input
            type="text"
            placeholder="#f15025"
            className={`${erro ? "erro" : null}`}
            value={cor}
            onChange={(evento) => definirCor(evento.target.value)}
          />
          <button className="btn" type="submit">
            enviar
          </button>
        </form>
      </section>
      <section className="cores">
        {lista.map((corItem, indice) => {
          return (
            <CorUnica
              key={corItem.hex}
              indice={indice}
              corHex={corItem.hex}
              rgb={corItem.rgb}
              peso={corItem.weight}
            />
          )
        })}
      </section>
    </>
  );
}

export default App;
