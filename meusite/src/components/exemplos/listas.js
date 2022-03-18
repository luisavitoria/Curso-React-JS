import React, { Component } from "react";
import Feed from "./listas-feed";

export default class Listas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feed: [
                {id: 1, username: 'Lucas', curtidas: 10, comentarios: 5},
                {id: 2, username: 'Maria', curtidas: 100, comentarios: 25},
                {id: 3, username: 'Joao', curtidas: 70, comentarios: 12}

            ]
        }
    }


    render() {
        return(
            <div>
                {this.state.feed.map((item) => {
                    return(
                        <Feed key={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
                    )
                })}
            </div>
        )
    }
}