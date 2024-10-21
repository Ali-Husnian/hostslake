"use client";
import { FaCheck } from "react-icons/fa"; // Importing React Icons
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const HostingPlans = () => {
  const plans = [
    {
      title: "Shared",
      description:
        "We provide premium website & well Fastest hosting as well as.",
      price: "$12.99",
      icon: "/shared-icon.png",
      link: "/shared",
      features: [
        "Single Domain",
        "One Click Installs",
        "Unlimited Bandwidth",
        "SSL Certificate",
      ],
    },
    {
      title: "Dedicated",
      description:
        "We provide premium website & well Fastest hosting as well as.",
      price: "$48.99",
      icon: "/dedicated-icon.png",
      link: "/dedicated",
      features: [
        "4 GB Memory",
        "2 Core CPU",
        "0.5 TB Disk (RAID-1)",
        "10 TB Bandwidth",
      ],
    },
    {
      title: "VPS",
      description:
        "We provide premium website & well Fastest hosting as well as.",
      price: "$26.99",
      icon: "/vps-icon.png",
      link: "/vps",
      features: [
        "2 GB RAM",
        "2 Cores CPU",
        "120 GB Disk Space",
        "1.5 TB Bandwidth",
      ],
    },
  ];

  return (
    <section className="bg-slate-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Choose Hosting Plan for your Needs
        </h2>
        <p className="text-center text-lg mb-10">
          We provide premium website & Fastest hosting as well as offering our
          web development and administration services to our amazing customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg border group hover:bg-card transition"
            >
              <div className="flex justify-start items-center gap-1 mb-4">
                <div className="h-5 w-5">
                  <Image src={plan.icon} alt="" height={50} width={50} />{" "}
                </div>
                <h3 className="text-3xl font-bold inline-block">
                  {plan.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center py-2 mb-2 border-b-[1px] border-gray group-hover:border-white"
                  >
                    <FaCheck className="text-black mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold mb-6">Starting at:</p>
              <p className="text-3xl font-bold">
                {plan.price}
                <span className="text-sm font-normal"> /month</span>
              </p>
              <Link
                href={plan.link}
                className="flex items-center justify-center mt-6 w-full text-black bg-white py-3 px-4 font-bold text-center hover:text-white hover:bg-black border transition"
              >
                <FaArrowRight className="mr-2" /> Discover Plan{" "}
              </Link>
            </div>
          ))}
        </div>
        <center className="mt-14">
          <h2 className="text-3xl font-bold text-center mb-6">
            Questions? Call or Text me Today! 800.123.4567
          </h2>
          <Link
            href="#"
            className="flex items-center justify-center mt-6  text-black bg-white py-3 px-6 h-50px w-250px text-sm text-center hover:text-white hover:bg-black border transition"
          >
            <FaArrowRight className="mr-2" /> view all features{" "}
          </Link>
        </center>
      </div>
    </section>
  );
};

export default HostingPlans;
