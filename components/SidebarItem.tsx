import Image from "next/image";

import Link from "next/link";
import { useContext, useState } from "react";
import { SidebarContext } from "./Sidebar";

const SidebarItem = ({ Menu, index }: any) => {
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const [open, setOpen] = useContext(SidebarContext);

  return (
    <>
      <li
        key={index}
        className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-white hover:text-black text-sm items-center gap-x-4 
               relative`}
        onClick={
          Menu.submenu
            ? () => setsubmenuOpen(!submenuOpen)
            : () => console.log("")
        }
      >
        <Image alt="smtg" src={Menu.src} />
        <span className={`${!open && "hidden"} origin-left duration-200 `}>
          {Menu.submenu ? (
            Menu.title
          ) : (
            <Link href={`${Menu.route}`}>{Menu.title}</Link>
          )}

          {Menu.submenu && (
            <i
              className={`
                      ${submenuOpen && "rotate-180"}
                     top-3 right-[2rem] absolute fa-angle-down fa-solid`}
              onClick={() => setsubmenuOpen(!submenuOpen)}
            ></i>
          )}
        </span>
      </li>
      {Menu.submenu && submenuOpen && (
        <ul className={`${!open && "hidden"} flex flex-col px-6`}>
          {Menu.submenu.map((data: any, index: any) => (
            <Link href={`${data.route}`}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-white hover:text-black text-sm items-center gap-x-4  `}
              >
                {data.title}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default SidebarItem;
