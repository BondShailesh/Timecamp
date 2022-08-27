import React from 'react'
import MidNav from './MidNav'
import RightNav from './RightNav'

const Navbar = () => {
  return (
    <div className="box_navbar">
        <div className='main_navbar'>
            <img src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg" alt="" />
            <MidNav/>
            <RightNav/>
        </div>
    </div>
  )
}

export default Navbar