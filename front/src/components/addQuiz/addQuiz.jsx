import React, { Component } from 'react'; 
import { withRouter, Link } from 'react-router-dom'; 
import PrimaryButton from '../button/primaryButton';
import ChoiceBox from '../choiceBox/choiceBox';
import Error from '../alerts/error/error'; 
import './addQuiz.css'; 


class AddQuiz extends Component {
    constructor(props){
        super(props)

        this.state = {
            question: '',
            choices: [],
            correctAnswer: null,
            activeChoice: null,
            isFormFilled: false,
            error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChoicesChange = this.handleChoicesChange.bind(this); 
        this.onclick = this.onclick.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.setErrorStateToNull = this.setErrorStateToNull.bind(this); 
    }

    handleChange(event) {
        const target = event.target; 
        const name = target.name; 
        this.setState({
            [name]: target.value
        }, () => console.log(this.state.question));
    }

    handleChoicesChange(event) {
        const target = event.target; 
        const id = event.currentTarget.parentNode.id;
        console.log("value in parent addQuiz: ",target.value, "target-id: ", id);
        let choiceArr = [];
        if(this.state.choices != null) {
            this.state.choices.map(choice => {
                choiceArr.push(choice); 
            });
        }
        choiceArr[id] = target.value; 
        this.setState({
            choices: choiceArr
        }); 
       
    }

    handleSubmit(event) {
        const state = this.state; 
        try {
            if(state.question.length > 0 && state.correctAnswer != null && state.choices.length == 4) {
                const quizItem = {
                    Question: state.question,
                    Choices: state.choices,
                    Answer: state.correctAnswer
                }
                fetch('https://localhost:44374/api/Quiz', {
                    method: 'post',
                    body: JSON.stringify(quizItem), 
                    headers: {
                        'content-type': 'application/json'
                    }
                    
                }).then(response => {
                    if(response.status != 200) {
                        const error = `${response.status} Something went wrong`
                        this.setState({error: error}, console.log(this.state.error)); 
                    }
                    console.log(response)
                    return response.json(); 
                })
                
            }else {
                this.setState({
                    error: 'Form is not filled out correctly'
                }); 
            }
            console.log(state.choices); 
        }catch(e) {
            this.setState({error: e.message}); 
        }
        event.preventDefault(); 
    }

    formIsFilled() {
        const state = this.state; 
        if(state.question.length > 0 && state.correctAnswer != 0 && state.choices.length == 4) {
            this.setState({
                isFormFilled: true
            })
        }
        
    }

    onclick(e) {
        this.setState({
            correctAnswer: e.target.id,
            activeChoice: e.target.id
        }, () => console.log("current correct answer: ", this.state.correctAnswer));


        
        console.log("trykker på onclick inne i addquiz");
        console.log("inne i addQuiz: ", e.target.value);
        
    }

    setErrorStateToNull() {
        this.setState({error: null} ,() =>  console.log("error state: ", this.state.error));
          
    }

    render() {

        const error = this.state.error != null ? <Error size="small" errorMsg={this.state.error} isCloseButton={true} closeError={this.setErrorStateToNull}/> : null; 

        return(
            <div className="content-div purple-border">
                <div className=" s-spacing">
                    <div className="left">
                        <Link to="/" style={{ textDecoration: 'none'}}> <PrimaryButton buttonType="secondary" btnText="Back"/> </Link>    
                    </div>
                    <div className="center">
                        {error}
                    </div>
                </div>
                <div className="center">
                    <form className="m-spacing" autoComplete="off" onSubmit={this.handleSubmit}>
                        <label className=" q-text s-spacing">
                            Question:
                            <input type="text" name="question" value={this.state.question} onChange={this.handleChange}/>
                        </label>
                        <div className="center m-spacing">
                            <table className="">
                            <caption className="q-text">Choices</caption>
                                <tbody>
                                    <tr>
                                        <td key={1}> <ChoiceBox id={0} active={this.state.activeChoice} editable={true} onclick={this.onclick} onchange={this.handleChoicesChange}/> </td>
                                        <td key={2}> <ChoiceBox id={1} active={this.state.activeChoice} editable={true} onclick={this.onclick} onchange={this.handleChoicesChange}/> </td>
                                    </tr>
                                    <tr>
                                        <td key={3}> <ChoiceBox id={2} active={this.state.activeChoice} editable={true} onclick={this.onclick} onchange={this.handleChoicesChange}/> </td>
                                        <td key={4}> <ChoiceBox id={3} active={this.state.activeChoice} editable={true} onclick={this.onclick} onchange={this.handleChoicesChange}/> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="center">
                            <PrimaryButton btnText="Send" onclick={this.handleSubmit}/>
                        </div>
                    </form>
                </div>
               
            </div>
           
        )
    }
}

export default AddQuiz;