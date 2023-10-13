import React from 'react'
import Button from '@mui/material/Button'
import {NavLink,useNavigate} from 'react-router-dom'
export default function Navbar(){
    const navigate = useNavigate()
    function handleLogout(){
        localStorage.removeItem("token")
        navigate("/login")
    }
    return(
        <div className='navbar-style'>
       <NavLink to="/"><li><Button variant='contained'>home</Button></li></NavLink>
       <NavLink to="/students"><li><Button  variant='contained'>Students-Details</Button></li></NavLink>
       <NavLink to="/add-student"><li><Button  variant='contained'>AddStudents</Button></li></NavLink>
       <NavLink to="/signup"><li><Button  variant='contained'>SignUp</Button></li></NavLink>
       <li><Button  variant='contained' onClick={handleLogout}>LogOut</Button></li>
     
        </div>

    )
}