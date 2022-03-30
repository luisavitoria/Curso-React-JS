import { Link } from "react-router-dom"

export default function Contatos() {
    return(
        <div>
            <h1>Contatos</h1>
            <spann>Email: teste@teste.com</spann>
            <br />
            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
        </div>
    )
}