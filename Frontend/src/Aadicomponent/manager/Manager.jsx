import React from 'react'
import "./manager.css"
import { Heading,Button } from '@chakra-ui/react'

const Manager = () => {
  return (  
<div style={{display:"flex",width:"80%",margin:"auto",gap:"5rem",justifyContent:"space-around"}} className="employee">
<div style={{marginTop:"12rem"}}>
        <img src="https://cdn-m.timecamp.com/img/greenbranding/features/reporting-features.png"  style={{heigth:"400px"}}/>
    </div>
    <div className='employees'>
        <p className='p'> FOR MANAGERS</p>
        <Heading as='h2' size='2xl' className='heading'>
        Track project time and budget easier than ever before
        </Heading>
        <br />
        <p>
        Stay on top of your team’s performance and create accurate resource estimates for all the projects.
        </p>
        <br />
        <br />
        <div className='heading2' >
        <Heading as='h4' size='md'>
   Check logged time on the handy TImesheet
  </Heading>
  
  <Heading as='h4' size='md'>
   Try our easy-to use-desktop appp
  </Heading>
  
  <Heading as='h4' size='md'>
    Track your activities actometically
  </Heading>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Button  colorScheme='whatsapp'style={{borderRadius:"40px",padding:"30px"}}>Increase team Productivity</Button>
    </div>
   
</div>
  )
}

export default Manager