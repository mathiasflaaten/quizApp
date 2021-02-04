import React, { Component } from 'react'; 
import PrimaryButton from '../button/primaryButton'; 
import { withRouter, Link } from 'react-router-dom'; 
import './gameScore.css';


class GameScore extends Component {
    constructor(props){
        super(props)

    }


    render() {
        return(
            <div className="score-div m-spacing">
                <div>
                    <p className="text m-spacing">antall riktig: {this.props.correctAnswers}</p>
                    <p className="text m-spacing">antall feil: {this.props.wrongAnswers}</p>
                    <Link to="/"> <PrimaryButton btnText="Meny"/> </Link>
                </div>
            </div>
            
        )
    }
}

export default GameScore; 