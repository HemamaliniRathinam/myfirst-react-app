import React from 'react';
import './Footer.css';
import {assets} from  '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className='footer-content'> 
         <div className='footer-content-left'>
          <div className='footer-logo-container'>
    <img src={assets.Logo} className='logo' alt=""/>
    </div>
           <p>Lorem ipsum is simply dummy setting typescript</p>
           <div className='footer-social-icons'>
            <img src={assets.linkedinicon} alt=""/>
            <img src={assets.twittericon} alt=""/>
            <img src={assets.facebookicon} alt=""/>
            </div>
         </div>
         <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
      <div className='footer-content-right'>
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+1-651-600-6014</li>
            <li>Contact@OnlineMedicine.com</li>
        </ul>
         </div>   
    </div>
    <hr/>
    <p className='footer-copyright'>CopyRight  © 2025 MediRush. All rights reserved.</p>
    </div>
    
  );
}

export default Footer;
