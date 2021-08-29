import React, { Component } from "react";

export default class UpDowner extends Component {
    constructor() {
        super();

        this.state = {
            clicks: 1,
        }

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        
    }

    
       increase() {
           this.setState({ clicks: this.state.clicks + 1});
       }

       decrease() {
           this.setState({ clicks: this.state.clicks - 1});
       }
    

   
    render() {
        return (
            <div className="adder">
                
                <button className = "updown-btn" onClick = {this.increase} >Up</button>
                
                <h1 id = "number">{this.state.clicks}</h1>
                
                <button className = "updown-btn" onClick = {this.decrease}>Down</button>
                
            </div>
        )
    }
}
   

//put html on page
//add onclick handlers
