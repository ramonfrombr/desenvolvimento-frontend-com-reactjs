const Categorias = ({ categorias, filtrarItens }) => {
    return (
        <div className="container-botoes">
            {categorias.map((categoria, indice) => {
                return (
                    <button
                        key={indice}
                        className="botao-filtro"
                        type="button"
                        onClick={() => filtrarItens(categoria)}
                    >
                        {categoria}
                    </button>
                )
            })}
        </div>
    );
};

export default Categorias;
