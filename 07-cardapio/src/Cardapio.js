const Cardapio = ({ itens }) => {
    return (
        <div className="secao-central">
            {itens.map((itemCardapio) => {
                const {id, titulo, imagem, descricao, preco } = itemCardapio;
                return (
                    <article key={id} className="item-cardapio">
                        <img src={imagem} alt={titulo} className="foto" />
                        <div className="info-item">
                            <header>
                                <h4>{titulo}</h4>
                                <h4 className="preco">${preco}</h4>
                            </header>
                            <p className="texto-item">{descricao}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    );
};

export default Cardapio;
