import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 
import './error.css'; 

class Error extends Component {
    constructor(props){
        super(props)

        this.state = {
            isCloseButton: false
        }

        this.onclickCloseBtn = this.onclickCloseBtn.bind(this); 
    }

    onclickCloseBtn(e) {
        this.props.closeError(e);
    }

    render() {

        const homeLink = this.props.homeLink ? <div className="center"> <Link to="/">Home</Link> </div> : null; 
        const closeButton = this.props.isCloseButton ? <div className="exit-box" onClick={this.onclickCloseBtn}>X</div> : null;
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