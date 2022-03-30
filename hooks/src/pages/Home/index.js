import { Link } from "react-router-dom"

export default function Home() {
    return(
        <div>
            <h1>Bem-vindo a home</h1> <br />
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contatos'>Contato</Link>
        </div>
    )
}