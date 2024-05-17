import React from 'react'

function Homedropdowndiv() {
  return (
    <div className="hidden lg:flex bg-white text-sm text-gray-400 py-1 absolute z-30 left-[12%] top-28 shadow-lg">
      <ul className="list-none font-medium w-full">
        <li className=" px-3 py-2">Home 1 - Fashion</li>
        <li className="px-3 py-2">Home 2- Fashion</li>
        <li className="px-3 py-2">
          Home 3 - Design
          <span className="bg-[#f5f3ea] ml-1 p-1 rounded-md text-[#bcac76] text-xs font-medium ">
            New
          </span>
        </li>
        <li className="px-3 py-2">
          Home 4 - Design
          <span className="bg-[#f5f3ea] ml-1 p-1 rounded-md text-[#bcac76] text-xs font-medium">
            New
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Homedropdowndiv