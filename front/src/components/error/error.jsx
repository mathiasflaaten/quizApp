import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 
import './error.css'; 

class Error extends Component {
    constructor(props){
        super(props)
    }

    render() {

        const homeLink = this.props.homeLink ? <div className="center"> <Link to="/">Home</Link> </div> : null; 

        return(
            <div className="error-div">
                <div>
                    <p className="error-text">{this.props.errorCode}</p>
                    <p className="error-text">{this.props.errorMsg}</p>
                </div>
                {homeLink}
            </div>
        );
    }
}

export default Error; 