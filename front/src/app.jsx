import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, hashHistory, browserhistory, Route, Link } from 'react-router-dom'; 
import QuizBoard from './components/quizBoard/quizBoard'; 
import Menu from './components/menu/menu';
import GameScore from './components/gameScore/gameScore';
import AddQuiz from './components/addQuiz/addQuiz';

class App extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return(
            <Router>
                <Route exact path='/' component={Menu}/>
                <Route path='/play' component={QuizBoard}/>
                <Route path='/create' component={AddQuiz}/>
            </Router>
        ); 
    }    
    
}

ReactDOM.render(<App />, document.getElementById("root"));
