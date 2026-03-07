import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaCheckCircle,
  FaTruck,
  FaShoppingCart,
} from "react-icons/fa";
import { FaXTwitter, FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";

const bookInfo = [
  { label: "Author", value: "Robert T. Kiyosaki" },
  { label: "Publication Year", value: "1997" },
  { label: "Book", value: "1 Of 1" },
  { label: "Pages", value: "336" },
  { label: "Language", value: "English" },
];

const ProductInfo = () => {
  return (
    <div className="main">
      <div className="top-bar flex flex-col lg:flex-row gap-10 lg:gap-26">
        <div className="content mt-6">
          <h1 className="font-bold text-xl md:text-2xl">
            Rich Dad And Poor Dad
          </h1>

          <p className="text-[#22222280] pt-2 text-[16px] md:text-[18px] max-w-[45em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 text-sm">
            {bookInfo.map((item, index) => (
              <div key={index}>
                <p className="text-gray-400">{item.label}</p>
                <p className="font-semibold text-gray-800">{item.value}</p>
              </div>
            ))}

            <div className="rate col-span-2 sm:col-span-1">
              <div className="flex pb-2">
                <IoStarSharp className="text-xl md:text-2xl text-[#EBC305]" />
                <IoStarSharp className="text-xl md:text-2xl text-[#EBC305]" />
                <IoStarSharp className="text-xl md:text-2xl text-[#EBC305]" />
                <IoStarSharp className="text-xl md:text-2xl text-[#EBC305]" />
                <IoStarSharp className="text-xl md:text-2xl text-[#00000033]" />
              </div>

              <p className="text-[#00000080] text-base md:text-lg">
                Rate:
                <span className="font-semibold text-[#222222]"> 4.2</span>
              </p>
            </div>
          </div>
        </div>

        <div className="links mt-5">
          <div className="flex text-xl md:text-2xl gap-4">
            <FaFacebook className="text-[#1877F2] cursor-pointer" />
            <FaInstagram className="text-white cursor-pointer bg-[linear-gradient(45deg,#515BD4,#9537B0,#DD2A7B,#FAAD4F)] rounded-full p-1" />
            <FaWhatsapp className="text-white cursor-pointer bg-[#00E510] rounded-full p-1" />
            <FaXTwitter className="text-white cursor-pointer bg-[#1C1C1B] rounded-full p-1" />
            <IoMdShare className="text-2xl cursor-pointer md:text-3xl text-[#22222280]" />
          </div>

          <div className="flex flex-col gap-6 mt-10 lg:mt-16">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 border cursor-pointer border-gray-200 px-3 py-1 rounded-md bg-gray-50">
                <FaCheckCircle className="text-green-500 text-sm" />
                <span className="text-sm text-green-600">In Stock</span>
              </div>

              <div className="flex items-center gap-2 border cursor-pointer border-gray-200 px-3 py-1 rounded-md bg-gray-50">
                <FaTruck className="text-gray-400 text-sm" />
                <span className="text-sm text-gray-500">
                  Free Shipping Today
                </span>
              </div>
            </div>

            <div className="border border-gray-200 cursor-pointer px-3 py-1 rounded-md bg-gray-50 w-fit">
              <span className="text-sm text-orange-500">
                Discount code: <span className="font-medium">Ne212</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="price-btn flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mt-10 lg:mt-14">
        <div className="price flex gap-3 items-center">
          <h3 className="text-2xl md:text-3xl font-bold">$40.00</h3>
          <del className="text-[#22222280] font-bold text-lg md:text-xl">
            $50.00
          </del>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer border border-mainColor text-mainColor">
              <FaMinus className="text-xs" />
            </button>

            <span className="text-lg font-semibold">1</span>

            <button className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer border border-mainColor text-mainColor">
              <FaPlus className="text-xs" />
            </button>
          </div>

          <button className="flex items-center gap-2 cursor-pointer bg-mainColor text-white px-6 py-2 rounded-lg">
            Add To Cart
            <FaShoppingCart />
          </button>

          <button className="border cursor-pointer border-mainColor p-2 rounded-lg text-mainColor">
            <FiHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
