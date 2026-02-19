import React from "react";
import { FaRegUser, FaPen, FaPhoneVolume } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

const AboutQuestions = () => {
  return (
    <div className="bg-[#3B2F4A] mt-20">
      <div className="container mx-auto px-6 py-10 md:py-20 flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="w-full lg:w-2/3">
          <div className="content mb-10">
            <h1 className="font-bold text-white text-3xl md:text-[40px] leading-tight mb-4">
              Have a Questions? <br className="hidden md:block" />
              Get in Touch
            </h1>
            <p className="max-w-xl text-white/50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Name Input */}
              <div className="relative flex-1">
                <FaRegUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-lg" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-12 pr-4 py-3 border border-white/30 rounded-lg outline-none bg-transparent text-white placeholder:text-white/50 focus:border-mainColor transition-colors"
                />
              </div>

              <div className="relative flex-1">
                <MdOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-lg" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3 border border-white/30 rounded-lg outline-none bg-transparent text-white placeholder:text-white/50 focus:border-mainColor transition-colors"
                />
              </div>
            </div>

            <div className="relative w-full">
              <FaPen className="absolute left-4 top-4 text-white/50 text-lg" />
              <textarea
                placeholder="Your Message"
                className="w-full h-48 md:h-64 pl-12 pr-4 pt-4 pb-3 border border-white/30 rounded-lg outline-none bg-transparent text-white placeholder:text-white/50 resize-none focus:border-mainColor transition-colors"
              ></textarea>
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="bg-mainColor text-white px-10 py-3 rounded-lg cursor-pointer hover:brightness-90 transition-all font-semibold active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-8 md:gap-10 py-10 lg:py-0">
          <ContactDetail icon={<FaPhoneVolume />} text="01123456789" />
          <ContactDetail icon={<RiMessage2Line />} text="Example@gmail.com" />
          <ContactDetail
            icon={<CiLocationOn />}
            text={
              <>
                adipiscing elit. Mauris et ultricies
                <br />
                est. Aliquam in justo varius,
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

const ContactDetail = ({ icon, text }) => (
  <div className="flex gap-4 items-center group">
    <div className="bg-white p-3 rounded-md transition-transform group-hover:scale-110">
      <span className="text-mainColor text-xl">{icon}</span>
    </div>
    <h3 className="text-white text-sm md:text-base leading-relaxed">{text}</h3>
  </div>
);

export default AboutQuestions;
