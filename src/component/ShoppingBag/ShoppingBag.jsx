import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import ShopItem from "@/component/ShoppingItem/ShoppingItem";
function ShoppingBag({ onClose }) {
  return (
    <div className="bg-white z-10 m-0 mt-0 h-100vh flex flex-col gap-8 justify-around absolute shadow-[0_35px_60px_5000px_rgba(0,0,0,0.3)] px-8 py-14 top-0 right-0 left-0 md:h-auto md:mx-16 lg:w-[50%] lg:ml-[50%] ">
      <header className="">
        <button
          type="button"
          title="Closemodalbutton"
          className="bg-transparent p-2 text-2xl absolute right-7 top-6"
          onClick={onClose}
        >
          <IoCloseOutline />
        </button>
      </header>

      <div className="flex h-[50vh] flex-col gap-8 px-2 item-center py-10 shadow-inner overflow-y-scroll">
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>

      <div className="flex flex-col gap-4 items-center w-full">
        <p className="font-semibold text-lg w-full">Subtotal: $465.32</p>
        <button
          type="button"
          title="View Cart"
          className="py-2 text-sm font-semibold w-full bg-gray-700 text-white hover:bg-white hover:border hover:text-gray-700"
        >
          VIEW CART
        </button>
        <button
          type="button"
          title="View Cart"
          className="py-2 text-sm font-semibold w-full border hover:bg-gray-700 hover:text-white"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default ShoppingBag;
