import React, { Component } from 'react';
import ChoiceBox from '../choiceBox/choiceBox'; 
import Error from '../error/error'; 
import GameScore from '../gameScore/gameScore'; 
import './QuizBoard.css'

class QuizBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            quizData: [],
            error: null,
            currentQuiz: null,
            quizLength: this.quizData != null ? quizData.length : 0,
            numberOfCorrectAns: 0,
            numberOfWrongAns: 0
        }
    }

    async componentDidMount() {
        try{
            let data = await this.getData('https://localhost:44374/api/Quiz');
            if(data) {
                this.setState({ 
                    quizData: data,  
                });
            }  
        } catch(error) {
            this.setState({ error: error.message }); 
        }
       this.updateQuiz();  
    }

    async getData(url) {
        try {
          let res = await fetch(url);
          return await res.json();
        } catch (error) {
            this.setState({ error: error }); 
        }
    }



    incrementCorrectAnswerHandler() {
        this.setState(state => {
            return {numberOfCorrectAns: state.numberOfCorrectAns + 1}
        }); 
    }

    incrementWrongAnswerHandler() {
        this.setState(state => {
            return {numberOfWrongAns: state.numberOfWrongAns + 1}
        }); 
    }

    updateQuiz() {
        if(this.state.quizData.length > 0) {
            for(let quiz of this.state.quizData) {
                this.setState({currentQuiz: quiz});
                break;  
            }
            this.deleteQuiz(); 
        } else {
            this.setState({currentQuiz: null}); 
        }
    }


    deleteQuiz() {
        if(this.state.quizData.length > 0) {
            this.state.quizData.shift(); 
        }
    }

    clickHandler = (e) => {
        this.checkAnswer(e.target.id); 
        this.updateQuiz();
    }

    checkAnswer(answer) {
        let currentQuiz = this.state.currentQuiz; 
        if(currentQuiz != null ) {
            if(answer == currentQuiz.answer) {
                this.incrementCorrectAnswerHandler(); 
             }
            if(answer != currentQuiz.answer) {
                this.incrementWrongAnswerHandler(); 
             }
        }
       
    }


    displayQuiz() {
        if(this.state.error != null) {
            return(<Error errorMsg={this.state.error.message}/>); 
        }

        if(this.state.currentQuiz == null) {
            return(<GameScore correctAnswers={this.state.numberOfCorrectAns} wrongAnswers={this.state.numberOfWrongAns}/>);
        }

        if(this.state.currentQuiz != null) {
            let quiz = this.state.currentQuiz; 
            return(
                <div className="quiz-div">
                    <table className="m-spacing">
                    <caption className="q-text m-spacing">{quiz.question}</caption>
                        <tbody>
                            <tr>
                                <td> <ChoiceBox id={0}choice={quiz.choices[0]} onclick={this.clickHandler}/> </td>
                                <td> <ChoiceBox id={1} choice={quiz.choices[1]} onclick={this.clickHandler}/> </td>
                            </tr>
                            <tr>
                                <td> <ChoiceBox id={2} choice={quiz.choices[2]} onclick={this.clickHandler}/> </td>
                                <td> <ChoiceBox id={3} choice={quiz.choices[3]} onclick={this.clickHandler}/> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }

    render() {
        return(
            <div className="main-body">
                {this.displayQuiz()}
            </div>
        );
    }
}

export default QuizBoard; 