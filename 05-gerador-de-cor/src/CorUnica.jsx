import { useState, useEffect } from "react";

function CorUnica({ corHex, indice, rgb, peso }) {
    const [alerta, definirAlerta] = useState();
    const corFundo = rgb.join(",");
    const valorHex = `#${corHex}`;

    useEffect(() => {
        if (!alerta) return;
        const tempoLimite = setTimeout(() => {
            definirAlerta(false);
        }, 3000);

        return () => clearTimeout(tempoLimite);
    }, [alerta]);

    return (
        <article
            className={`cor ${indice > 10} "cor-clara" : ""`}
            style={{backgroundColor: `rgb(${corFundo})`}}
            onClick={() => {
                definirAlerta(true);
                navigator.clipboard.writeText(`#${corHex}`).catch(() => {
                    console.log("Falha ao copiar");
                })
            }}
        >
            <p className="valor-porcentagem">{peso}%</p>
            <p className="valor-cor">{valorHex}</p>
            {alerta && (
                <p className="alerta">copiado para a área de transferência</p>
            )}
        </article>
    )
}

export default CorUnica;
