import React, { Component } from 'react'; 
import PrimaryButton from '../button/primaryButton';
import { withRouter } from 'react-router-dom'; 
import './menu.css'; 

class Menu extends Component {
    constructor(props){
        super(props)

        this.state = {
            path: ``
        }

        this.routeChange = this.routeChange.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
    }

    routeChange() {
        if(this.state.path.length > 0) {
            console.log('path: ', this.state.path)
            let path = this.state.path; 
            this.props.history.push(path); 
        }
        
    }

    handleChange(event) {
        console.log('value: ', event.target.id); 
        console.log('path in state: ', this.state.path); 
        this.setState( {path: event.target.id}, () =>{ this.routeChange() }); 
    }

    render() {
        return(
            <div className="content-div m-spacing">
                <div className="welcome-text-div">
                    <p className="text ">Velkommen til mini Quiz</p>
                </div>
                <div className="button-div m-spacing">
                    <div className="m-spacing"><PrimaryButton path="/play"  onclick={this.handleChange}  btnText="Start Quiz"/></div>
                    <div className="m-spacing"><PrimaryButton  path="/create" onclick={this.handleChange}  btnText="Legg til"/></div>    
                </div>
               
                
            </div>
        )
    }
}

export default Menu; 
