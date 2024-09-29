"use client";
import Image from "next/image";
import { createContext, useState } from "react";
import arrow from "../../frontend/app/assets/control.png";
import logo from "../../frontend/app/assets/logo.png";
import SidebarItem from "./SidebarItem";

export const SidebarContext = createContext<any>(false);

const Sidebar = ({ MENUS }: any) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20"
      } bg-purple-900 h-screen p-5  pt-8 relative duration-300 m-0`}
    >
      <Image
        alt="smtg1"
        src={arrow}
        className={`absolute cursor-pointer -right-3 top-9 w-7  border-purple-900
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex items-center gap-x-4">
        <Image
          alt="smtg2"
          src={logo}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Designer
        </h1>
      </div>
      <ul className="pt-6">
        {MENUS.map((Menu: any, index: any) => (
          <>
            <SidebarContext.Provider value={[open, setOpen]}>
              <SidebarItem Menu={Menu} index={index} />
            </SidebarContext.Provider>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
