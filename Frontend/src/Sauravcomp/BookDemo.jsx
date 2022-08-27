import React, { useState } from "react";
import DatePicker from "sassy-datepicker";

const BookDemo = () => {
    const [Date, setDate] = useState("");
  const lists = [
    {
      title: "Product presentation",
      src: "https://cdn-m.timecamp.com/img/landing-page/product-presentation-icon.svg",
    },
    {
      title: "Free training",
      src: "https://cdn-m.timecamp.com/img/landing-page/free-training-icon.svg",
    },
    {
      title: "Help with set-up",
      src: "https://cdn-m.timecamp.com/img/landing-page/set-up-icon.svg",
    },
    {
      title: "Pricing/plans comparison",
      src: "https://cdn-m.timecamp.com/img/landing-page/pricing-icon.svg",
    },
    {
      title: "Q&A",
      src: "https://cdn-m.timecamp.com/img/landing-page/chat-icon.svg",
    },
  ];
  const onChange = (date) => {
    console.log(date);
    setDate(date.toString().split(" ").slice(0, 4).join(" ")) 
  };

  const calander = {
    days: ["MON", "TUES", "WED", "THUR", "FRI", "SAT", "SUN"],
    aus: Array.from({ length: 31 }, (_, i) => i + 1),
    sept: Array.from({ length: 30 }, (_, i) => i + 1),
    oct: Array.from({ length: 31 }, (_, i) => i + 1),
  };

  return (
    <div className="p-10 w-[100%]">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-1 ">
        <div className="w-[50vw] grid gap-4 grid-cols-1 p-5 ">
          <h1 className="text-5xl font-bold ml-8 ">
            Book a 1:1 TimeCamp presentation
          </h1>
          <h1 className="text-3xl font-bold ml-8 ">Demo Agenda</h1>
          {lists.map((list,i) => (
            <div className="flex gap-3" key={i}>
              <img src={list.src} alt={list.title} />
              <h2>{list.title}</h2>
            </div>
          ))}
          <p className="text-xl font-bold ml-8">
          {Date?`${Date}`:" Schedule a demo on the Calendar or" }
          
         
          </p>
       <div className="flex gap-2  items-center" >
          <button className="pl-8 pr-8 h-10  bg-green-600 w-1/3 ml-8 rounded-3xl text-white" onClick={()=>setDate("")}>
            { Date ?"Schedule Here":"Successful"}
          </button>
          {! Date && <img className="w-[15%] h-[100%] rounded-[50%]" src="https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif"/>} 
          
</div>
        </div>
        
        <div className="w-[40%  ] border-2 flex-col justify-center  rounded-3xl">
          <p className="text-xl font-bold text-center "> Select A day </p>

          <DatePicker
            className="w-[100%] h-[100%] border-0"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
