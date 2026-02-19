import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const BestSeller = () => {
  return (
    <div className="bg-[#3B2F4A] overflow-hidden">
      <div className="content flex flex-col justify-center items-center pt-16 md:pt-20 px-6 text-center">
        <h2 className="text-white font-bold text-2xl md:text-[26px] mb-4">
          Best Seller
        </h2>
        <p className="text-[#FFFFFF80] max-w-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo.
        </p>
      </div>

      <div className="slider py-12 md:py-20 px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          watchSlidesProgress={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 25 },
            1280: { slidesPerView: 7, spaceBetween: 30 },
          }}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <SwiperSlide key={num}>
              <div className="flex justify-center">
                <img
                  src={`/img/Book${num}.${
                    num === 1 || num === 3 || num === 8 ? "png" : "jpg"
                  }`}
                  alt={`Book ${num}`}
                  className="w-full max-w-[173px] aspect-[2/3] object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="btn flex pb-16 md:pb-20">
        <button className="bg-mainColor text-white px-8 py-3 outline-none cursor-pointer mx-auto rounded-xl font-semibold hover:bg-opacity-90 transition shadow-lg">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
