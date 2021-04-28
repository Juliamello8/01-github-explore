interface RepositoryItemProps {
    repository: {
        id: number,
        name: string,
        description: string,
        html_url: string,
    }
}

export function RepositoryItem(props: RepositoryItemProps) {

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