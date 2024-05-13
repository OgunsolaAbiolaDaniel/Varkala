import React from 'react'
import Image from 'next/image'
import Girlimg from '@/public/loftus.jpg'

function ShopDropDownMenu() {
  return (
    <div className="w-3/5 flex bg-white absolute top-32 left-[19%] shadow-xl  ">
      <div className="p-8 basis-1/3">
        <ul className="text-gray-400 font-semibold text-xs">
          <li className="text-black py-2 font-semibold">Shop Pages</li>
          <li className="py-1.5">Full Width</li>
          <li className="py-1.5">Full width with category menu</li>
          <li className="py-1.5">Full Category with big Products</li>
          <li className="py-1.5">Fixed Width</li>
          <li className="py-1.5">Fixed Width & Sidebar</li>
          <li className="py-1.5">
            Fixed width & Mansory Layout
            <span className="bg-[#f5f3ea] ml-1 p-0.5 px-1 rounded-md text-[#bcac76]  text-xs">
              New
            </span>
          </li>
          <li className="py-1.5">Subcategories</li>
        </ul>
      </div>

      <div className="p-8 basis-1/3">
        <ul className="text-gray-400 font-semibold text-xs">
          <li className="text-black py-2 font-semibold">Product Pages</li>
          <li className="py-1.5">Product with Stick Info</li>
          <li className="py-1.5">Product with Background</li>
          <li className="py-1.5">Product Standard</li>
        </ul>
      </div>

      <div className="basis-1/3">
        <Image
          className="object-cover  h-full w-full"
          src={Girlimg}
          width={700}
        />
      </div>
    </div>
  );
}

export default ShopDropDownMenu