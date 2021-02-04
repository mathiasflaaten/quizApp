import React, { Component } from 'react'; 
import './addQuiz.css'; 

class AddQuiz extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <form>
                <label>
                    Question:
                    <input type="text" name="question"/>
                </label>
            </form>
        )
    }
}

export default AddQuiz;