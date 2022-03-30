import { Link } from 'react-router-dom'

function Header() {
    return(
        <header>
            <h2>Header da página</h2> <br />
            <Link to='/contatos'>Contatos</Link>
        </header>
    )
}

export default Header