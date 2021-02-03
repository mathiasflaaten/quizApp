import React, { Component } from 'react'; 
import './choiceBox.css';

class ChoiceBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    onclick = (e) => {
        this.props.onclick(e); 
    }

    render() {

        return(
            <div id={this.props.id} className="box" onClick={this.props.onclick}>
                <p className="text">{this.props.choice}</p>
            </div>
        );
    }
}

export default ChoiceBox;