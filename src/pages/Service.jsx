import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { RiLoopLeftLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

const Service = () => {
  // Service data array to keep the JSX clean
  const services = [
    {
      icon: <FaShippingFast />,
      title: "Fast & Reliable Shipping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius.",
    },
    {
      icon: <FaCreditCard />,
      title: "Secure Payment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius.",
    },
    {
      icon: <RiLoopLeftLine />,
      title: "Easy Returns",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius.",
    },
    {
      icon: <MdOutlineSupportAgent />,
      title: "24/7 Customer Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius.",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-10 py-16 md:py-32">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center lg:items-start lg:text-left group"
          >
            <div className="text-[#22222280] text-4xl mb-4 group-hover:text-black transition-colors duration-300">
              {service.icon}
            </div>
            <h2 className="font-bold text-lg text-[#222222]">
              {service.title}
            </h2>
            <p className="text-[#22222280] mt-3 leading-relaxed text-sm md:text-base">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
