const Lista = ({ pessoas }) => {
    return (
        <>
            {pessoas.map((pessoa) => {
                const { id, nome, idade, imagem } = pessoa;
                return (
                    <article key={id} className="pessoa">
                        <img src={imagem} alt={nome} />
                        <div>
                            <h4>{nome}</h4>
                            <p>{idade} anos</p>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default Lista;
