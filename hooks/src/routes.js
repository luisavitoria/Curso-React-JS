import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contatos from './pages/Contatos'
import Header from './components/Header'
import Erro from './pages/Erro'
import Produto from './pages/Produto'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/> 
                <Route exact path='/sobre' component={Sobre} />
                <Route exact path='/contatos' component={Contatos}/>
                <Route path='/produto/:id' component={Produto} />
                <Route path='*' component={Erro}/>
            </Switch>  
        </BrowserRouter>
    )
}

export default Routes

// exact - so acessa a pagina quando chamar exatamente o caminho

// switch - apenas uma pagina é chamada

// pagina de erro tem que ser sempre a última route