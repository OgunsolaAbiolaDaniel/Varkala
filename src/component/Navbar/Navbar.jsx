'use client'
import React from 'react'
import { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import Home from '@/app/page';
import ProfileStatus from '../Profile/ProfileStatus';


function Navbar() {
    const [userprofile, setUserProfile] = useState(false);


    function openUserProfileDiv() {
        setUserProfile(true)
    }
    function closeUserProfile() {
        setUserProfile(false);
    }



  return (
    <div>
      <nav className="flex items-center px-2 my-5 py-2 bg-slate-400 justify-between">
        {/*----Barnd logo----*/}
        <div className="flex">
          <h3 className="text-black font-semibold text-sm">Varkala</h3>
        </div>
        {/*----Large screen Menu--*/}
        <div className="hidden lg:flex gap-5">
          <ul className="list-none m-0 p-0 items-center flex gap-2">
            <li>
              <Listnav text={"Home"} />
            </li>
            <li>
              <Listnav text={"Shop"} />
            </li>
            <li>
              <Listnav text={"Product Cards"} />
            </li>
            <li>
              <Listnav text={"Icons"} />
            </li>
            <li>
              <Listnav text={"Pages"} />
            </li>
            <li>
              <Listnav text={"Docs"} />
            </li>
          </ul>
          <div className="flex items-center text-sm">
            <input
              type="search"
              name="Search Bar"
              id=""
              placeholder="Search"
              className="border-solid outline-none border-b-[1px] bg-transparent placeholder:text-gray-400 border-black px-2 py-1"
            />
            <button
              type="submit"
              className="bg-transparent border-none text-lg p-2 relative right-6"
            >
              <CiSearch />
            </button>
          </div>
        </div>
        {/*-----Middle Icons-----*/}
        <div className="flex gap-2 justify-around text-xl">
          <button
            type="button"
            className="bg-transparent border-none p-2"
            onClick={openUserProfileDiv}
          >
            <CiUser />
          </button>
          <button type="button" className="bg-transparent border-none p-2">
            <CiHeart />
          </button>
          <button type="button" className="bg-transparent border-none p-2">
            <FiShoppingBag />
          </button>
        </div>
        {/*----Menubar---*/}
        <div className="flex text-xl">
          <button type="button" className="bg-transparent border-none p-2">
            <RiMenu3Line />
          </button>
        </div>
      </nav>
      {userprofile ? <ProfileStatus onClose={closeUserProfile} /> : null}
    </div>
  );
}

export default Navbar


function Listnav({text}) {
    return (
        <div className='flex gap-1 text-sm items-center text-gray-500'>
            <p>{text}</p>
             <RxCaretDown />
        </div>
    )
}