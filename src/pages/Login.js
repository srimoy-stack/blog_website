import React from 'react'

import{auth,provider}from  "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Login({setAuthIn}) {
  let navigate = useNavigate();
 const singinwithgoogle=()=>{
  signInWithPopup(auth,provider).then((result)=>{
     setAuthIn(true)
      localStorage.setItem("IsAuth",true)
      navigate("/");

    })
  }
  return (
    <div className='loginPage'>
  
  
<p>Login with Google to continue</p>
    <button className='login-with-google-btn' onClick={singinwithgoogle}>Sing In with Google</button></div>
  )
}
