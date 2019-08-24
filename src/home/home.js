import React, { Component } from 'react';
import './home.css';
import * as Constants from '../constants/index.js';
import Avatar from '../images/avatar.jpg';
import CartIcon from '../images/shoppingcart.svg';
import EmailIcon from '../images/email.svg';
import FBIcon from '../images/FB.png';
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
          
        window.open(url);
     }
    // end javascript code

    //render method
    render(){
        return (
            <div className="jumbotron content-section">
                <div className="heading-section ">
                    <img src={Avatar} />
                    <div className= "col-sm text-center">
                        <div className="col inline-block">
                            <h1>{Constants.COMPANY_NAME}</h1>
                        </div>
                        <div className="col inline-block">
                            <p>{Constants.COMPANY_DESCRIPTION}</p>
                        </div>
                            <hr />
                    </div>
                </div>
                <div className="col button-section inline-block">
                    <div className="row ">
                        <button 
                        type="button" 
                        className="btn btn-primary btn-md btn-block "
                        onClick={this.handleButtonClick.bind(this,Constants.PAPARAZZI_URL)}>
                            <img src={CartIcon} />
                            Paparazzi
                        </button>
                    </div>
                    
                    <div className="row ">
                        <button 
                        type="button" 
                        className="btn btn-primary btn-md btn-block"
                        onClick={this.handleButtonClick.bind(this,Constants.SHOPIFY_URL)}>
                            <img src={CartIcon} />
                            Shopify
                        </button>
                    </div>
                    
                    <div className="row ">
                        <button 
                        type="button" 
                        className="btn btn-primary btn-md btn-block"
                        onClick={this.handleButtonClick.bind(this,Constants.SENDEMAIL_URL)}>
                            <img src={EmailIcon} />Gmail Me
                        </button>
                    </div>
                    

                </div>
                <div className=" col-sm-4 footer-section">
                    <div className=" row contact-section inline-block">
                        <p>Contact Info:</p>
                        <ul>
                            <li><p>{Constants.EMAIL}</p></li>
                        </ul>
                    </div>
                    <br />
                    <div className="row inline-block ">
                        <div className="col-sm">
                            <button type="button" className="btn" onClick={this.handleButtonClick.bind(this,Constants.FB_URL)}>
                                <img className="social-media-icon" src={FBIcon} />
                            </button>
                        </div>
                    </div>
                    <br />
                    <div className=" row my-branding inline-block">
                        <ul>
                            <li>{Constants.BRAND_MSG}</li>
                            <li>Created By: <a href={Constants.CREATED_BY_URL} target="_blank">
                                    {Constants.CREATED_BY}</a>.
                                </li>
                            <li><p>{Constants.VERSION_NUM}</p></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;