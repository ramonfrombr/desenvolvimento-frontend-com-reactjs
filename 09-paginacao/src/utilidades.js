// Função responsável por dividir uma lista de seguidores em páginas
const paginar = (seguidores) => {

    // Define quantos itens cada página terá
    const itensPorPagina = 10;

    // Calcula o número total de páginas necessárias
    // Math.ceil arredonda para cima caso a divisão não seja exata
    const numeroDePaginas = Math.ceil(seguidores.length / itensPorPagina);

    // Cria um novo array contendo as páginas
    const novosSeguidores = Array.from(
        // Cria um array vazio com a quantidade de páginas
        { length: numeroDePaginas },

        // Para cada página:
        (_, indice) => {

            // Calcula o índice inicial da página atual
            const inicio = indice * itensPorPagina;

            // Retorna uma parte do array original
            // slice(início, fim)
            // Exemplo:
            // Página 1 -> seguidores[0 até 9]
            // Página 2 -> seguidores[10 até 19]
            return seguidores.slice(inicio, inicio + itensPorPagina);
        },
    );

    // Retorna o array contendo todas as páginas
    return novosSeguidores;
}

// Exporta a função para ser utilizada em outros arquivos
export default paginar;
