import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const FlashSale = () => {
  const flashSaleBooks = [
    {
      id: 1,
      title: "Rich Dad And Poor Dad",
      author: "Robert T.Kiyosaki",
      price: "$30.00",
      oldPrice: "$45.00",
      rate: "4.2",
      reviews: "180",
      img: "/img/Book1.png",
    },
    {
      id: 2,
      title: "Rich Dad And Poor Dad",
      author: "Robert T.Kiyosaki",
      price: "$30.00",
      oldPrice: "$45.00",
      rate: "4.2",
      reviews: "180",
      img: "/img/Book1.png",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-12 md:py-20">
      <div className="px-6 md:px-16 mb-12">
        <h1 className="font-bold text-[#222222] text-2xl md:text-[26px] mb-4">
          Flash Sale
        </h1>
        <p className="text-[#22222280] max-w-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo.
        </p>
      </div>

      <div className="px-6 md:px-16 grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-16">
        {flashSaleBooks.map((book) => (
          <div
            key={book.id}
            className="bg-[#3B2F4A] flex flex-col sm:flex-row rounded-xl overflow-hidden shadow-lg"
          >
            <div className="sm:w-48 p-6 flex justify-center items-center">
              <img
                src={book.img}
                alt={book.title}
                className="w-32 sm:w-full h-auto object-contain "
              />
            </div>

            <div className="flex-1 p-6 md:p-7 flex flex-col justify-between">
              <div>
                <h1 className="text-white font-bold text-xl mb-1">
                  {book.title}
                </h1>
                <p className="text-[#FFFFFF80] text-sm">
                  Author: <span className="text-white">{book.author}</span>
                </p>

                <div className="flex mt-4 text-yellow-400 gap-1 items-center">
                  <div className="flex">
                    <IoMdStar className="text-lg" />
                    <IoMdStar className="text-lg" />
                    <IoMdStar className="text-lg" />
                    <IoMdStar className="text-lg" />
                    <IoMdStarOutline className="text-lg text-gray-300" />
                  </div>
                  <p className="text-[#FFFFFF80] ml-2 text-xs md:text-sm font-semibold">
                    ({book.reviews} Review)
                  </p>
                </div>
                <p className="text-[#FFFFFF80] text-sm mt-1">
                  Rate:{" "}
                  <span className="text-white font-medium">{book.rate}</span>
                </p>
              </div>

              <div className="flex items-end justify-between mt-6">
                <div className="price flex items-baseline gap-3">
                  <span className="text-[#FFFFFF4D] line-through text-sm">
                    {book.oldPrice}
                  </span>
                  <h2 className="font-bold text-white text-2xl">
                    {book.price}
                  </h2>
                </div>

                <button className="bg-mainColor hover:bg-opacity-90 transition-all p-3 md:p-4 rounded-xl cursor-pointer shadow-md active:scale-95">
                  <LuShoppingCart className="text-white text-2xl md:text-3xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
