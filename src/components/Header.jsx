import React from "react";
import {IoIosNotifications} from 'react-icons/io'
const Header = () => {
  return (
    <div className=" bg-white w-full py-4 ">
      <div className="w-[95%] mx-auto flex justify-between">
        <h1>Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <span className="bg-red-600 w-2 h-2 rounded-full absolute top-0 right-0 p-[1px]"></span>
            <IoIosNotifications size={20} className="text-gray-700"/>
          </div>
          <img className="w-8 h-8 rounded-full cursor-pointer" src="https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
