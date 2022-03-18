import React, { Component } from "react";

class Feed extends Component{

    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div key={this.props.key}>
                <h3>{this.props.username}</h3>
                <a>{this.props.curtidas > 1 ? this.props.curtidas + ' curtidas' : this.props.curtidas + ' curtida'} / {this.props.comentarios > 1 ? this.props.comentarios + ' comentarios' : this.props.comentarios + ' comentario'} </a>
                <hr />
            </div>
        )
    }
}

export default Feed