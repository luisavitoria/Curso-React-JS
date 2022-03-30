import { useParams } from "react-router-dom"

export default function Produto() {
    const { id } = useParams()

    return(
        <div>
            <h1>Grade de produtos</h1> <br/>
            <spann>Produto selecionado: {id} </spann>
            <br />
        </div>
    )
}

//rota dinamica