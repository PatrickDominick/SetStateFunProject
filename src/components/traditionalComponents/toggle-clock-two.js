import React, { Component } from "react";

export default class ToggleClockTwo extends Component {
    constructor() {
        super();

        this.hide = this.hide.bind(this)
        
    }

   
    hide() {
        const textToHide = document.getElementById("clock");
        if (textToHide.style.display === "none") {
            textToHide.style.display = "block"; 
        } else {
            textToHide.style.display = "none"; 
        }
    }

    render() {
        return (
            <div className="toggle-clock">
                <h1 id = "clock">string interpolation o'clock</h1>
                <div className="toggle-btn-wrapper">
                    <button className = "toggle-btn" onClick = {this.hide} >Toggle Clock</button>
                </div>
            </div>
        )
    }
}
   

//put html on page
//add onclick handlers
