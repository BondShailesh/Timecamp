import React from 'react'
import MidNav from './MidNav'
import RightNav from './RightNav'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <div className="box_navbar">
        <div className='main_navbar'>
            {/* <img src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg" alt="" /> */}
            <Link to ="/">
              <Image src='https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg' ></Image>
            </Link>
            <MidNav/>
            <RightNav/>
        </div>
    </div>
  )
}

export default Navbar