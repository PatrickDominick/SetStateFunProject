import React, { useState } from 'react'

export default function toggle() {
    const [visibility, setVisibility] = useState("visible")
    const [buttonText, setButtonText] = useState("Hide")

    const handleClick = () => {
        setVisibility(visibility === "visible" ? "hidden" : "visible")
        setButtonText(buttonText === "Hide" ? "Show" : "Hide")
    }

    return (
        <div className="toggle-wrapper">
            <h3 style={{ visibility }}>Hide Me!</h3>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}