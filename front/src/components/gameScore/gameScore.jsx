import React, { Component } from 'react'; 
import PrimaryButton from '../button/primaryButton'; 
import './gameScore.css';


class GameScore extends Component {
    constructor(props){
        super(props)

         this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() {
       window.location.reload(); 
    }


    render() {
        return(
            <div className="score-div m-spacing">
                <div>
                    <p className="text m-spacing">antall riktig: {this.props.correctAnswers}</p>
                    <p className="text m-spacing">antall feil: {this.props.wrongAnswers}</p>
                    <PrimaryButton onclick={this.handleClick} btnText="Gjenta"/>
                </div>
            </div>
            
        )
    }
}

export default GameScore; 