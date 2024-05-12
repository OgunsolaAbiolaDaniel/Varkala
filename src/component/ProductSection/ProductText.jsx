// ProductText.js
import React from 'react';

const ProductText = ({ brand, productName, price, originalPrice }) => {
  return (
    <div className="px-4 py-3 w-72">
      <p className="text-lg font-bold text-black truncate block capitalize">{productName}</p>
      <div className="flex items-center">
      <del>
          <p className="text-sm text-gray-600 cursor-auto  my-3 ">${originalPrice}</p>
        </del>
          <p className="text-sm text-gray-600 cursor-auto ml-2">${price}</p>
      </div>
    </div>
  );
};

export default ProductText;
