import React from 'react'
import "./Secure.css"
import { Heading ,Input,Button} from '@chakra-ui/react'


const Secure = () => {
  return (
    <div className='Secure_box'>
        <Heading as='h2' size='2xl'>
        Use TimeCamp to your advantage
        </Heading>
        <br />
      
        <h1>If you’re struggling to keep track of your work across different projects, you need a radical change. You need TimeCamp.</h1>
    <br />
    <div className='button_input_box'>
      
      <Input backgroundColor="white" height="60px" placeholder='Add your email' borderRadius="20px" ></Input>
      <Button height="60px" borderRadius="20px" colorScheme="whatsapp" padding="1rem" width="fit-content">Start tracking time</Button>
    </div>
    </div>

  )
}

export default Secure