import React, { Component } from "react";

export default class UpDowner extends Component {
    constructor() {
        super();

        this.state = {
            clicks: 1,
        }
    }
   
       increase = () => {
           this.setState({ clicks: this.state.clicks + 1});
       }

       decrease = () => {
           this.setState({ clicks: this.state.clicks - 1});
       }
  
    render() {
        return (
            <div className="adder">               
                <button className = "updown-btn"
                 onClick = {this.increase}
                >Up</button>                
                <h1 id = "number">{this.state.clicks}</h1>                
                <button className = "updown-btn"
                 onClick = {this.decrease}
                 >Down</button>               
            </div>
        )
    }
}
   