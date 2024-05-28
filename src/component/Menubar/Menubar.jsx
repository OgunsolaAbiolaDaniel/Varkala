'use client'
import React from 'react'
import { RxCaretDown } from 'react-icons/rx';
import { CiSearch } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { AiFillCaretDown } from "react-icons/ai";



function Menubar({ onClose }) {
  
  return (
    <>
      <div className="bg-white shadow-2xl px-4 gap-5 flex py-6 flex-col mx-0 justify-center lg:hidden">
        <ul className="flex flex-col gap-5 list-none">
          <li>
            <Barlist title={"Home"} />
             
          </li>
          <li>
            <Barlist title={"Shop"} />
          </li>
          <li>
            <Barlist title={"Products"} />
          </li>
          <li>
            <Barlist title={"Icons"} />
          </li>
          <li>
            <Barlist title={"Pages"} />
          </li>
          <li>
            <Barlist title={"Docs"} />
          </li>
        </ul>

        <div className="flex items-center w-full self-center text-sm">
          <input
            type="search"
            name="Search Bar"
            id=""
            placeholder="Search"
            className="border-solid w-full outline-none border-b-[1px] bg-transparent placeholder:text-gray-400 border-black px-2 py-1"
          />
          <button
            type="submit"
            className="bg-transparent border-none text-lg p-2 bottom-1 relative right-6"
          >
            <CiSearch />
          </button>
        </div>
      </div>

      <div className="hidden bg-white z-10 m-0 mt-0 h-100vh lg:flex flex-col gap-8 justify-around absolute shadow-[0_35px_60px_5000px_rgba(0,0,0,0.3)] px-8 py-10 top-0 right-0 left-0 md:h-auto md:mx-16 lg:w-[50%] lg:ml-[50%] ">
        <header className="">
          <button
            type="button"
            title="Closemodalbutton"
            className="bg-transparent p-2 text-4xl text-gray-400 self-baseline relative left-[90%]"
            onClick={onClose}
          >
            <IoCloseOutline />
          </button>
        </header>
        <div className="px-12  pb-20 flex justify-center items-center">
          <div className="flex flex-col gap-10">
            <p className="text-xl text-black font-bold">Varkala</p>

            <ul className="list-none text-gray-400 text-base font-semibold">
              <li className="py-2">Home</li>
              <li className="py-2">Link</li>
              <li className="py-2">Disabled</li>
              <li className="py-2 flex gap-2 items-center">
                Dropdown link <AiFillCaretDown />{" "}
              </li>
            </ul>

            <div className="flex flex-col gap-8">
              <div className="flex gap-4 items-center text-base font-semibold text-black">
                <div className="flex items-center gap-2 text-xl font-medium">
                  <FaFacebookF />
                  <BsTwitterX />
                </div>

                <div className="flex items-center gap-2">
                  <FiPhoneCall />
                  <p>+1-409-666-2781</p>
                </div>
              </div>

              <div className="text-base text-gray-400 font-normal">
                <p>
                  Samsa was a travelling salesman - and above it there hung a
                  picture that he had recently cut out of an illustrated
                  magazine and housed in a nice, gilded frame.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menubar
 
export function Barlist({ title,onClick }) {
  return (
    <>
      <div className="flex justify-between items-center text-sm font-semibold" onClick={onClick}>
        <p>{title}</p>
        <RxCaretDown />
      </div>
    </>
  );
}