"use client";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi"; // Importing icons

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // To handle multiple dropdowns
  const [activeLink, setActiveLink] = useState(""); // To track the active link

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setNavOpen(false); // Close mobile menu when a link is clicked
  };

  const linkClass = (link) => {
    return activeLink === link ? " text-green-500" : " hover:text-gray-400";
  };

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">HOSTIKO 2.0</div>

        {/* Middle Nav Items */}
        <div className="flex gap-4">
          <ul className="hidden md:flex space-x-10 items-center">
            {/* Hosting Dropdown */}
            <li className="relative group">
              <button
                onMouseEnter={() => toggleDropdown("hosting")}
                className="hover:text-gray-400 flex items-center gap-1"
              >
                Hosting{" "}
                <FiChevronDown
                  className={`transition-transform ${
                    dropdownOpen === "hosting" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Desktop Dropdown */}
              {dropdownOpen === "hosting" && (
                <ul
                  onMouseLeave={() => toggleDropdown("hosting")}
                  className="absolute top-full left-0 bg-white text-black shadow-lg py-2 w-40 z-50 "
                >
                  <li className="px-4 py-2 hover:bg-light-gray">
                    <a
                      href="#"
                      onClick={() => handleLinkClick("shared")}
                      className={linkClass("shared")}
                    >
                      Shared
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-gray">
                    <a
                      href="#"
                      onClick={() => handleLinkClick("reseller")}
                      className={linkClass("reseller")}
                    >
                      Reseller
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-gray">
                    <a
                      href="#"
                      onClick={() => handleLinkClick("vps")}
                      className={linkClass("vps")}
                    >
                      VPS
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-gray">
                    <a
                      href="#"
                      onClick={() => handleLinkClick("dedicated")}
                      className={linkClass("dedicated")}
                    >
                      Dedicated
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("domain")}
                className={linkClass("domain")}
              >
                Domain
              </a>
            </li>

            {/* WHMCS Dropdown */}
            <li className="relative group">
              <button
                onMouseEnter={() => toggleDropdown("whmcs")}
                className="hover:text-gray-400 flex items-center gap-1"
              >
                WHMCS{" "}
                <FiChevronDown
                  className={`transition-transform ${
                    dropdownOpen === "whmcs" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Desktop Dropdown */}
              {dropdownOpen === "whmcs" && (
                <ul
                  onMouseLeave={() => toggleDropdown("whmcs")}
                  className="absolute top-full left-0 bg-white text-black shadow-lg py-2 w-40 z-50"
                >
                  <li className="px-4 py-2 hover:bg-light-gray">
                    <a
                      href="#"
                      onClick={() => handleLinkClick("integration")}
                      className={linkClass("integration")}
                    >
                      Integration
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-gray">
                    <a
                      href="#"
                      onClick={() => handleLinkClick("automation")}
                      className={linkClass("automation")}
                    >
                      Automation
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-gray">
                    <a
                      href="#"
                      onClick={() => handleLinkClick("pricing")}
                      className={linkClass("pricing")}
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Pages */}
            <li className="relative group">
              <button
                onMouseEnter={() => toggleDropdown("pages")}
                className="hover:text-gray-400 flex items-center gap-1"
              >
                Pages{" "}
                <FiChevronDown
                  className={`transition-transform ${
                    dropdownOpen === "pages" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Desktop Dropdown */}
              {dropdownOpen === "pages" && (
                <ul
                  onMouseLeave={() => toggleDropdown("pages")}
                  className="absolute top-full left-0 bg-white text-black shadow-lg py-2 w-40 z-50"
                >
                  <li className="px-4 py-2 hover:bg-light-gray">
                    <a
                      href="#"
                      onClick={() => handleLinkClick("about")}
                      className={linkClass("about")}
                    >
                      About Us
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-gray">
                    <a
                      href="#"
                      onClick={() => handleLinkClick("pricing")}
                      className={linkClass("pricing")}
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-gray">
                    <a
                      href="#"
                      onClick={() => handleLinkClick("blog")}
                      className={linkClass("blog")}
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("contact")}
                className={linkClass("contact")}
              >
                Contact
              </a>
            </li>
            <li>
              <button className="bg-black border py-2 px-4 border-white hover:bg-[#FFF5E9] hover:text-black transition-colors">
                Live Chat
              </button>
            </li>
          </ul>

          {/* Right side icons (cart + menu toggle for mobile) */}
          <div className="flex items-center space-x-4">
            {/* Cart button */}
            <button className="text-black focus:outline-none bg-white items-center p-2 rounded-full">
              <FaCartShopping size={24} />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={toggleNav}
              className="md:hidden text-white focus:outline-none"
            >
              {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/*--------------------------------- Mobile menu ---------------------------------*/}
      {navOpen && (
        <ul className="md:hidden bg-black text-white space-y-4 py-4">
          <li>
            <button
              onClick={() => toggleDropdown("hosting")}
              className="hover:text-gray-400 flex items-center w-full px-4 gap-1"
            >
              Hosting{" "}
              <FiChevronDown
                className={`transition-transform ${
                  dropdownOpen === "hosting" ? "rotate-180" : ""
                }`}
              />
            </button>
            {/* Mobile Dropdown */}
            {dropdownOpen === "hosting" && (
              <ul className="text-left space-y-2 pl-8 py-2">
                <li>
                  <a
                    href="#"
                    onClick={() => handleLinkClick("shared")}
                    className={linkClass("shared")}
                  >
                    Shared
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleLinkClick("reseller")}
                    className={linkClass("reseller")}
                  >
                    Reseller
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleLinkClick("vps")}
                    className={linkClass("vps")}
                  >
                    VPS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleLinkClick("dedicated")}
                    className={linkClass("dedicated")}
                  >
                    Dedicated
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Other Links */}
          <li>
            <a
              href="#"
              onClick={() => handleLinkClick("domain")}
              className={`px-4` + linkClass("domain")}
            >
              Domain
            </a>
          </li>
          <li>
            <button
              onClick={() => toggleDropdown("whmcs")}
              className="hover:text-gray-400 flex items-center w-full px-4 gap-1"
            >
              WHMCS{" "}
              <FiChevronDown
                className={`transition-transform ${
                  dropdownOpen === "whmcs" ? "rotate-180" : ""
                }`}
              />
            </button>
            {/* Mobile Dropdown */}
            {dropdownOpen === "whmcs" && (
              <ul className="text-left space-y-2 pl-8 py-2">
                <li>
                  <a
                    href="#"
                    onClick={() => handleLinkClick("integration")}
                    className={linkClass("integration")}
                  >
                    Integration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleLinkClick("automation")}
                    className={linkClass("automation")}
                  >
                    Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleLinkClick("pricing")}
                    className={linkClass("pricing")}
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => toggleDropdown("pages")}
              className="hover:text-gray-400 flex items-center w-full px-4 gap-1"
            >
              Pages{" "}
              <FiChevronDown
                className={`transition-transform ${
                  dropdownOpen === "pages" ? "rotate-180" : ""
                }`}
              />
            </button>
            {/* Mobile Dropdown */}
            {dropdownOpen === "pages" && (
              <ul className="text-left space-y-2 pl-8 py-2">
                <li>
                  <a
                    href="#"
                    onClick={() => handleLinkClick("about")}
                    className={linkClass("about")}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleLinkClick("pricing")}
                    className={linkClass("pricing")}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleLinkClick("blog")}
                    className={linkClass("blog")}
                  >
                    Blog
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleLinkClick("contact")}
              className={`px-4` + linkClass("contact")}
            >
              Contact
            </a>
          </li>
          <li className="px-4">
            <button
              onClick={() => setNavOpen(false)}
              className="bg-black border py-2 px-4 border-white hover:bg-[#FFF5E9] hover:text-black transition-colors"
            >
              Live Chat
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
