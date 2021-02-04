import React, { Component } from 'react'; 
import './button.css'; 

function PrimaryButton(props) {
    return(
        <div id={props.path} className="btn-primary" onClick={props.onclick}>
            {props.btnText}
        </div>
    )
}

export default PrimaryButton; 