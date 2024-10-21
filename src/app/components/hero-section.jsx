"use client";
import React from "react";

const HeroSection = () => {
  const stDesktop = {
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundImage: "url('/banner-bg.png')",
  };

  return (
    <>
      {/* Hero section for desktop */}
      <section
        className="hidden lg:block h-[500px] bg-[#C2DBEF]"
        style={stDesktop}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-full lg:w-1/2 mt-[125px]">
            <h1 className="text-5xl font-bold text-black">
              Web Hosting plan <br /> for your business
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              For plenty of power and room to grow, go Dedicated <br /> and get
              the whole box to yourself.
            </p>
            <button className="mt-6 px-8 py-4 bg-black text-white font-bold tracking-wide hover:bg-white hover:text-black transition-colors duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Hero section for mobile */}
      <section className="block lg:hidden h-[350px] bg-[#C2DBEF]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-full lg:w-1/2 mt-[80px]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-black text-center text-wrap">
                Web Hosting plan for your business
              </h1>
              <p className="mt-4 text-sm text-gray-700 text-center text-wrap">
                For plenty of power and room to grow, go Dedicated and get the
                whole box to yourself.
              </p>

              <button className="mt-6 px-6 py-3 bg-black text-white font-bold tracking-wide text-sm hover:bg-white hover:text-black transition-colors duration-300">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
