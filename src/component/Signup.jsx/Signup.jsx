import React from 'react'
import { CiUser } from "react-icons/ci";

function Signup() {
  return (
    <section className="flex-col flex w-full gap-3">
      <div className="text-gray-500 px-1">
        <p className="text-sm px-1">
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment.His many legs, pit.
        </p>
      </div>
      <div className="flex-col flex gap-3 text-gray-700 w-full">
        <div className="flex-col flex gap-1 text-base font-medium">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="Name field"
            id=""
            placeholder="Jackson smith"
            className="py-2 placeholder:text-sm outline-1 placeholder:text-gray-400 font-light text-sm px-2  bg-transparent border border-gray-400"
          />
        </div>
        <div className="flex-col flex gap-1 text-base font-medium">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email field"
            id=""
            placeholder="example@123.com"
            className="py-2 placeholder:text-sm outline-1 placeholder:text-gray-400 font-light text-sm px-2 bg-transparent border border-gray-400"
          />
        </div>
        <div className="flex-col flex gap-1 text-base font-medium">
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            name="Password field"
            id=""
            placeholder="8-10 characters"
            className="py-2 placeholder:text-sm outline-1 text-sm placeholder:text-gray-400 px-2 font-light bg-transparent border border-gray-400"
          />
        </div>
        <button
          type="submit"
          className=" hover:bg-gray-700 hover:text-white flex gap-1 hover:border-none items-center text-sm justify-center px-3 py-2 border"
        >
          <CiUser className="text-base font-medium" />
          <p className="font-medium">REGISTER</p>
        </button>
      </div>
    </section>
  );
}

export default Signup