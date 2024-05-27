import React from 'react'
import Image from 'next/image'
import brand1 from '@/public/brand-1.svg'
import brand2 from '@/public/brand-2.svg'
import brand3 from '@/public/brand-3.svg'
import brand4 from '@/public/brand-4.svg'
import brand5 from '@/public/brand-5.svg'
import brand6 from '@/public/brand-6.svg'
import Marquee from 'react-fast-marquee'


function HistorySection() {
  return (
    <section className="w-full py-24 px-3 bsm:px-4 md:px-6 xl:px-8">
      <h5 className="mb-4 text-[#BCAC76] text-xl font-semibold tracking-widest">
        OUR HISTORY
      </h5>
      <div className="mb-6 text-xl text-[#868E96]">
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin. He lay on his
        armour-like back, and if he lifted his head a little he could see his
        brown belly, slightly domed and divided by arches into stiff sections
      </div>
      <div className="mb-12 text-xl text-[#868E96]">
        He must have tried it a hundred times, shut his eyes so that he
        wouldn&apos;t have to look at the floundering legs, and only stopped
        when he began to feel a mild, dull pain there that he had never felt
        before.
      </div>
      <Sponsors />
    </section>
  );
}

export default HistorySection



function Sponsors() {

  return (
    <section className="flex overflow-hidden text-[#212529] ">
      <Marquee direction="left" loop={0} className="py-2 flex">
        <SponsorItem />
        <SponsorItem />
        <SponsorItem />
        <SponsorItem />
      </Marquee>
    </section>
  );
}
function SponsorItem() {
  return (
    <>
      <div className="flex w-[60px] px-3 bsm:w-[80px] py-2">
        <Image
          className="object-cover h-full w-full"
          src={brand1}
          width={100}
          alt=""
        />
      </div>
      <div className="flex w-[60px] px-3 bsm:w-[80px] py-2">
        <Image
          className="object-cover h-full w-full"
          src={brand2}
          width={100}
          alt=""
        />
      </div>
      <div className="flex w-[60px] px-3 bsm:w-[80px] py-2">
        <Image
          className="object-cover h-full w-full"
          src={brand3}
          width={100}
          alt=""
        />
      </div>
      <div className="flex w-[60px] px-3 bsm:w-[80px] py-2">
        <Image
          className="object-cover h-full w-full"
          src={brand4}
          width={100}
          alt=""
        />
      </div>
      <div className="flex w-[60px] px-3 bsm:w-[80px] py-2">
        <Image
          className="object-cover h-full w-full"
          src={brand5}
          width={100}
          alt=""
        />
      </div>
      <div className="flex w-[60px] px-3 bsm:w-[80px] py-2">
        <Image
          className="object-cover h-full w-full"
          src={brand6}
          width={100}
          alt=""
        />
      </div>
    </>
  );
}