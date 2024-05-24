"use client";
import React, { useState, useEffect } from "react";

export default function Dealsection() {
  const currentDate = new Date();
  const targetDate = new Date(currentDate);
  targetDate.setDate(currentDate.getDate() + 100); // Add 100 days to the current date
  const formattedTargetDate =
    targetDate.toISOString().split("T")[0] + "T00:00:00"; // Format the target date

  return (
    <div
      className="py-6 min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/photo/deal-plain.jpg)",
        backgroundPosition: "right",
        backgroundSize: "cover",
      }}
    >
      <style jsx>{`
        @media (max-width: 640px) {
          .timer-container {
            width: 100%;
          }
        }
      `}</style>
      <div className="w-full">
        <div className="w-full">
          <div className="p-6 py-24 lg:w-10/12 xl:w-6/12 lg:ml-5">
            <p className="text-base mb-4 font-extrabold text-red-600 tracking-widest">
              D E A L O F T H E W E E K
            </p>
            <h3 className="text-[26px] md:text-4xl font-extrabold mb-2">
              Oversized denim jacket
            </h3>
            <p className="text-gray-500 mb-4 text-base font-semibold">
              <del className="mr-3">$129.00</del>
              <span>$79.00</span>
            </p>
            <p className="mb-6">
              <span className="badge bg-red-600 p-3 text-white rounded font-extrabold text-xs">
                $50 off
              </span>
            </p>
            <div className="w-full">
              <CountdownTimer targetDate={formattedTargetDate} />
            </div>
            
              <button
              className="inline-block border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300 mb-4 px-3 py-3 font-extrabold tracking-[.5em] text-xs"
              type="button"
              >
                SHOP&nbsp;NOW
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const targetTime = new Date(targetDate).getTime();
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 96)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate, timeLeft]); // Include timeLeft in the dependency array

  return (
    <div
      className="bg-white px-12 py-6 shadow-lg mb-6 mx-0 sm:shadow-none w-full lg:w-6/6 lg:px-10 lg:py-7"
      id="countdown"
    >
      <div className="grid grid-cols-2 bsm:flex justify-between w-full">
        <div className="w-full text-center mb-4 sm:mb-0 px-1">
          <h6 className="text-2xl font-extrabold text-black mb-2">
            {timeLeft.days}
          </h6>
          <span className="text-gray-500 text-sm font-semibold w-fill">
            days
          </span>
        </div>
        <div className="w-full text-center mb-4 sm:mb-0 px-1">
          <h6 className="text-2xl font-extrabold mb-2 text-black">
            {timeLeft.hours}
          </h6>
          <span className="text-gray-500 text-sm font-semibold">hours</span>
        </div>
        <div className="w-full text-center px-1">
          <h6 className="text-2xl font-extrabold mb-2 text-black">
            {timeLeft.minutes}
          </h6>
          <span className="text-gray-500 text-sm font-semibold w-fit">
            minutes
          </span>
        </div>
        <div className="w-full text-center">
          <h6 className="text-2xl font-extrabold mb-2 text-black">
            {timeLeft.seconds}
          </h6>
          <span className="text-gray-500 text-sm font-semibold">seconds</span>
        </div>
      </div>
    </div>
  );
}
