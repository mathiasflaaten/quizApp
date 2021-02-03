import React, { Component } from 'react'; 
import './gameScore.css';


class GameScore extends Component {
    constructor(props){
        super(props)


    }

    render() {
        return(
            <div className="score-div m-spacing">
                <p className="text m-spacing">antall riktig: {this.props.correctAnswers}</p>
                <p className="text m-spacing">antall feil: {this.props.wrongAnswers}</p>
                <div>Prøv på nytt!</div>
            </div>
        )
    }
}

export default GameScore; 