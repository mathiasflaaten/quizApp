import React, { Component } from 'react'; 
import './button.css'; 

function PrimaryButton(props) {

    const buttonStyle = props.buttonType == 'secondary' ? "btn-secondary" : "btn-primary";
    
    return(
        <div id={props.path} className={buttonStyle}  onClick={props.onclick}>
            {props.btnText}
        </div>
    )
}

export default PrimaryButton; 