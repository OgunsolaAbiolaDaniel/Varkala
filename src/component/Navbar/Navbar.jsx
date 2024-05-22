'use client'
import React from 'react'
import { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import ProfileStatus from '../Profile/ProfileStatus';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import Menubar from '@/component/Menubar/Menubar';
import Homedropdowndiv from '../HomeDropdownDiv/Homedropdowndiv';
import ShopDropDownMenu from '../ShopDropDownMenu/ShopDropDownMenu';
import ProductDropDownMenu from '../ProductDropDownMenu/ProductDropDownMenu';
import IconDropDownMenu from '../IconDropDownMenu/IconDropDownMenu';
import PagesDropDownMenu from '../PagesDropDownMenu/PagesDropDownMenu';
import DocsDropDownMenu from '../DocsDropDownMenu/DocsDropDownMenu';


function Navbar() {
    const [userprofile, setUserProfile] = useState(false);
  const [shoppingBag, setShoppingBag] = useState(false);
  const [showmenubar, setshowmenubar] = useState(false);
  const [homedropmenu, setHomedropMenu] = useState(false);
  const [showShopdropmenu, setShowShopdropmenu] = useState(false);
  const [showProductDropDownenu, setShowProductDropDownenu] = useState(false);
  const [showIconDropDownMenu, setShowIconDropDown] = useState(false);
  const [showPageDropDownMenu, setShowPageDropDownMenu] = useState(false);
  const [showDocsDropDownMenu, setShowDocsDropDownMenu] = useState(false);
    function openUserProfileDiv() {
      setUserProfile(true)
      setShoppingBag(false);
      setshowmenubar(false);
      setHomedropMenu(false);
      setShowProductDropDownenu(false);
      setShowShopdropmenu(false);
      setShowIconDropDown(false);
      setShowPageDropDownMenu(false);
      setShowDocsDropDownMenu(false);
    }
    function closeUserProfile() {
        setUserProfile(false);
    }
  function openShoppingBag() {
    setShoppingBag(true)
    setUserProfile(false);
    setshowmenubar(false);
     setHomedropMenu(false);
    setShowProductDropDownenu(false);
    setShowShopdropmenu(false);
     setShowIconDropDown(false);
     setShowPageDropDownMenu(false);
     setShowDocsDropDownMenu(false);
  }
  function closeShoppingBag() {
    setShoppingBag(false)
  }
  {
    /*
    setUserProfile(false);
    setShoppingBag(false);
    setshowmenubar(false);

*/
  }
  function togglemenubar() {
    setshowmenubar(!showmenubar)
    setUserProfile(false);
    setShoppingBag(false);
    setHomedropMenu(false);
    setShowProductDropDownenu(false);
    setShowShopdropmenu(false);
    setShowIconDropDown(false);
    setShowPageDropDownMenu(false);
    setShowDocsDropDownMenu(false);
  }
  {/*----lg Screen-----*/}
  function togglehomedropmenu() {
    setHomedropMenu(!homedropmenu)
    setShowShopdropmenu(false);
    setShowProductDropDownenu(false);
    setShowIconDropDown(false);
    setShowPageDropDownMenu(false);
    setShowDocsDropDownMenu(false);
    setUserProfile(false);
    setShoppingBag(false);
    setshowmenubar(false);
  }
  function toggleShopdropmenu() {
    setShowShopdropmenu(!showShopdropmenu);
    setHomedropMenu(false);
    setShowProductDropDownenu(false);
    setShowIconDropDown(false);
    setShowPageDropDownMenu(false);
    setShowDocsDropDownMenu(false);
    setUserProfile(false);
    setShoppingBag(false);
    setshowmenubar(false);
  }
  function toggleProductDropDownenu() {
    setShowProductDropDownenu(!showProductDropDownenu);
    setHomedropMenu(false);
    setShowShopdropmenu(false);
    setShowIconDropDown(false);
    setShowPageDropDownMenu(false);
    setShowDocsDropDownMenu(false);
    setUserProfile(false);
    setShoppingBag(false);
    setshowmenubar(false);
  }
  function toggleIconDropDownMenu() {
    setShowIconDropDown(!showIconDropDownMenu);
    setHomedropMenu(false);
    setShowShopdropmenu(false);
    setShowProductDropDownenu(false);
    setShowPageDropDownMenu(false);
    setShowDocsDropDownMenu(false);
    setUserProfile(false);
    setShoppingBag(false);
    setshowmenubar(false);
  }
  function toggleshowPageDropDownMenu() {
    setShowPageDropDownMenu(!showPageDropDownMenu);
    setHomedropMenu(false);
    setShowShopdropmenu(false);
    setShowProductDropDownenu(false);
    setShowIconDropDown(false);
    setShowDocsDropDownMenu(false);
    setUserProfile(false);
    setShoppingBag(false);
    setshowmenubar(false);
  }
  function toggleshowDocsDropDownMenu() {
    setShowDocsDropDownMenu(!showDocsDropDownMenu);
    setHomedropMenu(false);
    setShowShopdropmenu(false);
    setShowPageDropDownMenu(false);
    setShowIconDropDown(false);
    setShowProductDropDownenu(false);
    setUserProfile(false);
    setShoppingBag(false);
    setshowmenubar(false);
  }
 

  return (
    <div className="flex-col">
      <nav className="flex items-center px-2 mt-5 mb-0 py-3 bg-transparent justify-between lg:px-8">
        {/*----Barnd logo----*/}
        <div className="flex">
          <h3 className="text-black font-semibold text-sm lg:text-base">
            Varkala
          </h3>
        </div>
        {/*----Large screen Menu--*/}
        <div className="hidden lg:flex gap-5 lg:py-2">
          <ul className="list-none m-0 p-0 items-center flex gap-2 lg:text-base lg:font-medium">
            <li onClick={togglehomedropmenu}>
              <Listnav text={"Home"} />
            </li>
            <li onClick={toggleShopdropmenu}>
              <Listnav text={"Shop"} />
            </li>
            <li onClick={toggleProductDropDownenu}>
              <Listnav text={"Product Cards"} />
            </li>
            <li onClick={toggleIconDropDownMenu}>
              <Listnav text={"Icons"} />
            </li>
            <li onClick={toggleshowPageDropDownMenu}>
              <Listnav text={"Pages"} />
            </li>
            <li onClick={toggleshowDocsDropDownMenu}>
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
        {/*-----smscreen-------*/}
        {/*-----Middle Icons-----*/}
        <div className="flex gap-2 justify-around text-xl lg:hidden">
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
          <button
            type="button"
            className="bg-transparent border-none p-2"
            onClick={openShoppingBag}
          >
            <FiShoppingBag />
          </button>
        </div>
        {/*----Menubar---*/}
        <div className="flex text-xl lg:hidden">
          <button
            type="button"
            className="bg-transparent border-none p-2"
            onClick={togglemenubar}
          >
            <RiMenu3Line />
          </button>
        </div>
        {/*----lgscreen-----*/}
        <div className="hidden lg:flex gap-2 justify-around text-xl lg:flex-shrink-2 lg:py-2">
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
          <button
            type="button"
            className="bg-transparent border-none p-2"
            onClick={openShoppingBag}
          >
            <FiShoppingBag />
          </button>
          <button
            type="button"
            className="bg-transparent border-none p-2"
            onClick={togglemenubar}
          >
            <RiMenu3Line />
          </button>
        </div>
      </nav>
      {showmenubar ? <Menubar onClose={togglemenubar} /> : null}
      {/*---Side Dropdown Bar----*/}
      {userprofile ? <ProfileStatus onClose={closeUserProfile} /> : null}
      {shoppingBag ? <ShoppingBag onClose={closeShoppingBag} /> : null}
      {/*-----lg Screen Drop downs-----*/}
      {homedropmenu ? <Homedropdowndiv /> : null}
      {showShopdropmenu ? <ShopDropDownMenu /> : null}
      {showProductDropDownenu ? <ProductDropDownMenu /> : null}
      {showIconDropDownMenu ? <IconDropDownMenu /> : null}
      {showPageDropDownMenu ? <PagesDropDownMenu /> : null}
      {showDocsDropDownMenu ? <DocsDropDownMenu /> : null}
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
