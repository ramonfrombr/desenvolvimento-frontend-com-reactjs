// Importa os hooks useState e useEffect do React
import { useState, useEffect } from "react";

// Importa a função paginar criada em outro arquivo
import paginar from "./utilidades";

// URL da API do GitHub que retorna até 100 seguidores do usuário "facebook"
const url = "https://api.github.com/users/facebook/followers?per_page=100";

// Função personalizada (custom hook) responsável por buscar os dados
export const buscarDados = () => {

    // Estado que controla o carregamento dos dados
    // Começa como true porque os dados ainda estão sendo buscados
    const [carregando, definirCarregando] = useState(true);

    // Estado que armazenará os seguidores já paginados
    const [dados, definirDados] = useState([]);

    // Função assíncrona responsável por buscar os seguidores
    const obterSeguidores = async () => {

        // Faz a requisição para a API do GitHub
        const resposta = await fetch(url);

        // Converte a resposta para JSON
        const dadosResposta = await resposta.json();

        // Pagina os dados usando a função "paginar"
        // e salva o resultado no estado "dados"
        definirDados(paginar(dadosResposta));

        // Define o carregamento como finalizado
        definirCarregando(false);
    }

    // useEffect executa a função apenas uma vez
    // quando o componente é carregado
    useEffect(() => {
        obterSeguidores();
    }, []);

    // Retorna os estados para serem utilizados em outros componentes
    return { carregando, dados };
}
