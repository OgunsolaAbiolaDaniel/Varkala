import React from 'react';

const ProductNav = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full px-1 text-center self-center items-center lg:w-fit lg:px-3 lg:mx-20">
        <div className='w-fit text-black text-[43.2px] mb-12 '>New Arrivals</div>
        <p className='text-xl text-gray-400 w-fit mb-24'>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections
        </p>
      </div>
      <div className="flex w-full flex-col sm:flex-row justify-between items-center mb-4">
        <div className="w-full sm:w-auto">
          <ul className="list-inline text-center sm:text-left mb-3 sm:mb-0">
            <li className="inline-block mx-2">
              <a className="text-dark hover:underline" href="#">
                All Products
              </a>
            </li>
            <li className="inline-block mx-2">
              <a
                className="text-muted hover:underline hover:text-dark text-gray-500"
                href="#"
              >
                Clothing
              </a>
            </li>
            <li className="inline-block mx-2">
              <a
                className="text-muted hover:underline hover:text-dark text-gray-500"
                href="#"
              >
                Bags
              </a>
            </li>
            <li className="inline-block mx-2">
              <a
                className="text-muted hover:underline hover:text-dark text-gray-500"
                href="#"
              >
                Shoes
              </a>
            </li>
            <li className="inline-block mx-2">
              <a
                className="text-muted hover:underline hover:text-dark text-gray-500"
                href="#"
              >
                Accessories
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto text-center">
          <a
            className="btn btn-link font-semibold px-0 text-base hover:underline hover:text-dark text-yellow-600"
            href="#"
            style={{ lineHeight: "2rem", letterSpacing: "0.2rem" }}
          >
            ALL PRODUCTS
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductNav;
