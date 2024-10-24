"use client";
import { IoLockClosedOutline } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";
import { PiRocketLaunch } from "react-icons/pi";
import { LiaCogSolid } from "react-icons/lia";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const WebHostingFeatures = () => {
  const features = [
    {
      title: "Maximum Performance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <PiRocketLaunch size={50} />,
    },
    {
      title: "WordPress Pre-Installed",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: <LiaCogSolid size={50} />,
    },
    {
      title: "Free SSL Certificate",
      description:
        "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.",
      icon: <BsShieldCheck size={50} />,
    },
    {
      title: "Secure Data Backup",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      icon: <IoLockClosedOutline size={50} />,
    },
  ];

  return (
    <section className="bg-whiteColor py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Advanced Web Hosting Features
        </h2>
        <p className="text-center text-lg mb-10">
          Our web hosting solutions are an easy way to get a great website up
          and running, with so many robust features we throw in a domain, SSL
          Certificate, professional email address, and privacy protection for
          free.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-whiteColor px-6 py-12 shadow-lg text-center border hover:bg-skinColor transition-colors duration-300"
            >
              <div className=" mb-8 flex items-center justify-center">
                <div className="bg-blackColor text-whiteColor p-4 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6">{feature.title}</h3>
              <p className="mb-10">{feature.description}</p>
              <Link
                href="#"
                className="flex items-center justify-center mr-2 font-bold text-blackColor hover:underline transition-colors duration-300"
              >
                <FaArrowRight /> Learn More Info
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebHostingFeatures;
