import React from 'react'
import "./employees.css"
import { Heading,Button } from '@chakra-ui/react'

const Employees = () => {
  return (  
<div style={{display:"flex",width:"80%",margin:"auto",justifyContent:"space-around"}} className="employee">
    <div className='employees'>
        <p className='p'> FOR EMPLOYEES</p>
        <Heading as='h2' size='2xl' className='heading'>
         Track your employees working time
        </Heading>
        <br />
        <p>
        Log working hours of your employees automatically or manually and make sure they are billed fairly. 
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
        <Button  colorScheme='whatsapp'style={{borderRadius:"40px",padding:"30px"}}>Track employees time</Button>
    </div>
    <div style={{marginTop:"12rem"}}>
        <img src="	https://cdn-m.timecamp.com/img/greenbranding/features/img-home-features.png" style={{height:"300px"}} />
    </div>
</div>
  )
}

export default Employees