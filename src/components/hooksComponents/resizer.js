import React, { useState } from 'react';

export default function resizer() {
    const [size, newSize] = useState(12)
    const [sizeInput, newSizeInput] = useState(1)
    const formattedSize = `${size}px`

    const handleResize = (newSize) => {
        this.useState({
          size: newSize,
        });
      }
    
    function handleSizeInputChange(event) {
        newSizeInput(event.target.valueAsNumber)
    }

    return (
        <div className="resizer-wrapper">
        <h3 style={{ fontSize: formattedSize }}>{formattedSize}</h3>
        <input
          type="number"
          value={sizeInput}
          onChange={handleSizeInputChange}
          
        />
        <button
          onClick={() =>
            newSize(size + sizeInput)
          }
        >
          Increase
        </button>
        <button
          onClick={() =>
            newSize(size - sizeInput)
          }
        >
          Decrease
        </button>
      </div>
    )
}