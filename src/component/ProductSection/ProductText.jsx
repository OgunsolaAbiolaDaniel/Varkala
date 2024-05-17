// ProductText.js
import React from 'react';

const ProductText = ({ brand, productName, price, originalPrice }) => {
  return (
    <div className="px-4 py-3 w-72">
      <a 
        href="#" // Add a href attribute or use Next.js Link component if routing
        className="text-lg font-bold text-black truncate block capitalize hover:underline" // Add hover:underline to underline on hover
      >
        {productName}
      </a>
      <div className="flex items-center">
        <del>
          <p className="text-sm text-gray-600 cursor-auto my-3">${originalPrice}</p>
        </del>
        <p className="text-sm text-gray-600 cursor-auto ml-2">${price}</p>
      </div>
    </div>
  );
};

export default ProductText;
