import { useEffect } from "react";

const Alerta = ({ tipo, mensagem, removerAlerta, lista}) => {
    useEffect(() => {
        const tempoLimite = setTimeout(() => {
            removerAlerta();
        }, 3000);

        return () => clearTimeout(tempoLimite);
    }, [lista])
    return <p className={`alerta alerta-${tipo}`}>{mensagem}</p>
}

export default Alerta;
