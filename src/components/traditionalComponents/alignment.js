import React, { Component } from "react";

export default class Alignment extends Component {
    constructor(){
        super()

        this.state = {
            alignment: "left"
        }
    }

    handleClick(newAlignment) {
        this.setState({ alignment: newAlignment })
    }

    render() {
        return (
            <div className="alignment-wrapper">
                <h3 className={`text ${this.state.alignment}`}>Align Me!
                    <div className="buttons-wrapper">
                        <button onClick={() => this.handleClick("left")}>Left</button>
                        <button onClick={() => this.handleClick("center")}>Center</button>
                        <button onClick={() => this.handleClick("right")}>Right</button>
                    </div>
                </h3>
            </div>
        )
    }
}