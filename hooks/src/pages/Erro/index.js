import { Link } from "react-router-dom"

export default function Erro() {
    return(
        <div>
            <h1>PÁGINA NÃO EXISTE!</h1> <br/>
            <spann>Você pode estar procurando:</spann>
            <br />
            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contatos'>Contatos</Link>
        </div>
    )
}