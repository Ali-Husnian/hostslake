import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const WebsiteBulider = () => {
  return (
    <section className="bg-lightSkyBlueColor py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left lg:justify-between ">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-blackColor">
              Build Your Website with Hostslak
            </h2>
            <p className="text-blackColor text-lg font-medium">
              From professional business to enterprise, we’ve got you covered!
            </p>
          </div>

          <Link
            href="#"
            className="flex items-center justify-center mt-6  bg-blackColor text-whiteColor py-3 px-6 h-50px w-250px text-sm text-center hover:bg-whiteColor hover:text-blackColor transition-colors duration-300"
          >
            <FaArrowRight className="mr-2" /> Get Started Now{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebsiteBulider;
