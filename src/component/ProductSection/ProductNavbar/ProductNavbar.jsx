import React from 'react';

const ProductNav = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
      <div className="w-full sm:w-auto">
        <ul className="list-inline text-center sm:text-left mb-3 sm:mb-0">
          <li className="inline-block mx-2">
            <a className="text-dark hover:underline" href="#">
              All Products
            </a>
          </li>
          <li className="inline-block mx-2">
            <a className="text-muted hover:underline hover:text-dark text-gray-500" href="#">
              Clothing
            </a>
          </li>
          <li className="inline-block mx-2">
            <a className="text-muted hover:underline hover:text-dark text-gray-500" href="#">
              Bags
            </a>
          </li>
          <li className="inline-block mx-2">
            <a className="text-muted hover:underline hover:text-dark text-gray-500" href="#">
              Shoes
            </a>
          </li>
          <li className="inline-block mx-2">
            <a className="text-muted hover:underline hover:text-dark text-gray-500" href="#">
              Accessories
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-auto text-center">
  <a
    className="btn btn-link font-semibold px-0 text-base hover:underline hover:text-dark text-yellow-600"
    href="#"
    style={{ lineHeight: '2rem', letterSpacing: '0.2rem' }}
  >
    ALL PRODUCTS
  </a>
</div>
    </div>
  );
};

export default ProductNav;
