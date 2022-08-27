import React from 'react'
import "./Navbar.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const RightNav = () => {
  return (
    <div style={{display:"flex",gap:"1rem",alignItems:"center"}}>
        <Link to= "/auth/login" >Login </Link>
        <Link to= "/auth/signup" >Sign up</Link>
       
         <Button bg="#F7B801" color="white" padding="27px" borderRadius="30px"> Start tracking time</Button>
         
    </div>
  )
}

export default RightNav