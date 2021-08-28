import React, { Component } from "react";

export default class HideMe extends Component {
    constructor() {
        super();

        this.state = {

        }
        this.hide = this.hide.bind(this)
        
    }

    hide() {
        const textToHide = document.getElementById("text-to-hide");
        let btnName = document.getElementsByClassName("hide-show-btn")
        if (textToHide.style.display === "none") {
            textToHide.style.display = "block";
        } else {
            textToHide.style.display = "none";
        }
    }

    render() {
        return (
            <div className="hide-me">
                <h1 id = "text-to-hide">Hide Me!</h1>
                <div className="hide-me-btn">
                    <button className = "hide-show-btn" onClick = {this.hide} >Hide</button>
                </div>
            </div>
        )
    }
}
   

//put html on page
//add onclick handlers
