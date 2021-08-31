import React, { Component } from "react";

export default class ToggleClock extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date
        }
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState({
                time: new Date
            })
        }, 1000) 
    };
   
    hide = () => {
        const textToHide = document.getElementById("clock");
        if (textToHide.style.display === "none") {
            textToHide.style.display = "block"; 
        } else {
            textToHide.style.display = "none"; 
        }
    }

    componentWillUnmount() {
        clearInterval(this.id)
    }

    render() {
        return (
            <div className="toggle-clock">
                <h1 id = "clock">{this.state.time.toLocaleTimeString()}</h1>
                <div className="toggle-btn-wrapper">
                    <button className = "toggle-btn" onClick = {this.hide} >Toggle Clock</button>
                </div>
            </div>
        )
    }
}
