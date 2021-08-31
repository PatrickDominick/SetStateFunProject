import React, { Component } from "react";
import styled from "styled-components";

const TextToAlign = styled.h1`
    text-align: ${p => p.align ? p.align : "left"};
    padding-bottom: 12px;
`;

export default class AlignMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alignment: "left"
        }
    }

    setAlignment = (alignmentValue) => {
        this.setState({ alignment: alignmentValue });
    }
    
    render() {
        return (
            <div className="align-me">
                <TextToAlign align={this.state.alignment}>Align Me!</TextToAlign>
                <div className="align-me-buttons">
                    <button onClick={() => this.setAlignment("left")}>Left</button>
                    <button onClick={() => this.setAlignment("center")}>Center</button>
                    <button onClick={() => this.setAlignment("right")}>Right</button>                
                </div>
            </div>
        )
    }
}
