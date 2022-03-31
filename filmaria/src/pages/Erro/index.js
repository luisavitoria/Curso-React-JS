import './erro.css'
import {Link} from 'react-router-dom'

export default function Erro() {
    return(
        <div className='erro'>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to='/'>Veja todos os filmes!</Link>
        </div>
    )
}