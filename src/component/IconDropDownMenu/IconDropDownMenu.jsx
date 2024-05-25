import React from 'react'
import { GiTrousers } from "react-icons/gi";
import { GiMonclerJacket } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { PiShirtFolded } from "react-icons/pi";
import { GiSleevelessJacket } from "react-icons/gi";
import { GiShorts } from "react-icons/gi";
import { GiUnderwearShorts } from "react-icons/gi";
import { GiWatch } from "react-icons/gi";
import { PiBaseballCapDuotone } from "react-icons/pi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { GiBowTie } from "react-icons/gi";
import { GiRolledCloth } from "react-icons/gi";

function IconDropDownMenu() {
  return (
    <div className="w-3/4 hidden lg:flex flex-col z-30 bg-white absolute top-36 left-[23%] shadow-xl">
      <div className="p-5 flex flex-col gap-10 basis-[80%]">
        <div className="flex">
          <IConInfo label={"Trouser"}>
            <GiTrousers />
          </IConInfo>
          <IConInfo label={"Jacket"}>
            <GiSleevelessJacket />
          </IConInfo>
          <IConInfo label={"T-Shirts"}>
            <FaTshirt />
          </IConInfo>
          <IConInfo label={"Shirts"}>
            <PiShirtFolded />
          </IConInfo>
          <IConInfo label={"Pullover"}>
            <GiMonclerJacket />
          </IConInfo>
          <IConInfo label={"Shorts"}>
            <GiShorts />
          </IConInfo>
        </div>

        <div className="flex">
          <IConInfo label={"Watches"}>
            <GiWatch />
          </IConInfo>
          <IConInfo label={"Underwear"}>
            <GiUnderwearShorts />
          </IConInfo>
          <IConInfo label={"Bags"}>
            <BiSolidShoppingBags />
          </IConInfo>
          <IConInfo label={"Caps"}>
            <PiBaseballCapDuotone />
          </IConInfo>
          <IConInfo label={"Scarfs"}>
            <GiRolledCloth />
          </IConInfo>
          <IConInfo label={"Accessories"}>
            <GiBowTie />
          </IConInfo>
        </div>
      </div>

      <div className="py-2 text-center basis-[10%] bg-[#bcac76] text-black text-sm">
        Don&apos;t miss our biggest sales this year. Use the code &quot; SUMMER35
        &quot; at checkout until Jun. 15!
      </div>
    </div>
  );
}

export default IconDropDownMenu

function IConInfo({label,children}) {
    return (
        <div className="px-2 pb-1 flex flex-col items-center basis-1/6" >
            <div className='font-bold text-slate-900 text-5xl'>{children}</div>
            <p className='text-black text-base font-bold'>{label}</p>
        </div>
    )
}