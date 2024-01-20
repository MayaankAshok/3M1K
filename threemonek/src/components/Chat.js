import React from "react";
import Messages from "./Messages";
import Input from "./Input";

export default function Chat() {
    return(
        <>
            <div className="chat">
                <div className="chatProfile">Hello</div>
                <Messages/>
                <Input/>
            </div>
        </>
    )
}