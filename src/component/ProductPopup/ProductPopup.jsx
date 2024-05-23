{/*'use client'
import React, { useState } from 'react';

const Popover = () => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setShowPopover(true)}
        onMouseLeave={() => setShowPopover(false)}
        className="text-white bg-blue-700 mt-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Default popover
      </button>
      {showPopover && (
        <div
          role="tooltip"
          className="absolute z-10 visible inline-block w-48 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          onMouseEnter={() => setShowPopover(true)}
          onMouseLeave={() => setShowPopover(false)}
          style={{
            left: '10%', // Center the popover horizontally
            transform: 'translateX(-50%)', // Center the popover horizontally
            backgroundImage: 'url("https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/0987188250_2_1_1.jpg")', // Set the background image
            backgroundSize: 'cover', // Ensure the background image covers the entire popover
            backgroundRepeat: 'no-repeat', // Ensure the background image doesn't repeat
            backgroundPosition: 'center', // Center the background image
            height: '300px', // Set the height of the popover
            width: '300px', // Set the width of the popover
            display: 'flex', // Use flexbox layout
            flexDirection: 'column', // Arrange items vertically
            justifyContent: 'flex-end', // Align items to the bottom
            padding: '1rem', // Add padding
          }}
        >
          <div className="px-3 py-2">
            <div className="flex justify-between items-center">
              <div className="w-full bg-white bg-opacity-75 rounded-lg p-2 mr-2">
                <a className="text-gray-800 dark:text-white">Add to Cart</a>
              </div>
              <div className="flex">
                <span>
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                  </svg>
                </span>
                <span>
                  <svg className="w-6 h-6 ml-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;*/}
