import React from "react";
import { useState } from "react";
// import TimeHeader from "../TimeHeader/TimeHeader";
import style from "./project.module.css";
import Todo from "./Todo";

import { Button,  Container, WrapItem } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


const Tagss = () => {


  

  const [show, setShow] = useState(true);
  const [toggle, setToggle]= useState(true);


  return (
    <div className={style.contatiner}>
      
    
        <Container>
        
        <div className={style.tags}>
         

          <WrapItem>
          <Button colorScheme='whatsapp' onClick={()=>setToggle(!toggle)} >+Add tag list</Button>
          </WrapItem>
          
          <Container maxW="2xl" bg="white" color="black" fontSize="sm" as='' textAlign={[ 'left', 'center' ]}>
         
            Manage your tags, like list of customers or activities. All
            workspace members can assign tags to time entries, when they track
            time. Project managers can set lists of tags for projects. Reports
            can be filtered and grouped by tags.
          
          </Container>

          <button className={style.showhidebtn}>
            {show ? "Show archived tags" : "Hide archived tags"}
          </button>
            {
              toggle?<div><Todo/></div>: null
            }
          <hr className={style.hrtag} />
          <div className="dividerbtn">
            <WrapItem>
          <Button colorScheme='whatsapp'  >Save Setting</Button>
          </WrapItem> <br />
            <WrapItem spacing={4}>
          <Button colorScheme='whatsapp'  >Back Addons list</Button>
          </WrapItem>
          </div>
        </div>
        </Container>
      {/* </div> */}
    </div>
  );
};

export default Tagss;