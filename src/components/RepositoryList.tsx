import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useEffect, useState } from "react"

interface Repository {
    id: number,
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);//<tipagem do useState>

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])
    //se seg parametro vazio a função executa apenas uma vez quando o componente é exibido em tela
    //se não passar o seg parametro o useEffect ficará em looping executando sempre

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.id} repository={repository} />
                })}
            </ul>
        </section>
    )
}