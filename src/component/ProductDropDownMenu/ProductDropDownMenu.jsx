import React from 'react'
import Image from "next/image";
import Girlimg from "@/public/loftus.jpg";

function ProductDropDownMenu() {
  return (
    <div className="hidden lg:flex w-3/6  z-30 bg-white absolute top-36 left-[23%] shadow-xl">
      <div className="px-8 py-10 basis-1/3">
        <ul className="text-gray-400 font-semibold text-xs">
          <li className="text-black py-2 font-semibold">Shop Cards</li>
          <li className="py-2">Default</li>
          <li className="py-2">Product Card 1</li>
          <li className="py-2">Product Card 2</li>
          <li className="py-2">Product Card 3</li>
        </ul>
      </div>

      <div className="px-8 py-10 basis-1/3">
        <ul className="text-gray-400 font-semibold text-xs">
          <li className="py-3"> </li>
          <li className="py-2 font-semibold">Product Card 4 </li>
          <li className="py-2">Product Card 5</li>
          <li className="py-2">Product Card 6</li>
          <li className="py-2">Product Card 7</li>
        </ul>
      </div>

      <div className="basis-1/3">
        <Image
          className="object-cover h-full w-full"
          src={Girlimg}
          width={700}
          alt=''
        />
      </div>
    </div>
  );
}

export default ProductDropDownMenu