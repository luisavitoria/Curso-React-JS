import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './filme.css'
import api from '../../services/api'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export default function Filme() {
    const { id } = useParams()
    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if(response.data.length === 0) {
                //tentou acessar com ID que nao existe, voltar para home
                history.replace('/')
                return
            } 
            
            setFilme(response.data)
            setLoading(false)
        }

        loadFilme()
    }, [history, id])

    function salvaFilme() {
        const minhaLista = localStorage.getItem('filmes')

        let filmesSalvos = JSON.parse(minhaLista) || []
        console.log(filmesSalvos)

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme) {
            toast.info('Você já possui esse filme salvo!')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso!')
    }

    if(loading) {
        return(
            <div className='filme-info'>
                <h1>Carregando seu filme...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}></img>

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className='botoes'>
                <button onClick={salvaFilme}>Salvar</button>
                <button>
                    <a target='blank' href={`https://youtube.com/results?search_query=${filme.nome} trailer`}>
                       Trailer 
                    </a>
                </button>
            </div>
        </div>
    )
}

//target = blank : abrir o link em outra guia