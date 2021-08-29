import React, { Component } from "react";

export default class Fontcrease extends Component {
    constructor() {
        super();

        this.state = {
            fontSize: 12
        }

    this.increase = this.increase.bind(this)
    this.increase = this.decrease.bind(this)

    }

    increase() {
        this.setState({ fontSize: this.state.fontSize + 1})
    }

    decrease() {
        this.setState({ fontSize: this.state.fontSize - 1})
    }

   
    render() {
        return (
            <div className="pixelator">
                <h1 id = "number">{this.state.fontSize}px</h1>
                <div className="increaser-bar">

                    <textarea name="font-size">12px</textarea>
                
                    <button className = "increase-btn" onClick = {this.increase}>Increase</button>
                    
                    <button className = "decrease-btn" onClick = {this.decrease}>Decrease</button>

                </div>
                
            </div>
        )
    }
}
   

//put html on page
//add onclick handlers
