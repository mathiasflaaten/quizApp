import React from 'react';
import ReactDOM from 'react-dom';
import QuizBoard from './components/quizBoard/quizBoard'; 

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }
    render() {
        return(
            <div>
                <QuizBoard/>
            </div>
        ); 
    }    
    
}

ReactDOM.render(<App />, document.getElementById("root"));