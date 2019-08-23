import React, { Component } from 'react';
import './home.css';
import Avatar from './avatar.jpg';
import * as Constants from '../constants/index.js';
import CartIcon from './shoppingcart.svg';
import EmailIcon from './email.svg';
class Home extends Component {
    constructor(){
        super();
        this.state = {

        }
        //  this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    //javascript code

    // Button click functions.
     handleButtonClick = (url) => {
          
        window.open(url, '_blank');
     }
    // end javascript code

    //render method
    render(){
        return (
            <div className="jumbotron container content-section">
                <div className="heading-section ">
                    <img src={Avatar} />
                    <div className= "col-sm">
                        <h1>{Constants.COMPANY_NAME}</h1>
                        <p>{Constants.COMPANY_DESCRIPTION}</p>
                        <hr />
                    </div>
                </div>
                <div className="col button-section container div-test2">
        
                    <div className="row-sm-4">
                        <button 
                        type="button" 
                        className="btn btn-primary btn-md btn-block"
                        onClick={this.handleButtonClick.bind(this,Constants.PAPARAZZI_URL)}
                        ><img src={CartIcon} />Paparazzi
                        </button>
                    </div>
                    
                    <div className="row-sm-4">
                        <button 
                        type="button" 
                        className="btn btn-primary btn-md btn-block"
                        onClick={this.handleButtonClick.bind(this,Constants.SHOPIFY_URL)}
                        ><img src={CartIcon} />Shopify
                        </button>
                    </div>
                    
                    <div className="row-sm-4">
                        <button 
                        type="button" 
                        className="btn btn-primary btn-md btn-block"
                        onClick={this.handleButtonClick.bind(this,Constants.SENDEMAIL_URL)}
                        ><img src={EmailIcon} />Gmail Me
                        </button>
                    </div>

                </div>
                <div className="footer-section">
                    <p>Contact Info: </p>
                    <p> {Constants.EMAIL}</p>
                </div>
            </div>
        )
    }
}
export default Home;