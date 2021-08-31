import React, { Component } from "react";

export default class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }  
        
    }

    handleCountChange(newCount) {
        this.setState({ count: newCount })
    }
   
    render() {
        return (
            <div className="counter-wrapper">
                
                <button className = "updown-btn" onClick={() => this.handleCountChange(this.state.count + 1)} >Up</button>
                
                <h1 id = "number">{this.state.count}</h1>
                
                <button className = "updown-btn" onClick={() => this.handleCountChange(this.state.count - 1)} >Down</button>
                
            </div>
        )
    }
}
   

//put html on page
//add onclick handlers
