import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from './edtech-slider.png'
//import Base from '../Base/Base.js'
//import Students from './Students.js'

function Signup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    const handleLogin = async()=>{
        const userInfo = {
            email,
            password,
        }
const res = await fetch(`https://login1-vrwc.onrender.com/users/signup`, {
    method :"POST",
    body : JSON.stringify(userInfo),
    headers:{
        "Content-Type":"application/json"
    }
});

   const data = await res.json();
  localStorage.setItem("token", data.data.token)
   navigate("/login")
    }
  return (
<div className='log'>
        <TextField  label="Email" variant="outlined" fullWidth sx={{ m: 1 }} 
         placeholder='Enter Email'
         type="email"
         value= {email}
         onChange={(e)=>setEmail(e.target.value)}
         />
        <TextField  label="Password" variant="outlined" fullWidth sx={{ m: 1 }} 
         placeholder='Enter Password'
         type="Password"
         value ={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
        <Button className='but'
        type="submit"
      
        onClick={handleLogin}
        >Signup</Button>
   <img src={img} height="50%" width="50%"/>
</div>
  )
}

export default Signup