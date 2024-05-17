import React from 'react';
import Image from 'next/image'; // Import Image component from next/image
import ProductText from './ProductText'; 
import products from './ProductData'; 

const ProductCard = () => {
  return (
    <section
      id="Projects"
      className="container mx-auto grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-6 lg:gap-x-6 gap-y-16 justify-center"
    >
      {products.map((product, index) => (
        <div
          key={product.id}
          className="relative w-full group"
        >
          {/* Conditionally render the button */}
          {product.buttonText && (
            <button
              className={`absolute top-4 left-2 p-1 rounded text-xs ${
                index % 3 === 0
                  ? 'bg-black'
                  : index % 3 === 1
                  ? 'bg-black'
                  : 'bg-yellow-600'
              } text-white`}
            >
              {product.buttonText}
            </button>
          )}

          <div className="relative h-48 w-full">
            <Image
              src={product.imageUrl}
              alt={product.productName}
              className="h-48 w-full object-cover group-hover:hidden"
              layout="responsive"
              width={500} // Replace with your desired width
              height={300} // Replace with your desired height
            />
            <Image
              src={product.hoverImageUrl}
              alt={`${product.productName} hover`}
              className="h-48 w-full object-cover hidden group-hover:block"
              layout="responsive"
              width={500} // Replace with your desired width
              height={300} // Replace with your desired height
            />
            {/* SVG icons */}
            <div className="absolute left-0 bottom-0 w-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Replace these SVGs with your actual SVG icons */}
              <svg className="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"/>
              </svg>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
              </svg>
            </div>
          </div>
          
          <ProductText
            productName={product.productName}
            price={product.price}
            originalPrice={product.originalPrice}
          />
        </div>
      ))}
    </section>
  );
};

export default ProductCard;
