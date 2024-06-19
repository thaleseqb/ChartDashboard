import React from "react";
// import "."
import "./TextField.css"

const TextField = (props) => {
    return (
        <div className="container">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} type="text" />
        </div>
    )
}

export default TextField;