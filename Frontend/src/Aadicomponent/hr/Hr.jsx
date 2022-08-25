import React from 'react'
import "./Hr.css"
import { Heading,Button } from '@chakra-ui/react'

const Hr = () => {
  return (  
<div style={{display:"flex",width:"80%",margin:"auto",gap:"5rem",justifyContent:"space-around"}} className="employee">
<div style={{marginTop:"12rem"}}>
        <img src="	https://cdn-m.timecamp.com/img/greenbranding/features/attendance-features.png"  style={{heigth:"400px"}}/>
    </div>
    <div className='employees'>
        <p className='p'> FOR HR</p>
        <Heading as='h2' size='2xl' className='heading'>
        Check Timesheets and control attendance in one place
        </Heading>
        <br />
        <p>
        With TimeCamp you can forget about endless stacks of papers! Take advantage of convenient and easy to use tools to support your daily HR and payroll work.
        </p>
        <br />
        <br />
        <div className='heading2' >
        <Heading as='h4' size='md'>
   Track Attendence Automatically
  </Heading>
  
  <Heading as='h4' size='md'>
   Try our easy-to use-desktop appp
  </Heading>
  
  <Heading as='h4' size='md'>
    Check and approve employees Timesheet
  </Heading>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Button  colorScheme='whatsapp'style={{borderRadius:"40px",padding:"30px"}}>Make HR's work Easier</Button>
    </div>
   
</div>
  )
}

export default Hr