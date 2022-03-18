import React, { Component } from "react";

export default class Condicional extends Component {

    constructor(props) {
        super(props)
        this.state = {
            status: 2, 
            status2: false
        }

        this.sair = this.sair.bind(this)
        this.entrar = this.entrar.bind(this)
    }

    sair() {
        this.setState({status2: false})
    }

    entrar() {
        this.setState({status2: true})
    }

    render() {
        return(
            <div>
                {this.state.status === 1 && <h2>SEJA BEM-VINDO!</h2>}

                {this.state.status2 ? 
                <div>
                    <h2>Bem vindo!</h2>
                    <button onClick={this.sair}>Sair do sistema</button>
                </div>
                :
                <div>
                    <h2>Olá, visitante!</h2>
                    <button onClick={this.entrar}>Entrar no sistema</button>
                </div>
                }


                <div>
                    <h2>Curso React</h2>
                </div>
            </div>
        )
    }
}