import React from 'react'
import Image from 'next/image'
import Mencategory  from '@/public/category-men.jpg'
import Womencategory from '@/public/category-women.jpg'


function Secondsection() {
  return (
    <div className="w-full py-24 px-3 text-center flex bsm:grid flex-wrap bsm:grid-cols-2  lg:w-full xl:px-16 xl:py-48  xl:w-full xl:justify-center">
      <div className="w-fit mb-[3rem] rounded-lg overflow-hidden bsm:px-3 lg:w-full">
        <Image
          src={Womencategory}
          width={400}
          alt="Category"
          className="object-cover w-full h-auto"
        />
        <div className='relative text-center bottom-[50%] text-5xl font-semibold text-white'>Women</div>
      </div>
      <div className="w-fit mb-[3rem] rounded-lg overflow-hidden bsm:px-3 lg:w-full ">
        <Image
          src={Mencategory}
          width={400}
          alt="Category"
          className="object-cover w-full h-auto"
        />
        <div className='relative text-center bottom-[50%] text-5xl font-semibold text-white'>Men</div>
      </div>
    </div>
  );
}

export default Secondsection