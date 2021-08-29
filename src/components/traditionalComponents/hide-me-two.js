import React, { Component } from "react";

export default class HideMe2 extends Component {
    constructor() {
        super();

        this.state = {
            
        }

        
        
    }

   
    

    render() {
        return (
            <div className="hide-me">
                <h1 id = "text-to-hide">Hide Me!</h1>
                <div className="hide-me-btn">
                    <button className = "hide-show-btn" >Hide</button>
                </div>
            </div>
        )
    }
}
   

//put html on page
//add onclick handlers
