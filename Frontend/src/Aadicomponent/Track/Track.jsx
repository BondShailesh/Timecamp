import React from 'react'
import "./Track.css"
import { Heading } from '@chakra-ui/react'

const Track = () => {
  return (
    <div className='track'>
    <div>
       <p>
          Want to track time in your team ?
      </p>
      <p className='color'>    
          Book a Demo
      </p>
    </div>
       
    <Heading as='h2' size='2xl'>
    Try an automatic, easy-to-use time tracker for the entire organization!
  </Heading>
       
    </div>
  )
}

export default Track