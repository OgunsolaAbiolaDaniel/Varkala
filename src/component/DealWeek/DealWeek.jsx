import React from 'react';

const DealOfTheWeek = () => {
  return (
    <div
      className="py-6 bg-cover bg-no-repeat mt-20 sm:bg-right"
      style={{
        backgroundImage: 'url(https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/photo/deal-plain.jpg)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center sm:justify-start">
          <div className=" p-6  sm:p-8 lg:w-10/12 xl:w-6/12  ">
          <p className="text-sm mb-8  font-bold text-red-600  tracking-[.30em]">DEAL  OF  THE  WEEK</p>
            <h3 className="text-4xl font-bold mb-4">Oversized denim jacket</h3>
            <p className="text-gray-500 text-sm font-semibold mb-6">
              <del className="mr-3">$129.00</del>
              <span>$79.00</span>
            </p>
            <p className="mb-6">
              <span className="badge bg-red-600 rounded p-3 font-bold text-xs text-white">$50 off</span>
            </p>
            <div className="bg-white px-5 py-4 shadow mb-4 sm:shadow-none" id="countdown">
              <div className="flex justify-between">
                <div className="w-1/4 text-center mb-4 sm:mb-0">
                  <h6 className="text-4xl font-semibold mb-2 days">13</h6>
                  <span className="text-gray-500">days</span>
                </div>
                <div className="w-1/4 text-center mb-4 sm:mb-0">
                  <h6 className="text-4xl font-semibold mb-2 hours">01</h6>
                  <span className="text-gray-500">hours</span>
                </div>
                <div className="w-1/4 text-center">
                  <h6 className="text-4xl font-semibold mb-2 minutes">56</h6>
                  <span className="text-gray-500">minutes</span>
                </div>
                <div className="w-1/4 text-center">
                  <h6 className="text-4xl font-semibold mb-2 seconds">19</h6>
                  <span className="text-gray-500">seconds</span>
                </div>
              </div>
            </div>
            <p>
              <a className="inline-block border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300 px-4 py-2 mb-4 "
                href="#"
                >
                Shop now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheWeek;
