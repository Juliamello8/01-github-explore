
export function RepositoryItem(props) {

    return (
        <li>
            <strong>{props.repository.name}</strong>            {/* props.repository.name ?? 'Default' -> ?? caso propriedade vazia */}

            <p>{props.repository.description}</p>

            <a href={props.repository.html_url}>
                Acessar Repositório
            </a>
        </li>
    );
}