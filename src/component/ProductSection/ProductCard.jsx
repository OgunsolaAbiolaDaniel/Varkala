// ProductCard.jsx
import React from "react";
import Image from "next/image";
import ProductText from "./ProductText";
import products from "@/component/ProductData/ProductData";

const ProductCard = () => {
  return (
    <section
      id="Projects"
      className="container mx-auto grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-6 lg:gap-x-6 gap-y-16 justify-center"
    >
      {products.map((product, index) => (
        <div key={product.id} className="relative w-full">
          {/* Conditionally render the button */}
          {product.buttonText && (
            <button
              className={`absolute top-4 left-2 p-1 rounded text-xs ${
                index % 3 === 0
                  ? "bg-black"
                  : index % 3 === 1
                  ? "bg-black"
                  : "bg-yellow-600"
              } text-white`}
            >
              {product.buttonText}
            </button>
          )}

          <Image
            width={400}
            src={product.imageUrl}
            alt={product.productName}
            height={400}
            className="h-48 w-full object-cover "
          />
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
