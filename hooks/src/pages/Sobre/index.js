import { Link } from "react-router-dom"

export default function Sobre() {
    return(
        <div>
            <h1>Sobre...</h1> <br></br>
            <Link to='/'>Home</Link>
            <Link to='/contatos'>Contatos</Link>
        </div>
    )
}