import React, { Component } from 'react';
import ChoiceBox from '../choiceBox/choiceBox'; 
import Error from '../alerts/error/error'; 
import GameScore from '../gameScore/gameScore'; 
import Loader from '../loader/loader'; 
import './QuizBoard.css'

class QuizBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            quizData: [],
            error: null,
            isLoading: false,
            currentQuiz: null,
            quizLength: this.quizData != null ? quizData.length : 0,
            numberOfCorrectAns: 0,
            numberOfWrongAns: 0
        }

        this.fetchData = this.fetchData.bind(this); 
    }

    componentDidMount() {
      this.startQuiz(); 
    }

    async fetchData() {
        try {
          let res = await fetch('https://localhost:44374/api/Quiz')
          .then(this.setState({isLoading: true}))
          .then(res => res.json())
          .then(data => {
              this.setState({quizData: data, isLoading: false});
          });
        } catch (error) {
            this.setState({ error: error,  isLoading: false}); 
        }
    }

    async startQuiz() {
        await this.fetchData();
        this.updateQuiz(); 
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
        this.checkAnswer(e.currentTarget.id); 
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
        if(this.state.isLoading) {
            return(<Loader/>)
        }

        if(this.state.error != null) {
            return(<Error homeLink={true} errorMsg={this.state.error.message}/>); 
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
            <div className="content-body center">
                {this.displayQuiz()}
            </div>
        );
    }
}

export default QuizBoard; 