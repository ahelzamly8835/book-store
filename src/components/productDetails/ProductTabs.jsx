import React, { useState } from "react";
import ProductDetailsTapOne from "./ProductDetailsTapOne";
import CustomerReviews from "./CustomerReviews";
import RecommendedBooks from "./RecommendedBooks";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="bg-[#F5F5F5] my-16">
      <div className="flex gap-10 border-b border-gray-200 pb-3 text-gray-500 font-medium">
        <button
          onClick={() => setActiveTab("details")}
          className={`cursor-pointer ease-in-out pb-2 transition-all duration-400 ${
            activeTab === "details"
              ? "text-black border-b-2 border-orange-400"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Product Details
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`cursor-pointer ease-in-out  pb-2 transition-all duration-400 ${
            activeTab === "reviews"
              ? "text-black border-b-2 border-orange-400"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Customer Reviews
        </button>

        <button
          onClick={() => setActiveTab("recommended")}
          className={`cursor-pointer ease-in-out  pb-2 transition-all duration-400 ${
            activeTab === "recommended"
              ? "text-black border-b-2 border-orange-400"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Recommended For You
        </button>
      </div>

      <div className="mt-6">
        {activeTab === "details" && <ProductDetailsTapOne />}
        {activeTab === "reviews" && <CustomerReviews />}
        {activeTab === "recommended" && <RecommendedBooks />}
      </div>
    </div>
  );
};

export default ProductTabs;
