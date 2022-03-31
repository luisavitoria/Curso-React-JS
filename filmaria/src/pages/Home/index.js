import { useEffect, useState } from 'react'
import '../../services/api'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {

    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes/')
      setFilmes(response.data)
    }

    loadFilmes()
  }, [])

  return (
    <div className='container'>
      <div className='lista-filmes'>
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome}></img>
            <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}
  

export default Home;

//useeffect com segundo parametro sendo array vazio, executa o que tem na função assim que carrega a pagina