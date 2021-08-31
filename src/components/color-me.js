import React, { Component } from "react";
import styled from "styled-components"

const ColorChanger = styled.h1`
    color: ${p => p.color ? p.color : "black"};
    padding-bottom: 12px;
`;

export default class ColorMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "black",
            text: "Color Me!"
        }  
        this.colorRef = React.createRef();
        this.textRef = React.createRef();
    }

    handleSubmit = () => {
        const color = this.colorRef.current.value;
        const text = this.textRef.current.value;
        this.setState({
            color, 
            text
        })
    }
   
    render() {
        return (
            <div className="colorator">
                <ColorChanger color={this.state.color}>{this.state.text}</ColorChanger>
                <div className="colorator-bar">
                    <textarea name="color" ref={this.colorRef} >{this.state.color}</textarea>
                    <textarea name="text-for-colorator" ref={this.textRef}>{this.state.text}</textarea>                
                    <button className = "increase-btn" type = "submit" onClick={this.handleSubmit}>Submit</button>                    
                </div>               
            </div>
        )
    }
}
