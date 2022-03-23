import React, { Component} from "react";
import "../../estilo.css"

export default class BiscoitoSorte extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textoFrase: ''
        }
        this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.']

        this.quebraBiscoito = this.quebraBiscoito.bind(this)
    }

    quebraBiscoito(){
        let state = this.state
        let numeroAleatorio = Math.floor(Math.random()* this.frases.length)
        state.textoFrase = '"' + this.frases[numeroAleatorio] + '"'
        this.setState(state)
    }

    render() {
        return(
            <div className="container">
                <img src={require('../../assets/biscoito.png')} className='img'></img>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
                <Botao name='Abrir biscoito!' acaoBtn={this.quebraBiscoito}/>
            </div>
        )
    }
}

 class Botao extends Component {
    render() {
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.name}</button>
            </div>
        )
    }
}

