import React from 'react'
import Image from 'next/image';
import Christopher from '@/public/christopher.jpg'
import IandooleyGirl from '@/public/Iandooley.jpg'
import IandooleyBoy from '@/public/Iandooley2.jpg'
import ManTailor from '@/public/photo.jpg'

function PagesDropDownMenu() {
  return (
    <div className="w-full h-auto z-30 hidden lg:flex py-10 px-10 bg-white absolute top-32 shadow-xl">
      <div className="w-1/4 flex flex-col gap-4 px-3">
        <div>
          <Image
            className="object-cover h-full w-full"
            src={Christopher}
            width={100}
            alt=''
          />
        </div>

        <ul>
          <li className="text-black py-2 text-base font-bold">Home Page</li>
          <li>
            <CustomReuseListStyle text={"Home 1- Fashion"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Home 2 - Fashion"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Home 3 - Design"} New={true} />
          </li>
          <li>
            <CustomReuseListStyle text={"Home 4 - Design"} New={true} />
          </li>
        </ul>

        <ul>
          <li className="text-black py-2 text-base font-semibold">
            Categories
          </li>
          <li>
            <CustomReuseListStyle text={"Full width"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Full width with category menu"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Full width with big products"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Fixed width"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Fixed width & sidebar"} />
          </li>
          <li>
            <CustomReuseListStyle
              text={"Fixed width & mansory layout"}
              New={true}
            />
          </li>
          <li>
            <CustomReuseListStyle text={"Subcategories"} />
          </li>
        </ul>
      </div>
      {/*---second--*/}
      <div className="w-1/4 flex flex-col gap-4 px-3">
        <div>
          <Image
            className="object-cover h-full w-full"
            src={IandooleyGirl}
            width={100}
            alt=''
          />
        </div>

        <ul>
          <li className="text-black py-2 text-base font-bold">Order process</li>
          <li>
            <CustomReuseListStyle text={"Shopping cart"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Checkout - Five steps"} New={true} />
          </li>
          <li>
            <CustomReuseListStyle text={"Checkout - Single-page"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Checkout - confirmed"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Wishlist"} />
          </li>
        </ul>

        <ul>
          <li className="text-black py-2 text-base font-semibold">Product</li>
          <li>
            <CustomReuseListStyle text={"Product with sticky info"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Product with background"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Product standard"} />
          </li>
        </ul>
      </div>
      {/*---Third---*/}
      <div className="w-1/4 flex flex-col gap-4 px-3">
        <div>
          <Image
            className="object-cover h-full w-full"
            src={IandooleyBoy}
            width={100}
            alt=''
          />
        </div>

        <ul>
          <li className="text-black py-2 text-base font-bold">Blog</li>
          <li>
            <CustomReuseListStyle text={"Blog"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Blog - Masonry"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Post"} New={true} />
          </li>
        </ul>

        <ul>
          <li className="text-black py-2 text-base font-semibold">Pages</li>
          <li>
            <CustomReuseListStyle text={"About - Company"} New={true} />
          </li>
          <li>
            <CustomReuseListStyle text={"About v.2 - Person"} New={true} />
          </li>
          <li>
            <CustomReuseListStyle text={"F.A.Q"} New={true} />
          </li>
          <li>
            <CustomReuseListStyle text={"Contact"} />
          </li>
          <li>
            <CustomReuseListStyle text={"Privacy policy"} New={true} />
          </li>
        </ul>
      </div>
      {/*--Forth--*/}
      <div className="w-1/4 flex flex-col gap-4 px-3">
        <div>
          <Image
            className="object-cover h-full w-full"
            src={ManTailor}
            width={100}
            alt=''
          />
        </div>

        <ul>
          <li className="text-black py-2 text-base font-bold">Customer</li>
          <li>
            <CustomReuseListStyle text={"Login/sign up"} New={true} />
          </li>
          <li>
            <CustomReuseListStyle text={"Orders"} New={true} />
          </li>
          <li>
            <CustomReuseListStyle text={"Order detail"} New={true} />
          </li>
          <li>
            <CustomReuseListStyle text={"Order tracking"} New={true} />
          </li>
          <li>
            <CustomReuseListStyle text={"Addresses"} New={true} />
          </li>
          <li>
            <CustomReuseListStyle text={"Profile"} New={true} />
          </li>
          <li>
            <CustomReuseListStyle text={"Wishlist"} New={true} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PagesDropDownMenu
function CustomReuseListStyle({text,New}) {
    return (
      <p className="text-gray-400 font-semibold text-xs py-0.5">
        {text}
        {New ? (
          <span className="bg-[#f5f3ea] ml-1 p-0.5 px-1 rounded-md text-[#bcac76]  text-xs">
            New
          </span>
        ) : null}
      </p>
    );
}
