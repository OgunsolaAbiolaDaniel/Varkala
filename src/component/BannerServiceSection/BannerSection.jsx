import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCoinsLine } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";

function BannerSection() {
  return (
    <section className="py-5 px-3 w-full bg-[#f8f9fa] flex flex-wrap">
      <div className="px-3  py-6 flex gap-5 justify-center w-full bsm:w-1/2  items-center">
        <div className="text-3xl text-[#495057] font-normal w-fit">
          <TbTruckDelivery />
        </div>
        <div className="flex flex-col gap-1 w-full text-sm">
          <p className="font-semibold">Free Shipping & return</p>
          <p className="font-light text-[#868E96]">Free shipping over 300$</p>
        </div>
      </div>
      <div className="px-3  py-6 flex gap-5 justify-center  w-full bsm:w-1/2  items-center">
        <div className="text-3xl text-[#495057] font-normal w-fit">
          <RiCoinsLine />
        </div>
        <div className="flex flex-col gap-1 w-full text-sm">
          <p className="font-semibold">Money Back Guarantee</p>
          <p className="font-light text-[#868E96]">
            30 Days Money Back Guarantee
          </p>
        </div>
      </div>
      <div className="px-3 py-6 flex gap-5 justify-center  w-full bsm:w-1/2  items-center">
        <div className="text-3xl text-[#495057] font-normal w-fit">
          <CiDiscount1 />
        </div>
        <div className="flex flex-col gap-1 w-full text-sm">
          <p className="font-semibold">Best Prices</p>
          <p className="font-light text-[#868E96]">Always the best prices</p>
        </div>
      </div>
      <div className="px-3  py-6 flex gap-5 justify-center  w-full bsm:w-1/2  items-center">
        <div className="text-3xl text-[#495057] font-normal w-fit">
          <RiCustomerService2Fill />
        </div>
        <div className="flex flex-col gap-1 w-full text-sm">
          <p className="font-semibold">020-200-800</p>
          <p className="font-light text-[#868E96]">24/7 Available Support</p>
        </div>
      </div>
    </section>
  );
}

export default BannerSection