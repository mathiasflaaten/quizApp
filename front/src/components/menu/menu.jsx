import React, { Component } from 'react'; 
import PrimaryButton from '../button/primaryButton';
import { withRouter } from 'react-router-dom'; 
import './menu.css'; 

class Menu extends Component {
    constructor(props){
        super(props)

        this.routeChange = this.routeChange.bind(this); 
    }

    routeChange() {
        let path = `play`; 
        this.props.history.push(path); 
    }

    render() {
        return(
            <div className="content-div m-spacing">
                <div className="welcome-text-div">
                    <p className="text ">Velkommen til mini Quiz</p>
                </div>
                <div className="button-div m-spacing">
                    <div className="m-spacing"><PrimaryButton onclick={this.routeChange} btnText="Start Quiz"/></div>
                    <div className="m-spacing"><PrimaryButton btnText="Legg til"/></div>    
                </div>
               
                
            </div>
        )
    }
}

export default Menu; 
