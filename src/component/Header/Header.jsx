"use client";
import { useState } from "react";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RxCaretDown } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";

export default function Header() {
  const [showlangopt, setShowlangopt] = useState(false);
  const [showCurrOpt, setShowCurrOpt] = useState(false);

  function langtogglemenu() {
    setShowlangopt(!showlangopt);
    setShowCurrOpt(false);
  }
  function currtogglemenu() {
    setShowCurrOpt(!showCurrOpt);
    setShowlangopt(false);
  }

  return (
    <div className="bg-transparent m-0 w-[100%] text-slate-700">
      <div className="flex  items-center justify-between px-2">
        {/*-----Lg screen top-------*/}
        <div className="hidden md:flex gap-4 items-center text-sm">
          <div className="flex items-center gap-2">
            <FaFacebookF />
            <BsTwitterX />
          </div>

          <div className="flex items-center gap-1">
            <FiPhoneCall />
            <p>+1-409-666-2781</p>
          </div>
        </div>

        {/*-----Small screed top--------*/}
        <div className="text-sm text-slate-700 ml-2">
          Free in-store delivery
        </div>
        {/*-----md screen top (min-width-576px)-------*/}
        <div className="hidden bsm:flex text-sm gap-4">
          <div className="flex items-center gap-2">
            {/*---Language button---*/}
            <button
              className="bg-none flex items-center border-none gap-1"
              onClick={langtogglemenu}
            >
              <p>English</p>
              <RxCaretDown />
            </button>
          </div>
          {/*-----CURRENCY BUTTON--------*/}
          <div className="flex items-center gap-2">
            <button
              className="bg-none flex items-center border-none gap-1"
              onClick={currtogglemenu}
            >
              <p>NGN</p>
              <RxCaretDown />
            </button>
          </div>
        </div>
      </div>
      {showlangopt ? (
        <Optiondeck
          fopt={"German"}
          sopt={"French"}
          className={
            "bg-white text-slate-700 text-xs w-[100px] absolute right-20 top-8 rounded-sm"
          }
        />
      ) : null}
      {showCurrOpt ? (
        <Optiondeck
          fopt={"USD"}
          sopt={"EUR"}
          className={
            "bg-white text-slate-700 text-xs w-[100px]  absolute right-2 top-8 rounded-sm"
          }
        />
      ) : null}
    </div>
  );
}

function Optiondeck({ fopt, sopt, className }) {
  return (
    <div className={className}>
      <ul className="list-none m-0">
        <li className="hover:bg-slate-400 hover:text-white py-2 px-3">
          {fopt}
        </li>
        <li className="hover:bg-slate-400 hover:text-white py-2 px-3">
          {sopt}
        </li>
      </ul>
    </div>
  );
}
