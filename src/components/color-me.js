import React, { Component } from "react";

export default class ColorMe extends Component {
    constructor() {
        super();

        this.state = {
            
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleSubmit() {

    const userText = document.getElementsByName("text-for-colorator");
    }

   
    render() {
        return (
            <div className="colorator">
                <h1 id = "text-to-color">`${this.userText}`</h1>
                <div className="colorator-bar">

                    <textarea name="color">prompt black</textarea>

                    <textarea name="text-for-colorator">Color Me!</textarea>
                
                    <button className = "increase-btn" type = "submit" >Submit</button>
                    
                </div>
                
            </div>
        )
    }
}
   

//put html on page
//add onclick handlers
