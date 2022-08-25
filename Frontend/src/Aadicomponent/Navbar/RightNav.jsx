import React from 'react'
import "./Navbar.css"
import { Button, ButtonGroup } from '@chakra-ui/react'

const RightNav = () => {
  return (
    <div style={{display:"flex",gap:"1rem",alignItems:"center"}}>
        <h3>Book a Demo</h3>
        <h3>Sign in</h3>
         <Button bg="#F7B801" color="white" padding="27px" borderRadius="30px"> Start tracking time</Button>
         
    </div>
  )
}

export default RightNav