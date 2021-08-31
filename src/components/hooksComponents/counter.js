import React, { useState } from 'react';

export default function counter() {
    const [count, newCount] = useState(1)

    return (
        <div className="counter-wrapper">
            <button className="updown-btn" onClick={() => newCount(count + 1)}>Up</button>
            <h1 id = "number">{count}</h1>
            <button className="updown-btn" onClick={() => newCount(count - 1)}>Down</button>
        </div>
    )
}