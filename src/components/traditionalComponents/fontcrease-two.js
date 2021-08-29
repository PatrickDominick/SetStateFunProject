import React, { Component } from "react";

export default class FontcreaseTwo extends Component {
    constructor() {
        super();

        this.state = {
            
        }

        
        
    }

   
    render() {
        return (
            <div className="pixelator">
                <h1 id = "number">some string interpolation pixels</h1>
                <div className="increaser-bar">

                    <textarea name="font-size">some string interpolation of font-size</textarea>
                
                    <button className = "increase-btn" >Increase</button>
                    
                    <button className = "decrease-btn" >Decrease</button>

                </div>
                
            </div>
        )
    }
}
   

//put html on page
//add onclick handlers
