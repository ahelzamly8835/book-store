import React from 'react';
import { LuShoppingCart } from "react-icons/lu";
import { IoMdHeartEmpty, IoMdStar, IoMdStarOutline } from "react-icons/io";

const books = [
  {
    id: 1,
    title: "Rich Dad And Poor Dad",
    author: "Robert T. Kiyosaki",
    img: "/img/Book1.png",
    price: "$30.00",
    rating: "4.2",
    reviews: "180",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius."
  },
  {
    id: 2,
    title: "The Design Of Books",
    author: "Debbie Berne",
    img: "/img/Book5.jpg",
    price: "$40.00",
    rating: "4.2",
    reviews: "210",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius."
  }
];

const Recommended = () => {
  return (
    <div className='bg-[#F5F5F5] py-10 md:py-16'>
      <h1 className='font-bold text-2xl md:text-[26px] px-6 md:ml-20 mb-8 md:mb-12 text-center md:text-left'>
        Recommended For You
      </h1>

      <div className="container mx-auto px-4 grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
        {books.map((book) => (
          <div key={book.id} className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
  
            <div className="flex justify-center items-center  p-6 sm:w-1/3 lg:w-2/5">
              <img 
                src={book.img} 
                alt={book.title} 
                className='w-32 sm:w-full h-auto object-contain drop-shadow-xl'
              />
            </div>

            <div className="flex flex-col p-6 sm:w-2/3 lg:w-3/5">
              <h2 className='font-bold text-xl mb-1'>{book.title}</h2>
              <p className='text-[#22222280] text-sm mb-4'>
                Author: <span className='text-black'>{book.author}</span>
              </p>
              
              <p className='text-sm text-gray-600 mb-4 line-clamp-3'>
                {book.desc}
              </p>


              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  <IoMdStar className='text-lg'/>
                  <IoMdStar className='text-lg'/>
                  <IoMdStar className='text-lg'/>
                  <IoMdStar className='text-lg'/>
                  <IoMdStarOutline className='text-lg text-gray-300'/>
                </div>
                <p className='text-[#22222280] text-xs'>({book.reviews} Reviews)</p>
              </div>

              <div className="flex justify-between items-center mb-6">
                <p className='text-[#22222280] text-sm'>
                  Rate: <span className='text-[#222222] font-semibold'>{book.rating}</span>
                </p>
                <span className='text-[#222222] font-bold text-2xl'>{book.price}</span>
              </div>

              <div className="mt-auto flex gap-3 sm:gap-4">
                <button className='flex-1 flex cursor-pointer justify-center items-center gap-2 text-white bg-mainColor hover:bg-opacity-90 transition py-3 px-4 rounded-xl text-sm font-semibold'>
                  Add To Cart <LuShoppingCart className='text-lg' />
                </button>
                <button className='border border-mainColor cursor-pointer p-3 rounded-xl'>
                  <IoMdHeartEmpty className='text-mainColor text-2xl '/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommended;