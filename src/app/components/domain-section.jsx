"use client";
import React, { useState } from "react";
import { FaSearch, FaExchangeAlt } from "react-icons/fa";

const DomainSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
    // Implement your search logic here
  };
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Register Your Domain</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur sunt in culpa qui officia deserunt
          mollit anim.
        </p>

        {/* Search and Transfer Section */}
        <div className="flex flex-col p-1  lg:flex-row lg:items-center lg:space-x-4 max-w-4xl mx-auto  lg:border border-gray-400">
          {/* Input field */}
          <input
            value={searchTerm}
            onChange={handleSearch}
            type="text"
            placeholder="eg. example.com"
            className="w-full px-4 py-3 text-gray-600 focus:outline-none mb-4 lg:mb-0 p-1 border lg:border-none border-gray-400 "
          />

          {/* Buttons */}
          <div className="flex space-x-4 lg:space-x-0 lg:space-y-0 lg:flex-row gap-1">
            {/* Search button */}
            <button className="w-full lg:w-auto px-6 py-3 border border-gray-400 bg-black text-white font-semibold hover:bg-gray-200 transition mt-4 lg:mt-0 hover:bg-[#F0D9C3] hover:text-black flex justify-center items-center">
              <FaSearch className="mr-2" /> Search
            </button>

            {/* Transfer button */}
            <button className="w-full lg:w-auto px-6 py-3 border border-gray-400 text-black font-semibold hover:bg-gray-200 transition mt-4 lg:mt-0  hover:bg-[#F0D9C3] flex justify-center items-center">
              <FaExchangeAlt className="mr-2" /> Transfer
            </button>
          </div>
        </div>

        {/* Domain Prices */}
        <div className="flex justify-center items-center space-x-8 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
            {/* Placeholder for .com logo */}
            <p className="mt-2 text-lg font-bold">.com</p>
            <p className="text-gray-600">$5.99</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
            {/* Placeholder for .net logo */}
            <p className="mt-2 text-lg font-bold">.net</p>
            <p className="text-gray-600">$8.99</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
            {/* Placeholder for .org logo */}
            <p className="mt-2 text-lg font-bold">.org</p>
            <p className="text-gray-600">$12.99</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
            {/* Placeholder for .biz logo */}
            <p className="mt-2 text-lg font-bold">.biz</p>
            <p className="text-gray-600">$18.49</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
            {/* Placeholder for .info logo */}
            <p className="mt-2 text-lg font-bold">.info</p>
            <p className="text-gray-600">$21.99</p>
          </div>
        </div>

        {/* View Pricing Link */}
        <p className="text-gray-600">
          <a href="#" className="text-black font-semibold hover:underline">
            View All Pricing
          </a>
        </p>
      </div>
    </section>
  );
};

export default DomainSection;
