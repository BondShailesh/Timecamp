import React from 'react'
import "./Navbar.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

const RightNav = () => {
  const navigate = useNavigate()
  const handleclick = ()=>{
   navigate("/auth/login")
  }
  
  return (
    <div style={{display:"flex",gap:"1rem",alignItems:"center"}}>
        <Link to= "/auth/login" >Login </Link>
        <Link to= "/auth/signup" >Sign up</Link>
       
         <Button onClick={handleclick} bg="#F7B801" color="white" padding="27px" borderRadius="30px"> Start tracking time</Button>
         
    </div>
  )
}

export default RightNav