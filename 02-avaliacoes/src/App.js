import Avaliacao from "./Avaliacao"
import "./estilo.css"


function App() {
  return (
    <main>
      <section className="container">
        <div className="titulo">
          <h2>nossas avaliações</h2>
          <div className="sublinhado"></div>
        </div>
        <Avaliacao />
      </section>
    </main>
  );
}

export default App;
