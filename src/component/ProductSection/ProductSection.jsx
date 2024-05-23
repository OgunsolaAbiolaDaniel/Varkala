import React from "react";
import Image from "next/image";
import ProductText from "../ProductText/ProductText";
import products from "../ProductData/ProductData";
import ProductNav from "@/component/ProductNavbar/ProductNavbar";

export default function ProductSection(){
  return (
    <section id="Projects" className=" w-full xl:px-12 px-3 py-24">
      <ProductNav />
      <div className=" w-full grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-items-center">
        {products.map((product, index) => (
          <div key={product.id} className="relative group w-full">
            {product.buttonText && (
              <button
                className={`absolute top-4 left-2 p-1 rounded text-xs font-bold z-10 ${
                  index % 3 === 0
                    ? "bg-black"
                    : index % 3 === 1
                    ? "bg-gray-800"
                    : "bg-yellow-600"
                } text-white`}
              >
                {product.buttonText}
              </button>
            )}

            <div className="relative w-full">
              <Image
                src={product.imageUrl}
                alt={product.productName}
                className="w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                width={500}
                height={300}
              />
              <Image
                src={product.hoverImageUrl}
                alt={`${product.productName} hover`}
                className="w-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                width={500}
                height={300}
              />
              <div className="absolute h-14 left-0 bottom-0 w-full flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-white bg-opacity-80 lg:bg-opacity-0 lg:group-hover:bg-opacity-80">
                <span className="text-sm text-black font-base dark:text-white mr-2">
                  <a href="#" className="hover:underline">
                    Add to cart
                  </a>
                </span>
                <div className=" w-full flex space-x-1">
                  <svg
                    className="w-4 h-4 text-gray-600 dark:text-white hover:text-amber-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-600 dark:text-white hover:text-amber-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <ProductText
              productName={product.productName}
              price={product.price}
              originalPrice={product.originalPrice}
              starRating={product.starRating}
              currencySymbol="$"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

;
