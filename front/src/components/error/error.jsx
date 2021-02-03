import React, {Component} from 'react';
import './error.css'; 

class Error extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="error-div">
                <p className="error-text">{this.props.errorCode}</p>
                <p className="error-text">{this.props.errorMsg}</p>
            </div>
        );
    }
}

export default Error; 