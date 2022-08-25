import React from 'react'
import "./Brands.css"
import { Button, Heading,Input,ButtonGroup} from '@chakra-ui/react'
import {GiCheckMark} from 'react-icons/gi';
import {GrGoogle} from 'react-icons/gr';

const Brands = () => {
  return ( 
    <div>
        <div  className='top_brand'>
       <div className='top_div'>
           <div className='top_project'>
                  <p>Free time tracking software</p>
                  <br />
                  <Heading as='p' size='2xl'>
                  Increase project profitability with time tracking
                  </Heading>
                  <br />
                  <div >
                     <div style={{display:"flex",marginBottom:"7px"}}>
                        <div style={{paddingTop:"3px",marginRight:"3px"}} >
                        <GiCheckMark />
                        </div>
                        <p>Unlimited users</p>
                     </div>
                     <div style={{display:"flex",marginBottom:"7px"}}>
                        <div style={{paddingTop:"3px",marginRight:"3px"}} >
                        <GiCheckMark />
                        </div>
                        <p>Unlimited projects</p>
                     </div>
                     <div style={{display:"flex",marginBottom:"7px"}}>
                        <div style={{paddingTop:"3px",marginRight:"3px"}} >
                        <GiCheckMark />
                        </div>
                        <p>30+ integrations</p>
                     </div>
                     <div style={{display:"flex",marginBottom:"7px"}}>
                        <div style={{paddingTop:"3px",marginRight:"3px"}} >
                        <GiCheckMark />
                        </div>
                        <p>Automated time tracking</p>
                     </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <Input placeholder='Your e-mail address' />
                  <p style={{color:"grey",fontSize:"14px",marginTop:"25px",}}>
                     By signing up you agree to our
                     Terms and Conditions
                     and
                     Privacy Policy
                  </p>
                  <br />
                  <br />
                  <div  className="top_project_button">
                        <Button  colorScheme='whatsapp'>Start tracking time</Button>
                        <div style={{display:'flex'}}>
                           <div style={{paddingTop:"1rem",display:"flex"}}>
                           <p style={{color:"grey"}}>Or sign up with:</p> 
                           </div>
                           <div>
                           <Button colorScheme='whatsapp'><GrGoogle fontSize="25px"/></Button>
                           </div>
                        </div>
                  </div>
                 

           </div>
    {/* // second div */}
           <div className='top_owner'>
           
               <img src="https://cdn-m.timecamp.com/img/person.jpg" style={{height:"70px"}} />
            
            <div>
               <h2 style={{fontWeight:"bold"}}>Adam Wagner, Co-owner and Chief Strategy Officer</h2>
            </div>
            <div>
               <p>„TimeCamp proved to be an essential management tool that gives us clear insight into a project’s efficiency and helps to avoid an overblown workload for our team.”</p>
            </div>
          
               <img src="https://cdn-m.timecamp.com/img/raindrop_logo.svg" style={{height:"20px"}} />
           


           </div>
      </div>
        </div>
        <div className='top_brand_name'>
           <h3>Trusted by 18,000 teams from all over the world (and still growing!)</h3>
            <div>
               <img src="	https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png" alt="" />
               <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png" alt="" />
               <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png" alt="" />
               <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png" alt="" />
               <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png" alt="" />
               <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png" alt="" />
            </div>
        </div>
   </div>
  )
}

export default Brands