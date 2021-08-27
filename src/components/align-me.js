import React, { Component } from "react";

export default class AlignMe extends Component {
    constructor() {
        super();

        this.state = {

        }
        this.leftAlign = this.leftAlign.bind(this)
        this.centerAlign = this.centerAlign.bind(this)
        this.righttAlign = this.rightAlign.bind(this)
    }

    leftAlign() {
        document.getElementById("text-to-align").style.textAlign="left";
    }

    centerAlign() {
        document.getElementById("text-to-align").style.textAlign="center";
    }

    rightAlign() {
        document.getElementById("text-to-align").style.textAlign="right";
    }

    render() {
        return (
            <div className="align-me">
                <h1 id = "text-to-align">Align Me!</h1>
                <div className="align-me-buttons">
                    <button onClick = {this.leftAlign}>Left</button>
                    <button onClick = {this.centerAlign}>Center</button>
                    <button onClick = {this.rightAlign}>Right</button>
                </div>
            </div>
        )
    }
}
   

//put html on page
//add onclick handlers
