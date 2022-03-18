import React, { Component } from 'react'
import Contador from './Contador'
import Hora from './Hora'
import Membro from './components/mebro'

export default class App extends Component {
    render () {
        return (
            <div>
               <Membro />
            </div>
        )
    }
}