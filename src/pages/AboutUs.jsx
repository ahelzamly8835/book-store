import React from "react";
import HeaderLogin from "./HeaderLogin";
import AboutMission from "./AboutMission";
import AboutQuestions from "./AboutQuestions";
import Service from "./Service";
import Footer from "../components/ui/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5] overflow-x-hidden">
      <HeaderLogin
        showSearch={false}
        overlayColor="bg-black/70"
        customContent={
          <div className="flex flex-col items-center px-4 text-center">
            <h1 className="text-white text-3xl md:text-[48px] font-bold mb-4 tracking-tight">
              About Bookshop
            </h1>
            <div className="text-white/90 max-w-xl mx-auto">
              <p className="text-sm md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
            </div>
          </div>
        }
      />

      <main className="flex-grow">
        <section className="py-10 md:py-16">
          <AboutMission />
        </section>

        <section className="py-10 md:py-20 bg-[#3B2F4A]">
          <AboutQuestions />
        </section>

        <section className="py-16 md:py-24">
          <Service />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
