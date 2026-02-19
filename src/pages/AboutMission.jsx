import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const AboutMission = () => {
  const missionItems = [
    {
      title: "Quality Selection",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Quality Selection Lorem ipsum dolor sit amet.",
    },
    {
      title: "Exceptional Service",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Quality Selection Lorem ipsum dolor sit amet.",
    },
    {
      title: "Set Up Stores",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Quality Selection Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6 md:px-10">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="font-bold text-3xl md:text-4xl text-[#222222] inline-block relative">
            Our Mission
            <span className="block h-1 w-1/2 bg-mainColor mx-auto mt-2 rounded-full"></span>
          </h1>
        </div>

        {/* Grid Container: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {missionItems.map((item, index) => (
            <div
              key={index}
              className="box bg-white p-8 md:p-10 border border-transparent hover:border-mainColor/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <h2 className="font-bold text-xl text-[#222222] mb-4">
                {item.title}
              </h2>
              <p className="text-[#22222280] leading-7 text-sm md:text-base mb-6 flex-grow">
                {item.desc}
              </p>
              <button className="flex items-center gap-1 cursor-pointer font-semibold text-mainColor group w-fit">
                View More
                <IoIosArrowRoundForward className="text-3xl transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
