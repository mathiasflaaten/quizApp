import React, { Component } from 'react'; 
import './choiceBox.css';

class ChoiceBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            choice: null
        }

       // this.onclick = this.onclick.bind(this); 
       this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(event) {
        this.props.onchange(event); 
        const target = event.target; 
        console.log("value: ",target.value)
        
        this.setState({
            choice: target.value
        }, () => console.log("state choice: ", this.state.choice)); 
    }

    onclick = (e) => {
        this.props.onclick(e); 
    }

    render() {

        let styling = this.props.active == this.props.id ? "box correct-box" : "box";
        let content = this.props.editable == true ? <input className="center input-text input" type="text" name="choice" value={this.state.choice} onChange={this.handleChange}/> : <p className="text avoid-pointer">{this.props.choice}</p>;
        

        return(
            <div key={this.props.key} id={this.props.id} editable={this.props.editable} onClick={this.onclick} className={styling} >
                {content}
            </div>
        );
    }
}

export default ChoiceBox;