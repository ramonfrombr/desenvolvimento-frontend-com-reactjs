import { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import dados from "./dados"
import Artigo from "./Artigo";

const selecionarTemaArmazenado = () => {
  let tema = "tema-claro";
  if (localStorage.getItem("tema")) {
    tema = localStorage.getItem("tema");
  }
  return tema;
}

function App() {
  const [tema, definirTema] = useState(selecionarTemaArmazenado());

  const alternarTema = () => {
    if (tema === "tema-claro") {
      definirTema("tema-escuro");
    } else {
      definirTema("tema-claro")
    }
  }

  useEffect(() => {
    document.documentElement.className = tema;
    localStorage.setItem("tema", tema);
  }, [tema]);

  return (
    <main>
      <nav>
        <div className="central-navegacao">
          <h1>blog</h1>
          <button className="botao" onClick={alternarTema}>alternar</button>
        </div>
      </nav>
      <section className="artigos">
        {dados.map((item) => {
            return (
              <Artigo key={item.id} {...item}/>
            )
        })}
      </section>
    </main>
  );
}

export default App;
