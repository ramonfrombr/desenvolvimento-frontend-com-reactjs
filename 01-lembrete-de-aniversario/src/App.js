import dados from "./dados"
import { useState } from "react"
import Lista from "./Lista"

function App() {
  const [pessoas, definirPessoas] = useState(dados);
  return (
    <main>
      <section className="container">
        <h3>{pessoas.length} aniversários hoje</h3>
        <Lista pessoas={pessoas} />
        <button onClick={() => definirPessoas([])}>limpar tudo</button>
      </section>
    </main>
  );
}

export default App;
