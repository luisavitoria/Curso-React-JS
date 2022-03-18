import React, { Component } from 'react'
import Contador from './Contador'
import Hora from './Hora'
import Membro from './components/membro'
import Condicional from './components/exemplos/renderizacaoCondicional'
import Listas from './components/exemplos/listas'
import Formulario from './components/exemplos/formulario/formulario'
import Formulario2 from './components/exemplos/formulario/formulario2'

export default class App extends Component {
    render () {
        return (
            <div>
               <Formulario />
            </div>
        )
    }
}