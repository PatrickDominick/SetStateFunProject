import React, { Component } from "react";

export default class HideMe extends Component {
    constructor() {
        super();

        this.state = {
            btnText: "Hide"
        }

        this.hide = this.hide.bind(this)
        
    }

   
    hide() {
        const textToHide = document.getElementById("text-to-hide");
        if (textToHide.style.display === "none") {
            textToHide.style.display = "block"; this.setState({ btnText: "Hide" })
        } else {
            textToHide.style.display = "none"; this.setState({ btnText: "Show" })
        }
    }

    render() {
        return (
            <div className="hide-me">
                <h1 id = "text-to-hide">Hide Me!</h1>
                <div className="hide-me-btn">
                    <button className = "hide-show-btn" onClick = {this.hide} >{this.state.btnText}</button>
                </div>
            </div>
        )
    }
}
   

//put html on page
//add onclick handlers
