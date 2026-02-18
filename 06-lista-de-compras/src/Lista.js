import { FaEdit, FaTrash } from "react-icons/fa";


const Lista = ({ itens, removerItem, editarItem }) => {
    return (
        <div className="lista-compras">
            {itens.map((item) => {
                const { id, titulo } = item;
                return (
                    <article className="item-compra" key={id}>
                        <p className="titulo">{titulo}</p>
                        <div className="container-botoes">
                            <button type="button" className="botao-editar" onClick={() => editarItem(id)}>
                                <FaEdit />
                            </button>
                            <button type="button" className="botao-excluir" onClick={() => removerItem(id)}>
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
};

export default Lista;
