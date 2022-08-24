import React,{useState} from "react";
import { FaHourglassStart } from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineUserAdd, AiOutlineSetting } from "react-icons/ai";
import { RiRefreshLine } from "react-icons/ri";
import Calendar from 'react-calendar';
import TimerComp from "./TimerComp";
const MainContent = () => {
    const [value, onChange] = useState(new Date());
  return (
    <div className="w-full">
      {/* subscribe part */}
      <div className=" flex justify-center items-center gap-2 p-2 bg-[#F8F8F8] border-y-2 border-gray-300">
        <FaHourglassStart className="text-xl text-zinc-600" />{" "}
        <span className="font-bold  text-zinc-600">13 Days</span>{" "}
        <span>left in Your Free Trial</span>
        <button className="bg-orange-500  pl-2 pr-2 pt-1 pb-1 text-white p-1 rounded-md">
          Subscribe to Pro
        </button>
        <button className=" border-2 pl-2 pr-2 pt-1 pb-1 rounded-md">
          Book a Demo
        </button>
      </div>
      {/* //Timesheet part */}

      <div className="  flex justify-between items-center gap-2 text-2xl border-b-2 p-3 border-gray-300">
        <p>Timesheet</p>

        <div className="flex justify-center gap-4 items-center ">
          <AiOutlineSetting />
          <BsQuestionCircle />
          <AiOutlineUserAdd />
          <img
            src={"https://via.placeholder.com/40"}
            className={`rounded-full `}
            alt="profile"
          />
        </div>
      </div>
      {/* bulk edit part */}
      <div className="  flex justify-between items-center gap-2 text-2xl  p-3 ">
        <div class="grid grid-cols-3 divide-x  border-2 p-2 rounded-lg">
          <div>
            <MdExpandLess className="-rotate-90 cursor-pointer " />
          </div>
          <div className="flex">
            <GoCalendar />
            <Calendar onChange={onChange} value={value} />
            <MdExpandLess className="rotate-180" />
          </div>
          <div>
            <MdExpandLess className="rotate-90 cursor-pointer" />
          </div>
        </div>

        <div class=" flex   items-center gap-3 text-[20px] text-slate-500 hover:text-slate-800  duration-300 p-2 rounded-lg">
          <div className="cursor-pointer flex  justify-center  pl-2 pr-2 border-2 rounded-lg  p-1">
            <p className="border-r-2 pl-2 pr-2">Day</p>
            <p className="pl-2 pr-2">Calendar</p>
          </div>
          <div className="cursor-pointer flex  justify-center  pl-2 pr-2 border-2 rounded-lg  p-1">
           
              <RiRefreshLine />
          
          </div>
          <div>
            <button className="cursor-pointer flex  justify-center  pl-2 pr-2 border-2 rounded-lg  p-1">Bulk Edit</button>

          </div>
        </div>
      </div>
      <TimerComp/>
    </div>
  );
};

export default MainContent;
