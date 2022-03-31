import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'

import './favoritos.css'

function Favoritos() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem('filmes')
        setFilmes(JSON.parse(minhaLista)) //transformar json em array de objetos

    }, [])

    function handleDelete(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
        toast.success('Filme excluido com sucesso!')
    }

    return(
        <div id='meus-filmes'>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo...</span>} 

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.nome}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={ () => handleDelete(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos

//precisa usar arrow function para que a função só seja chamada apos clicar no botao, nos casos em que um parametro é passado na chamada de função