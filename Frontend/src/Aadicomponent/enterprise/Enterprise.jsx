import React from 'react'
import "./enterprise.css"
import { Heading,Button } from '@chakra-ui/react'

const Enterprise = () => {
  return (  
<div style={{display:"flex",width:"80%",margin:"auto",justifyContent:"space-around"}} className="employee">
    <div className='employees'>
        <p className='p'>ENTERPRISE</p>
        <Heading as='h2' size='2xl' className='heading'>
        Try enterprise time tracking at the highest level
        </Heading>
        <br />
        <p>
        Custom needs? No problem! Contact us, and we will definitely find a perfect solution for your enterprise.
        </p>
        <br />
        <br />
        <div className='heading2' >
        <Heading as='h4' size='md'>
   Transfer multilevel project structures
  </Heading>
  
  <Heading as='h4' size='md'>
   Achieve full compliance with data regulations
  </Heading>
  
  <Heading as='h4' size='md'>
    Track your activities actometically
  </Heading>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Button  colorScheme='whatsapp'style={{borderRadius:"40px",padding:"30px"}}>Contact for customised solution</Button>
    </div>
    <div style={{marginTop:"12rem"}}>
        <img src="	https://cdn-m.timecamp.com/img/greenbranding/features/project-structure.png" style={{height:"450px",width:"800px"}} />
    </div>
</div>
  )
}

export default Enterprise