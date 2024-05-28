"use client";

import React, { useState } from "react";
import PlusMinusSVG from "./FooterSvg";
import { useMediaQuery } from "@react-hook/media-query";

const Footer = () => {
  const [showShopLinks, setShowShopLinks] = useState(false);
  const [showCompanyLinks, setShowCompanyLinks] = useState(false);
  const [showAccountLinks, setShowAccountLinks] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const toggleShopLinks = () => {
    setShowShopLinks(!showShopLinks);
  };

  const toggleCompanyLinks = () => {
    setShowCompanyLinks(!showCompanyLinks);
  };

  const toggleAccountLinks = () => {
    setShowAccountLinks(!showAccountLinks);
  };

  return (
    <div>
      <div className="py-6 text-gray-600 mb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-5/12 lg:pr-6 mb-5 mb-lg-0">
              <h6 className="text-black font-extrabold letter-spacing-1 mb-4">
                Be in touch
              </h6>
              <p className="text-sm text-gray-400 font-semibold mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                itaque temporibus.
              </p>
              <form action="#" id="newsletter-form">
                <div className="relative flex items-center border-b border-gray-300 py-2 mb-3">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                  />
                  <button
                    className="absolute right-0 text-gray-700 py-0"
                    type="button"
                  >
                    <svg
                      className="w-10 h-8 text-gray-500 dark:text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="1"
                        d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="flex flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-4/12 mb-4 lg:mb-0">
                  <h6
                    className="text-black font-extrabold letter-spacing-1 mb-4 lg:hidden"
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={isSmallScreen ? toggleShopLinks : null}
                  >
                    <span>Shop</span>
                    {isSmallScreen && (
                      <span style={{ marginLeft: "auto" }}>
                        <PlusMinusSVG isOpen={showShopLinks} />
                      </span>
                    )}
                  </h6>
                  <ul
                    className={`list-none text-gray-400 text-sm pt-2 lg:pt-0 ${
                      showShopLinks || !isSmallScreen ? "block" : "hidden"
                    }`}
                  >
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        For Women
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        For Men
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        Stores
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        Our Blog
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        Shop
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 mb-4 lg:mb-0">
                  <h6
                    className="text-black font-extrabold letter-spacing-1 mb-4 lg:hidden"
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={isSmallScreen ? toggleCompanyLinks : null}
                  >
                    <span>Company</span>
                    {isSmallScreen && (
                      <span style={{ marginLeft: "auto" }}>
                        <PlusMinusSVG isOpen={showCompanyLinks} />
                      </span>
                    )}
                  </h6>
                  <ul
                    className={`list-none text-gray-400 text-sm pt-2 lg:pt-0 ${
                      showCompanyLinks || !isSmallScreen ? "block" : "hidden"
                    }`}
                  >
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        Login
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        Register
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        Wishlist
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black   transition-colors hover:underline"
                        href="#"
                      >
                        Our Products
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        Checkouts
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 mb-4 lg:mb-0">
                  <h6
                    className="text-black font-extrabold letter-spacing-1 mb-4 lg:hidden"
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={isSmallScreen ? toggleAccountLinks : null}
                  >
                    <span>Your account</span>
                    {isSmallScreen && (
                      <span style={{ marginLeft: "auto" }}>
                        <PlusMinusSVG isOpen={showAccountLinks} />
                      </span>
                    )}
                  </h6>
                  <ul
                    className={`list-none text-gray-400 text-sm pt-2 lg:pt-0 ${
                      showAccountLinks || !isSmallScreen ? "block" : "hidden"
                    }`}
                  >
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        Login
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        Register
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        Wishlist
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        Our Products
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-muted font-semibold hover:text-black  transition-colors hover:underline"
                        href="#"
                      >
                        Checkouts
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-gray-400 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center text-sm">
            <div className="w-full lg:w-4/12 text-center lg:text-left">
              <p className="mb-0">© 2024, Your company. All rights reserved.</p>
            </div>
            <div className="w-full lg:w-8/12 mt-2 lg:mt-0 text-center lg:text-right">
              <ul className="list-none mb-0 space-y-2 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-end lg:flex-wrap">
                <li className="inline-block lg:block">
                  <a className="text-reset hover:underline" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="inline-block lg:block">
                  <a className="text-reset hover:underline" href="#">
                    Privacy &amp; cookies
                  </a>
                </li>
                <li className="inline-block lg:block">
                  <a className="text-reset hover:underline" href="#">
                    Accessibility
                  </a>
                </li>
                <li className="inline-block lg:block">
                  <a className="text-reset hover:underline" href="#">
                    Customer Data Promise
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
