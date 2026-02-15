import moment from "moment";
import "moment/locale/pt-br";

const Artigo = ({ titulo, resumo, data, tempoLeitura }) => {
    return (
        <article className="publicacao">
            <h2>{titulo}</h2>
            <div className="info-publicacao">
                <span>
                    {moment(data).format("dddd, D [de] MMMM [de] YYYY")}
                </span>
                <span>{tempoLeitura} min de leitura</span>
            </div>
            <p>{resumo}</p>
        </article>
    )
}

export default Artigo;
