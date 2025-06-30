import React, { useState } from 'react';
import './LoginPopup.css';
import {assets} from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const[currState,setCurState]=useState("Login")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.crossicon} alt="" />
        </div>
        <div className='login-popup-input'>
            {currState==="Login"?<></>: <input type="text" placeholder='Your Name' required/>}
           
            <input type="text" placeholder='Your Email' required/>
            <input type="text" placeholder='Your Password' required/>
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className='login-popup-condition'>
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use and policy.</p>
        </div>
        {currState==="Login"
        ? <p>Create a Account?<span onClick={()=>setCurState("Sign Up")}> Click Here</span></p>
        :<p>Already have an Account?<span onClick={()=>setCurState("Login")}>Login Here</span></p>}
       
           
      </form>
    </div>
  );
}

export default LoginPopup;
 