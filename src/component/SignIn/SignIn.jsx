import React from 'react'

function SignIn() {
  return (
    <section className="flex-col flex w-full gap-3">
      <div className="flex-col flex gap-3 text-gray-700 w-full">
        <div className="flex-col flex gap-1 text-base font-semibold">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email field"
            id=""
            placeholder="example@123.com"
            className="py-2 placeholder:text-sm outline-1 placeholder:text-gray-400 font-light text-sm px-2 bg-transparent border border-gray-400"
          />
        </div>
        <div className="flex-col flex gap-1 text-base font-semibold">
          <label htmlFor="Email">Password</label>
          <input
            type="Password"
            name="Password field"
            id=""
            placeholder="********"
            className="py-2 placeholder:text-sm text-sm outline-1 placeholder:text-gray-400 px-2 font-light bg-transparent border border-gray-400"
          />
        </div>
        <button
          type="submit"
          className=" hover:bg-gray-700 hover:text-white font-semibold flex gap-1 items-center justify-center px-3 py-2 border"
        >
          Login
        </button>
      </div>
    </section>
  );
}

export default SignIn