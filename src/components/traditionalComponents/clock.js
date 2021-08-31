import React, { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super();
        this.state = {
            time: new Date(),
            visibility: true
        }
        
    }

   
    componentDidMount() {
        this.id = setInterval(() => {this.setState({ time: new Date})}, 1000)}
    
    componentWillUnmount() {
        clearInterval(this.id)
    }

    render() {
        return (
            <div className="toggle-clock">
                {/* <h1 id = "clock">{`${this.state.time.getHours()}:${this.state.time.getMinutes()}:${this.state.time.getSeconds()}`}</h1> */}
                <h3 style={{ visiblity: this.state.visibilty ? "visible" : "hidden" }}>{this.state.time.toLocaleTimeString()}</h3>
                
            </div>
        )
    }
}
   

//put html on page
//add onclick handlers
