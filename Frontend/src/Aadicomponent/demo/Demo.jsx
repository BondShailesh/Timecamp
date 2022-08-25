import React from 'react'
import "./Demo.css";
import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Demo = () => {
  return (
    <div className='demo_main'>
      <div className='demo_left'>
       <Heading as='h2' size='2xl'>
       Want a product tour? Here you can book a call demo with our expert.
        </Heading>
        <br />
        <br />
        <p>Learn all of the time tracking basics of TimeCamp and track time like a true pro.</p>
        <br />
        <Button bg="#F7B801" color="white" padding="27px" borderRadius="30px">Book a demo</Button>
      </div>

      <div className='demo_right'>
<img src="https://cdn-m.timecamp.com/img/greenbranding/features/black_cta_img-platform.png" alt="" />
      </div>
    </div>
  )
}

export default Demo