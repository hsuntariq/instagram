import React, { useState } from "react";
import { lastSidebarItems, sidebarData } from "../../data/sidebar-data";
import { useGlobal } from "../../context/Context";

const Sidebar = () => {
  const [selected, setSelected] = useState("Welcome");

  const { setShowPostModal } = useGlobal();

  return (
    <>
      <div className="flex p-5 min-h-screen group flex-col justify-between relative">
        <div className="">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/986/885/small/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png"
            className="w-10 h-10"
            alt=""
          />
        </div>
        <ul className="unstyled  flex flex-col gap-4">
          {sidebarData.map((item, index) => {
            return (
              <li
                onClick={() => {
                  setSelected(item.text);
                  setShowPostModal(true);
                }}
                key={index}
                className="flex py-3 rounded-md cursor-pointer hover:bg-gray-200 w-1/2 gap-2 items-center"
              >
                {selected == item.text ? (
                  <>
                    {item.activeIcon}
                    <span className="font-semibold group-hover:translate-x-0  group-hover:opacity-100  transition-all duration-300 -translate-x-full opacity-0">
                      {item.text}
                    </span>
                  </>
                ) : (
                  <>
                    {item.icon}
                    <span className="-translate-x-full group-hover:translate-x-0  group-hover:opacity-100  transition-all duration-300 -translate-x-full opacity-0 ">
                      {item.text}
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <ul className="unstyled  flex flex-col gap-4">
          {lastSidebarItems.map((item, index) => {
            return (
              <li key={index} className="flex gap-2 items-center">
                {item.icon}
                <span className="-translate-x-full group-hover:translate-x-0  group-hover:opacity-100 transition-all duration-300 -translate-x-full opacity-0">
                  {item.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
