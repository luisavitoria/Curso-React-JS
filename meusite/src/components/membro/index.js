import React, { Component } from "react";

export default class Membro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: props.nome
        }

        this.entrar = this.entrar.bind(this)
    }

    entrar() {
        this.setState({nome: 'Luísa'})
    }

    render() {
        return(
            <div>
                <h2>Bem-vindo(a) {this.state.nome}</h2>
                <button onClick={this.entrar}>
                    Entrar como Luísa
                </button>
                <button onClick={ () => this.setState({nome: ''})}>
                    Sair
                </button>
            </div>
        )
    }
}