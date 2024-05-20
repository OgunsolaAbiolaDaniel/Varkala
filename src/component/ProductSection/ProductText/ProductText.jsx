import React from 'react';

const ProductText = ({ productName, price, originalPrice, starRating }) => {
  // Function to generate star icons based on the star rating
  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= 3 ? 'text-yellow-600' : 'text-gray-600';
      stars.push(
        <i key={i} className={`fas fa-star text-xs ${starColor}`}></i>
      );
    }
    return stars;
  };
  
  return (
    <div className="px-2 py-1 w-72">
<h3 className="text-base mb-1">
  <a 
    href="#" 
    className="text-base font-bold mr-6 text-black truncate block capitalize hover:underline" 
  >
    {productName}
  </a>
</h3>
      <div className="flex items-center mt-1 justify-between">
        <div className="flex items-center">
          {originalPrice && (
            <del className="text-sm text-gray-400 cursor-auto mr-2">
              ${originalPrice}
            </del>
          )}
          <p className="text-sm text-gray-600 cursor-auto">${price}</p>
        </div>
        <div className="product-stars flex-grow ml-2 lg:hidden">{renderStarRating(starRating)}</div>
        <div className="product-stars flex-grow ml-2 sm:mr-8 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">{renderStarRating(starRating)}</div>
      </div>
    </div>
  );
};

export default ProductText;
