import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const ReportsSubSideBar = ({ display }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Timesheet", src: "Chart" },
    { title: "Dashboard", src: "Chart_fill", gap: true },
    { title: "Inbox", src: "Chat" },
    { title: "Reports", src: "User", gap: true, sub: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div
      className={` ${
        !display && "hidden"
      } bg-white border-2 w-72 h-[100vw] p-5  shadow-2xl pt-8 absolute z-10 transition ease-out  delay-550 duration-700`}
    >
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <>
            <li
              key={index}
              className={`flex justify-between text-slate-700 rounded-md p-2 cursor-pointer hover:bg-light-white  text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9 " : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <div className="flex gap-3">
                <img src={`./src/assets/${Menu.src}.png`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </div>
              {Menu.sub ? (
                <AiOutlineRight
                  className={`${!open && "hidden"} origin-left duration-200`}
                />
              ) : (
                ""
              )}
            </li>
            {Menu.gap ? <hr className="border-slate-500" /> : ""}
          </>
        ))}
      </ul>
    </div>
  );
};
export default ReportsSubSideBar;
