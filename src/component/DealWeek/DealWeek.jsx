'use client'

import React from 'react';
import CountdownTimer from '../DealCountdown/DealCountdown'; // Import the CountdownTimer component

const DealOfTheWeek = () => {
  const currentDate = new Date();
  const targetDate = new Date(currentDate);
  targetDate.setDate(currentDate.getDate() + 100); // Add 100 days to the current date
  const formattedTargetDate = targetDate.toISOString().split('T')[0] + 'T00:00:00'; // Format the target date

  return (
    <div className="py-6 min-h-screen bg-cover bg-no-repeat" style={{backgroundImage: 'url(https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/photo/deal-plain.jpg)', backgroundPosition: 'right', backgroundSize: 'cover'}}>
      <style jsx>{`
        @media (max-width: 640px) {
          .timer-container {
            width: 100%;
          }
        }
      `}</style>
      <div className="container mx-auto px-4 h-full">
        <div className="w-full">
          <div className="p-6 sm:p-8 lg:w-10/12 xl:w-6/12">
            <p className="text-xs mb-8 font-extrabold text-red-600 tracking-widest">D E A L  O F  T H E  W E E K</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">Oversized denim jacket</h3>
            <p className="text-gray-500 mb-8 text-sm font-semibold">
              <del className="mr-3">$129.00</del>
              <span>$79.00</span>
            </p>
            <p className="mb-8">
              <span className="badge bg-red-600 p-3 text-white rounded font-extrabold text-xs">$50 off</span>
            </p>
            <div className="timer-container sm:w-full">
              <CountdownTimer targetDate={formattedTargetDate} />
            </div>
            <p>
              <a className="inline-block border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300 px-3 py-3 font-extrabold tracking-[.5em] text-xs" href="#">
                SHOP&nbsp;NOW
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheWeek;
