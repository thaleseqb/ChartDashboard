import React from "react";
// import "."
import "./TextField.css"

const TextField = (props) => {
    return (
        <div className="container">
            <label>{props.label}</label>
            <input required={props.required} placeholder={props.placeholder} type="text" />
        </div>
    )
}

export default TextField;