import React, { useEffect, useState } from 'react'
import '../Login.css'
import { message } from "antd";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email,setEmail] = useState()
  const navigate = useNavigate()

  const isValidEmail=(email)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email)
  }

  useEffect(()=>{
    const userEmail = localStorage.getItem("userEmail")
    if(userEmail){
      navigate('/home')
    }
  },[navigate])

  const handleSubmit =()=>{
    
    if(email){
      if(isValidEmail(email)){
        localStorage.setItem("userEmail",email)
        message.success('Logged in successfully')
        navigate('/home')

      }else{
        message.error('Email is not valid')
      }

    }else{
      message.error('Email is not valid')
     
    }

  }

  return (
    <div className='loginContainer'>
      <div className="imageContainer">
        <img src="/loginImage.jpg" alt="" />
      </div>
      <div className="loginForm">
        <div className="formContent">
          <h2>Welcome Back</h2>
          <p >Please enter your email to continue</p>

          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input 
            className="inp"
            id="email"
            required
            type="email"
            onChange={(e)=>setEmail(e.target.value)}            
            placeholder="Enter your email"
            />
          </div>
          <button className='btn' onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login