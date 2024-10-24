import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import SquareIcon from "@/app/icons/squareIcon";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blackColor text-whiteColor pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and Description Section */}
          <div className="w-full md:w-1/4 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image src="/white-logo.png" width={150} height={150} alt="logo" />
            <p className="text-sm">
              Quia voluptas sit asper aut odit aut fugit sed quia consequuntur
              magni nesciunt ese cium aorro...
            </p>
            <div className="flex space-x-2">
              <a
                href="#"
                className="transition-colors duration-300 hover:text-skinColor"
              >
                <div className="flex items-center justify-center text-whiteColor hover:text-blackColor transition-colors duration-300 hover:bg-skinColor h-10 w-10 rounded-full">
                  <FaFacebookF />
                </div>
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-skinColor"
              >
                <div className="flex items-center justify-center text-whiteColor hover:text-blackColor transition-colors duration-300 hover:bg-skinColor h-10 w-10 rounded-full">
                  <FaTwitter />
                </div>
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-skinColor"
              >
                <div className="flex items-center justify-center text-whiteColor hover:text-blackColor transition-colors duration-300 hover:bg-skinColor h-10 w-10 rounded-full">
                  <FaLinkedinIn />
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-skinColor text-sm"
                >
                  <span className="flex items-center">
                    <SquareIcon /> Home
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-skinColor text-sm"
                >
                  <span className="flex items-center ">
                    <SquareIcon /> About
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-skinColor text-sm"
                >
                  <span className="flex items-center ">
                    <SquareIcon /> Support
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-skinColor text-sm"
                >
                  <span className="flex items-center">
                    <SquareIcon /> Domain
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-skinColor text-sm"
                >
                  <span className="flex items-center">
                    <SquareIcon /> Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-skinColor text-sm"
                >
                  <span className="flex items-center">
                    <SquareIcon /> Budget Hosting
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-skinColor text-sm"
                >
                  <span className="flex items-center">
                    <SquareIcon /> Power Hosting
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-skinColor text-sm"
                >
                  <span className="flex items-center">
                    <SquareIcon /> Bussiness Hosting
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-skinColor text-sm"
                >
                  <span className="flex items-center">
                    <SquareIcon /> VPS Hosting
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-skinColor text-sm"
                >
                  <span className="flex items-center">
                    <SquareIcon /> Blogs
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <span className="flex items-center gap-2 transition-colors duration-300 hover:text-skinColor text-sm ">
                  <FaPhoneAlt /> +971501384504
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 transition-colors duration-300 hover:text-skinColor text-sm">
                  {" "}
                  <FaEnvelope /> info@hostslake.com
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 transition-colors duration-300 hover:text-skinColor text-sm">
                  <FaLocationDot /> 09, SAIF Zone 514789 Dubai UAE
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" bg-darkColor py-5 mt-16 text-center text-gray-500">
        <p>Copyright © Hostslake® 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
