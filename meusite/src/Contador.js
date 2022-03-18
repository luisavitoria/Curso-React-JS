import React, { Component } from "react";

export default class Contador extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: 'Joao',
            contador: 0
        }

        this.diminuir = this.diminuir.bind(this)
        this.aumentar = this.aumentar.bind(this)
    }

    diminuir() {
        let state = this.state
        state.contador -= 1
        this.setState(state)
    }

    aumentar() {
        let state = this.state
        state.contador += 1
        this.setState(state)
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        )
    }
}