import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visibility: true,
            buttonText: "Hide"
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState({
            visibility: !this.state.visibility,
            buttonText: this.state.buttonText === "Hide" ? "Show" : "Hide"
        });  
    };

    render() {
        return (
            <div className="toggle-wrapper">
                <h3 style={{  visibility: this.state.visibility ? "visible" : "hidden" }}>Hide Me!</h3>
                <button className="toggle-wrapper-btn" onClick={this.handleToggle}>{this.state.buttonText}</button>
            </div>
        )
    }
}