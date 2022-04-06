import { UserContext } from "../../contexts/user"
//importa com chaves quando não é exportado com default
import { useContext } from "react"

function Nome(){
    const { alunos, setAlunos } = useContext(UserContext)

    return(
        <div>
            <span>Bem-vindo: {alunos} </span>
            <button onClick={() => setAlunos('maria clara')}>Trocar nome</button>
        </div>
    )
}

export default Nome