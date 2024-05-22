// CountdownTimer.js
'use client'
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const targetTime = new Date(targetDate).getTime();
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
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
  }, [targetDate]); // Add targetDate to dependency array

  return (
    <div className="bg-white px-8 py-8 shadow-lg mb-8 sm:shadow-none" id="countdown">
      <div className="flex justify-between">
        <div className="w-1/4 text-center mb-4 sm:mb-0">
          <h6 className="text-2xl font-extrabold text-black mb-2">{timeLeft.days}</h6>
          <span className="text-gray-500 text-sm font-semibold">days</span>
        </div>
        <div className="w-1/4 text-center mb-4 sm:mb-0">
          <h6 className="text-2xl font-extrabold mb-2 text-black">{timeLeft.hours}</h6>
          <span className="text-gray-500 text-sm font-semibold">hours</span>
        </div>
        <div className="w-1/4 text-center">
          <h6 className="text-2xl font-extrabold mb-2 text-black">{timeLeft.minutes}</h6>
          <span className="text-gray-500 text-sm font-semibold">minutes</span>
        </div>
        <div className="w-1/4 text-center">
          <h6 className="text-2xl font-extrabold mb-2 text-black">{timeLeft.seconds}</h6>
          <span className="text-gray-500 text-sm font-semibold">seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
