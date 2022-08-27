import React from 'react'
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"
import { MdArrowDropDown,MdDateRange } from 'react-icons/md';
import { AiOutlineAreaChart} from 'react-icons/ai';
import { BsBarChart,BsFillCalendarCheckFill,BsReverseLayoutSidebarInsetReverse} from 'react-icons/bs';
import {FaRoute} from 'react-icons/fa';
import {FcOvertime} from 'react-icons/fc';
import {BiTime,BiData} from 'react-icons/bi';

import {BsCalendarDate} from 'react-icons/bs';

export default function MidNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
        <Menu isOpen={isOpen} style={{display:"flex"}}>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
               
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                <div style={{display:"flex"}}>
                Features <MdArrowDropDown style={{marginTop:"2px"}}/>
                </div>
               
                {/* More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon/>} */}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} style={{fontWeight:"normal"}}>
                <MenuItem> <AiOutlineAreaChart style={{fontSize:"30px",marginRight:"1rem"}}/>  Productive tracking</MenuItem>
                <MenuItem><BiTime style={{fontSize:"30px",marginRight:"1rem"}}/> Automatic time tracking </MenuItem>
                <MenuItem><BsBarChart style={{fontSize:"30px",marginRight:"1rem"}}/> Reporting </MenuItem>

                <MenuItem> <BsFillCalendarCheckFill style={{fontSize:"30px",marginRight:"1rem"}}/> Timesheet approvals</MenuItem>
                <MenuItem><BiData style={{fontSize:"30px",marginRight:"1rem"}}/> Invoicing</MenuItem>
                <MenuItem><FaRoute style={{fontSize:"30px",marginRight:"1rem"}}/> Attenda</MenuItem>
            </MenuList>
              Pricing
              <Menu>
              <MenuButton
                variant="ghost"
                mx={2}
                py={[2, 1, 2]}
                px={3}
                borderRadius={6}
               
                aria-label="color"
                fontWeight="normal"
               
            >
                <div style={{display:"flex"}}>
                Intregrations <MdArrowDropDown style={{marginTop:"2px"}}/>
                </div>
               
                {/* More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon/>} */}
            </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} style={{fontWeight:"normal"}}>
                <MenuItem> <BsReverseLayoutSidebarInsetReverse style={{fontSize:"30px",marginRight:"1rem"}}/>  Trello</MenuItem>
                <MenuItem><MdDateRange style={{fontSize:"30px",marginRight:"1rem"}}/>Google Calander </MenuItem>
                <MenuItem><BsCalendarDate style={{fontSize:"30px",marginRight:"1rem"}}/> iCal</MenuItem>
                <MenuItem><FaRoute style={{fontSize:"30px",marginRight:"1rem"}}/> Attenda</MenuItem>
                <MenuItem> <BsFillCalendarCheckFill style={{fontSize:"30px",marginRight:"1rem"}}/> Asana</MenuItem>
                <MenuItem><BiData style={{fontSize:"30px",marginRight:"1rem"}}/>Jira</MenuItem>
                
            </MenuList>
            </Menu>
              Blog
              
        </Menu>
        </div>
    )
}