'use client'
import { useState, useEffect } from "react";
import React from 'react'
import { PiCaretLeft } from "react-icons/pi";
import { PiCaretRight } from "react-icons/pi";
import { RxDotFilled } from "react-icons/rx";


export default function SlideShow({ children }) {
{/*----slide show----*/}
    const slides = [
      {
        outerstyl: "w-full h-[100vh] lg:bg-center bg-center bg-cover",
        divstyling:
          "flex flex-col justify-center items-center w-full p-0 z-1 text-center leading-none text-[#212529] relative bottom-12 lg:absolute lg:bottom-0 lg:left-[30%] lg:right-[30%] lg:top-[5%] xl:top-[5%] lg:w-fit xl:left-[35%] ",
        /*"absolute lg:left-[30%] lg:right-[30%] z-10 top-[31%] lg:px-5 flex flex-col items-center text-center"*/
        slideimag:
          "https://demo.bootstrapious.com/varkala/2-1/img/photo/home-2-plain.jpg",
        text1: {
          textinner: "BLUE & WHITE",
          textinnerstyl:
            "text-base font-bold tracking-[0.3em] text-center mb-[1.5rem] lg: lg:w-[400px] ",
          /* "z-10 font-bold text-center  lg:w-[400px] "*/
        },
        text2: {
          textinner: "Linen and denim",
          textinnerstyl:
            "text-[57.6px] w-full font-normal mb-[1rem] lg:font-medium lg:leading-none lg:w-[400px] lg:text-center lg:text-[70.64px] ",
          /*"lg:text-[70.64px] z-10 font-normal leading-none text-center lg:w-[400px]  py-1"*/
        },
        text3: {
          textinner: "",
          textinnerstyl: "hidden",
        },
        btntext: "START SHOPPING",
        btnstyl:
          "bg-[#212529] tracking-[0.3em] text-white text-xs font-bold px-4 py-3",
        /* " w-fit  z-10 text-white  font-bold "*/
      },
      {
        outerstyl: "w-full h-[100vh] lg:bg-center bg-center bg-cover",
        slideimag:
          "https://demo.bootstrapious.com/varkala/2-1/img/photo/home-3-plain.jpg",
        divstyling:
          "flex flex-col justify-start w-full p-0 z-1 leading-none text-[#212529] relative bottom-20 right-3 lg:absolute lg:left-[50%] lg:top-[25%] lg:w-fit lg:px-3 lg:h-auto xl:left-[50%] lg:top-36 ",
        /* "absolute tracking-widest left-[50%] top-44 z-10 px-3 w-fit flex flex-col justify-between"*/
        text1: {
          textinner: "SNEAKERS",
          textinnerstyl:
            "text-base font-bold tracking-[0.3em] text-[#BCAC76] mb-[1.5rem] ",
          /* " z-10 "*/
        },
        text2: {
          textinner: "For every occassion",
          textinnerstyl:
            "text-[57.6px] w-full font-normal mb-[3rem] lg:text-[70.64px] lg:leading-none lg:text-left lg:w-[400px] xl:font-medium xl:leading-[1.1em] ",
          /* "text-[70.64px] font-normal z-10 leading-none text-left w-[400px] mb-[3rem] py-1"*/
        },
        text3: {
          textinner: "",
          textinnerstyl: "hidden",
        },
        btntext: "START SHOPPING",
        btnstyl:
          "bg-[#212529] tracking-[0.3em] text-white text-xs w-fit font-bold  px-4 py-3 ",
        /* "bg-black w-fit tracking-[0.3em] z-10 text-white text-xs font-bold px-3 py-2"*/
      },
      {
        outerstyl: "w-full h-[100vh] lg:bg-center bg-right bg-cover",
        slideimag:
          "https://demo.bootstrapious.com/varkala/2-1/img/photo/home-1-plain.jpg",
        divstyling:
          "flex flex-col justify-start z-1 h-auto leading-none text-[#212529] relative bottom-36 bsm:bottom-24 lg:ml-20 lg:top-[20%] lg:px-3  lg:absolute lg:right-[50%] ",
        /* "absolute tracking-widest z-10 right-[50%]    flex flex-col  "*/
        text1: {
          textinner: "OVER ALL-TIME FAVORITES",
          textinnerstyl: "text-base font-bold tracking-[0.3em] mb-[1.5rem] ",
          /* "text-base font-bold z-10 tracking-[0.3em] mb-[1.5rem]"*/
        },
        text2: {
          textinner: "Blouses & Tops",
          textinnerstyl:
            "text-[57.6px] w-fit font-normal mb-[1rem] lg:text-[70px] lg:text-left lg:w-[400px]",
          /*  " font-normal z-10 leading-none   mb-[1.5rem] py-1"*/
        },
        text3: {
          textinner:
            "The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit",
          textinnerstyl:
            "text-sm tracking-widest text-[#868e96] mb-[3rem] font-semibold ",
          /* " z-10 font-semibold w-[400px]  "*/
        },
        btntext: "DISCOVER MORE",
        btnstyl:
          "bg-[#212529] tracking-[0.3em] w-fit text-white text-xs font-bold px-4 py-3 ",
        /* "bg-black w-fit tracking-widest z-10 text-white text-sm font-semibold px-5 py-2"*/
      },
    ];
     
  const [currentIndex, setCurrentIndex] = useState(2);
{/*---Previous Slide--*/}
  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  {/*----Next Slide----*/}
  function nextSlide() {
 const isLastSlide = currentIndex === slides.length -1 ;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }
  {/*-----Auto play next slide -----*/}
   useEffect(() => {
     const intervalId = setInterval(() => {
       nextSlide();
     }, 3000);

     return () => clearInterval(intervalId);
   }, [currentIndex]);
{/*----On click Navigate to slide with same index position ------ */}
  function goToSlide(slideIndex) {
  setCurrentIndex(slideIndex)
  }
  

  return (
    <>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].slideimag})` }}
        className={slides[currentIndex].outerstyl}
      >
        {children}
        <div className="flex justify-between items-center z-0 mt-36 px-6">
          <div className="hidden absolute top-[50%] translate-x-0 translate-y-[50%] left-5 cursor-pointer lg:contents text-5xl text-gray-300 hover:text-slate-800">
            <button onClick={prevSlide}>
              <PiCaretLeft />
            </button>
          </div>

          <div className={slides[currentIndex].divstyling}>
            <p className={slides[currentIndex].text1.textinnerstyl}>
              {slides[currentIndex].text1.textinner}
            </p>
            <p className={slides[currentIndex].text2.textinnerstyl}>
              {slides[currentIndex].text2.textinner}
            </p>
            <p className={slides[currentIndex].text3.textinnerstyl}>
              {slides[currentIndex].text3.textinner}
            </p>
            <button type="button" className={slides[currentIndex].btnstyl}>
              {slides[currentIndex].btntext}
            </button>
          </div>

          <div className="hidden absolute top-[50%] group-hover:block translate-x-0 translate-y-[50%] cursor-pointer right-5 lg:contents text-5xl text-gray-300 hover:text-slate-800">
            <button type="button" onClick={nextSlide}>
              <PiCaretRight />
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-center relative bottom-8 gap-2">
        {slides.map((slide, slideIndex) => {
          return (
            <div
              key={slideIndex}
              className="cursor-pointer text-gray-500 text-base"
              onClick={() => goToSlide(slideIndex)}
            >
              <RxDotFilled />
            </div>
          );
        })}
      </div>
    </>
  );
}