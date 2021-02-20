import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 
import './error.css'; 

class Error extends Component {
    constructor(props){
        super(props)

        this.state = {
            isCloseButton: false
        }

        this.onclickCloseButton = this.onclickCloseButton.bind(this); 
    }

    onclickCloseButton(e) {

    }

    render() {

        const homeLink = this.props.homeLink ? <div className="center"> <Link to="/">Home</Link> </div> : null; 
        const closeButton = this.props.isCloseButton ? <div onClick={this.onclickCloseButton}>X</div> : null;
        const text = this.props.size == 'small' ? 's-text' : 'l-text'; 
        const errorSize = this.props.size == 'small' ? 'small-error' : null;

        return(
            <div className={`error-div ${errorSize}`}>
                {closeButton}
                <div>
                    <p className={`error-text ${text}`}>{this.props.errorCode}</p>
                    <p className={`error-text ${text}`}>{this.props.errorMsg}</p>
                </div>
                {homeLink}
            </div>
        );
    }
}

export default Error; 