import React, { Component } from "react";
import styled from "styled-components";

const FontSizeHolder = styled.h1`
    font-size: ${p => p.fontSize ? p.fontSize : "12px"};
`;

export default class Fontcrease extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontSize: 12
        }
    }

    handleTextAreaChange = (e) => {
        const cleanValue = e.target.value.replace("p", "").replace("x", "");
        const fontSize = parseInt(cleanValue);
        this.setState({
            fontSize: fontSize || 12
        })
    }

    increase = () => {
        this.setState({ fontSize: this.state.fontSize + 1})
    }

    decrease = () => {
        this.setState({ fontSize: this.state.fontSize - 1})
    }
       
    render() {
        const { fontSize } = this.state;
        return (
            <div className="pixelator">
                <FontSizeHolder fontSize={`${fontSize}px`}>{fontSize}px</FontSizeHolder>
                <div className="increaser-bar">

                    <textarea 
                        name="font-size" 
                        onChange={this.handleTextAreaChange}
                    >
                        {`${fontSize}px`}
                    </textarea>           
                    <button className = "increase-btn" onClick = {this.increase}>Increase</button>                   
                    <button className = "decrease-btn" onClick = {this.decrease}>Decrease</button>

                </div>
                
            </div>
        )
    }
}
