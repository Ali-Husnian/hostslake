import Image from "next/image";
import React from "react";

const CompaniesLogos = () => {
  return (
    <section className="bg-whiteColor py-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 items-center justify-between px-0 lg:px-6">
          <Image
            src="/companies-logos1.png"
            alt="companies-logos-1"
            loading="lazy"
            width={150}
            height={50}
            className="grayscale hover:grayscale-0 cursor-pointer transition duration-300"
          />
          <Image
            src="/companies-logos2.png"
            alt="companies-logos-2"
            loading="lazy"
            width={150}
            height={50}
            className="grayscale hover:grayscale-0 cursor-pointer transition duration-300"
          />
          <Image
            src="/companies-logos3.png"
            alt="companies-logos-3"
            loading="lazy"
            width={150}
            height={50}
            className="grayscale hover:grayscale-0 cursor-pointer transition duration-300"
          />
          <Image
            src="/companies-logos4.png"
            alt="companies-logos-4"
            loading="lazy"
            width={150}
            height={50}
            className="grayscale hover:grayscale-0 cursor-pointer transition duration-300"
          />
          <Image
            src="/companies-logos5.png"
            alt="companies-logos-5"
            loading="lazy"
            width={150}
            height={50}
            className="grayscale hover:grayscale-0 cursor-pointer transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default CompaniesLogos;
