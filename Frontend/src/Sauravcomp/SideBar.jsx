import React, { useState } from 'react'
import {AiOutlineRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import ReportsSubSideBar from './ReportsSubSideBar';

const SideBar = () => {
    const [open, setOpen] = useState(true);
    const [subMenuOpen,setSubMenuOpen] = useState(false);
    console.log(subMenuOpen);
  const Menus = [
    { title: 'Timesheet', src: 'Chart' },
    { title: "Dashboard", src: "Chart_fill" ,gap: true},
    { title: "Inbox", src: "Chat" },
    { title: "Reports", src: "User", gap: true,sub:true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "User", src: "Chart" },
    { title: "Task", src: "Chart" },
   
    { title: "Project", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${ open ? "w-72" : "w-20 "}   h-[100vw]  p-5  shadow-2xl pt-8 relative  duration-300`}  style = {{background : "#182244"}}
      >
        <img
          src="./src/Sauravcomp/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${ open && "rotate-[360deg]"}`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            TimeCamp
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <>
            <li
              key={index}
              onMouseEnter={Menu.sub?()=>setSubMenuOpen(!subMenuOpen):()=>setSubMenuOpen(false)}
            
              className={`flex justify-between rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9 "  : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
            <div className="flex gap-3" >  
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`} >
               
                <Link to = {Menu.title.toLowerCase()} > {Menu.title}</Link>
              </span>
              </div>
              {Menu.sub?<AiOutlineRight className={`${!open && "hidden"} origin-left duration-200`}/>:""}
             
             
            </li>
            {Menu.gap?<hr className='border-slate-500'/>:""}
            </>
            
          ))}
        </ul>
      </div>
   <div className="h-screen">
       <ReportsSubSideBar display={subMenuOpen}/>
      </div> 
    </div>
  );
}

export default SideBar