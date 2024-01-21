import React from "react";

export default function Input() {
    return(
        <>
            <div className="input">
                <input type="text" className="inputBox" placeholder="Enter text here"/>
                <button className="sendButton">Send</button>
            </div>
        </>
    )
}