// Componente responsável por exibir as informações de um seguidor
const Seguidor = ({ avatar_url, html_url, login }) => {

    // O componente retorna um cartão com:
    // - Foto do usuário
    // - Nome de usuário
    // - Link para o perfil no GitHub
    return (
        <article className="cartao">

            {/* Exibe a imagem de perfil do usuário */}
            <img src={avatar_url} alt={login} />

            {/* Exibe o nome de usuário */}
            <h4>@{login}</h4>

            {/* Link que leva ao perfil do GitHub */}
            <a href={html_url} className="botao">
                ver perfil
            </a>
        </article>
    );
};

// Exporta o componente para ser usado em outros arquivos
export default Seguidor;
