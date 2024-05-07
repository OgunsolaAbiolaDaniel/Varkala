'use client'
import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import Signup from '../Signup.jsx/Signup';
import SignIn from '../SignIn/SignIn';

function ProfileStatus({onClose}) {
    const [display, setDisplay] = useState(false);
    function loginDispForm() {
        setDisplay(false)
    }
    function RegisterDispForm() {
      setDisplay(true);
    }
   
        
  return (
    <div className="bg-white z-10 m-3 mt-2 h-auto flex flex-col gap-5 justify-around absolute shadow-2xl p-12 top-4 right-1 left-1">
      <div>
        <button
          className="bg-transparent p-2 text-2xl absolute right-7 top-6"
          type="button"
          onClick={onClose}
        >
          <IoMdClose />
        </button>
        <div className="w-fit text-2xl flex-wrap flex gap-5 font-semibold">
          <p
            className="active:text-yellow-500 hover:text-yellow-500 p-1"
            onClick={loginDispForm}
          >
            Login
          </p>
          <p
            className="active:text-yellow-500 hover:text-yellow-500 p-1 text-gray-500"
            onClick={RegisterDispForm}
          >
            Register
          </p>
        </div>
      </div>

      <hr className="border-b-[1px] border-gray-500" />
      <div className="flex-col">
        {display ? <Signup /> : <SignIn />}
        <div className="flex gap-1 text-xs">
          <hr className="border-b-[1px] border-gray-500 mb-2 mt-2 w-[50%]" />
          <p>or</p>
          <hr className="border-b-[1px] border-gray-500 mb-2 mt-2 w-[50%]" />
        </div>
        <div className="flex gap-2 py-2 items-center justify-around">
          <button
            type="button"
            title="Facebook Button"
            className=" text-xl border p-2"
          >
            <FaFacebookF className="" />
          </button>
          <button
            type="button"
            title="Google Button"
            className="text-xl border p-2"
          >
            <FcGoogle className="" />
          </button>
          <button
            type="button"
            title="Twitter Button"
            className="text-xl border p-2"
          >
            <FaXTwitter className="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileStatus



/*
"use client";
import React from "react";
import Signup from "./Signup/Signup";
import SignIn from "./SignIn/SignIn";
import classes from "./profilelogin.module.css";

/*
function Profilelogin({ onClose }) {
  const [witch, setwitch] = useState(false);
  function changeloginstatustrue() {
    setwitch(false);
  }
  function changeloginstatusfalse() {
    setwitch(true);
  }

  return (
    <div className={classes.profilediv}>
      <header className={classes.header}>
        <button
          type="button"
          title="Closemodalbutton"
          className={classes.cancelbtn}
          onClick={onClose}
        >
          <IoCloseOutline className={classes.closebtnicon} />
        </button>
      </header>
      <nav className={classes.navbar}>
        <div onClick={changeloginstatustrue}>Login</div>
        <div onClick={changeloginstatusfalse}>Register</div>
      </nav>
      <hr className={classes.rule} />
      <div>{witch ? <Signup /> : <SignIn />}</div>
      <hr className={classes.rule} />
      <div className={classes.socials}>
        <button type="button" title="Facebook Button" className={classes.fbbtn}>
          <FaFacebookF className={classes.fbicon} />
        </button>
        <button
          type="button"
          title="Google Button"
          className={classes.googlebtn}
        >
          <FcGoogle className={classes.googleicon} />
        </button>
        <button type="button" title="Twitter Button" className={classes.xbtn}>
          <FaXTwitter className={classes.xicon} />
        </button>
      </div>
    </div>
  );
}*/