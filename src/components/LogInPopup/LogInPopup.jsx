import React, { useState } from 'react'
import './LogInPopup.css'
import { assets } from '../../assets/assets'
export default function LogInPopup({SetShowPopup}) {
    const [currentState,setCurrentState]=useState('Login')
  return (
    <div className='login-popup'>
    <form className='form-login-container'>
        <div className="login-popup-titel">
            <h2 className='titel'>{currentState}</h2>
            <img src={assets.cross_icon} alt="" onClick={()=>SetShowPopup(false)}/>
        </div>
        <div className="login-popup-inputs">
          {currentState==='Login'?<></>:<input type="text" placeholder='Your Name'  required/>}
          
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currentState=='Sign Up'?'Create Account':'Login'}</button>
        <div className="login-popup-conition">
          <input type="checkbox" required />
          <p>By continuing , i agree to the term of use & privcy policy.</p>
        </div>
        {
          currentState==='Login'?
          <p>Create a new account ? <span onClick={()=>setCurrentState('Sign Up')}>Click here</span></p>
          : <p>Already have an account ? <span  onClick={()=>setCurrentState('Login')}>Login here</span></p>
        }
       
       
    </form>
     
    </div>
  )
}
