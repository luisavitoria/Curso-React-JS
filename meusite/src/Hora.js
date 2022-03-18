import React, { Component } from "react";

export default class Hora extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hora: '00:00:00'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000);
    }

    componentDidUpdate() {
        console.log('atualizou')
    }

    render() {
        return(
            <div>
                <h1>Hora atual: {this.state.hora}</h1>
            </div>
        )
    }
}