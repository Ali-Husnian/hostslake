"use client";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { IoIosArrowDown, IoIosMail } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import Headroom from "react-headroom";
import Link from "next/link";

// Navigation items data
const navItems = [
  { label: "Home", link: "/" },
  {
    label: "Hosting",
    link: "#",
    children: [
      { label: "BUFGET HOSTING", link: "/budget-hosting" },
      { label: "POWER HOSTING", link: "/power-hosting" },
      { label: "BUSSINESS HOSTING", link: "/bussiness-hosting" },
      { label: "VPS HOSTING", link: "/vps-hosting" },
    ],
  },

  {
    label: "Domain",
    link: "#",
    children: [
      { label: "DOMAIN CHECKER", link: "/domain-checker" },
      { label: "DOMAIN SRANSFER", link: "/domain-transfer" },
    ],
  },
  {
    label: "Support",
    link: "#",
    children: [
      { label: "HELP CENTER", link: "/help-center" },
      { label: "KNOWLEDGE BASE", link: "/knowledge-base" },
      { label: "ANNONCEMENTS", link: "/annoncements" },
      { label: "NETWORK STATUS", link: "/network-status" },
    ],
  },

  { label: "Company", link: "/contact" },
  { label: "Affiliate", link: "/affiliate" },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <>
      <Headroom className="absolute m-auto right-0 left-0">
        <nav
          className={`right-0 left-0 flex w-full items-center justify-between max-sm:justify-between ${
            !isSideMenuOpen && "py-3"
          } lg:py-0 text-sm shadow-md bg-black`}
        >
          <div className="container mx-auto flex items-center justify-between">
            {!isSideMenuOpen && (
              <Link href="/">
                <Image
                  src="/white-logo.png"
                  width={150}
                  height={150}
                  alt="logo"
                  className="p-0 lg:py-2"
                />
              </Link>
            )}
            <section ref={animationParent} className="flex items-center gap-10">
              <div className="hidden lg:flex items-center gap-4 transition-all">
                {navItems.map((d, i) => (
                  <div
                    key={i}
                    className="relative group px-2 py-5 transition-all border-b-4 border-transparent hover:border-orange-color"
                  >
                    <Link href={d.link ?? "#"}>
                      <p
                        className={`flex cursor-pointer items-center gap-2 text-heading-color lg:text-white font-bold ${
                          pathname === d.link ? "text-green-500" : "text-black"
                        }`}
                      >
                        <span>{d.label}</span>
                        {d.children && (
                          <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                        )}
                      </p>
                    </Link>
                    {d.children && (
                      <div className="absolute group left-0 top-[64px] hidden w-auto flex-col gap-1 rounded-b-sm bg-white py-3 shadow-md transition-all group-hover:flex">
                        {d.children.map((ch, i) => (
                          <Link
                            key={i}
                            href={ch.link ?? "#"}
                            className={`flex cursor-pointer items-center py-1 pl-6 pr-8 text-text-color hover:text-green-color ${
                              pathname === ch.link
                                ? "text-green-500"
                                : "text-black"
                            }`}
                          >
                            <span className="whitespace-nowrap pl-3">
                              {ch.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="hidden lg:flex items-center gap-2">
                  <button className="bg-black border py-2 px-4 border-white text-white hover:bg-[#FFF5E9] hover:text-black transition-colors">
                    Live Chat
                  </button>
                </div>
              </div>
              {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
            </section>
            <FiMenu
              onClick={openSideMenu}
              className={`cursor-pointer text-white text-4xl block lg:hidden ${
                isSideMenuOpen && "hidden"
              }`}
            />
          </div>
        </nav>
      </Headroom>
    </>
  );
}

function MobileNav({ closeSideMenu }) {
  const pathname = usePathname(); // Get current pathname for mobile as well

  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-start bg-black/60 md:flex lg:hidden">
      <div className="h-full w-[65%] overflow-auto bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          <Link href="/">
            <Image
              src="/white-logo.png"
              width={150}
              height={75}
              alt="logo"
              className="bg-black py-2 px-4 "
            />
          </Link>

          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              link={d.link}
              children={d.children}
              closeSideMenu={closeSideMenu}
              pathname={pathname}
            />
          ))}
        </div>

        <section className="flex flex-col gap-4 mt-4 items-start text-gray-800">
          <button className="bg-black border text-white py-2 px-4 border-white hover:bg-[#FFF5E9] hover:text-black transition-colors">
            Live Chat
          </button>
        </section>

        {/*
          <section className="flex flex-col gap-4 mt-4 items-start text-gray-800">
          <a href="tel:+96871197788" className="flex items-center space-x-2">
            <MdPhoneInTalk className="text-orange-color text-3xl font-bold" />
            <span>
              <b className="text-heading-color">Call Now:</b> <br />
              <strong className="text-sm font-light text-text-color">
                +971501384504
              </strong>
            </span>
          </a>

          <Link
            href="mailto:info@learndigitalmarketing.academy"
            className="flex items-center space-x-2"
          >
            <IoIosMail className="text-orange-color text-3xl font-bold" />
            <span>
              <b className="text-heading-color">Mail us for help:</b> <br />
              <strong className="text-sm font-light text-text-color">
                info@learndigitalmarketing.academy
              </strong>
            </span>
          </Link>

          <Link
            href="https://maps.app.goo.gl/rKQU2nfkKxoG4DUN9"
            target="_blank"
            className="flex items-center space-x-2"
          >
            <MdLocationOn className="text-orange-color text-3xl font-bold" />
            <span>
              <b className="text-heading-color">09, SAIF Zone 514789</b> <br />
              <strong className="text-sm font-light text-text-color">
                Dubai UAE
              </strong>
            </span>
          </Link>
        </section>
          */}
      </div>
    </div>
  );
}

function SingleNavItem({ label, link, children, closeSideMenu, pathname }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown() {
    setDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className="w-full border-b-[1px] border-gray-200">
      {!children ? (
        <Link
          href={link}
          onClick={closeSideMenu}
          className={`text-[15px] font-normal flex justify-start items-center py-2 px-2 gap-2 cursor-pointer hover:bg-slate-200 w-full ${
            pathname === link ? "text-green-500" : "text-black"
          }`}
        >
          {label}
        </Link>
      ) : (
        <div className="py-1 transition-all">
          <button
            className="text-[15px] font-normal flex justify-between items-center py-2 px-2 gap-2 cursor-pointer w-full hover:bg-slate-200"
            onClick={toggleDropdown}
          >
            {label}
            <IoIosArrowDown
              className={`transition-all ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="flex flex-col gap-2 transition-all">
              {children.map((ch, i) => (
                <Link
                  key={i}
                  href={ch.link}
                  onClick={closeSideMenu}
                  className={`text-[15px] font-normal flex justify-start items-center py-2 px-2 gap-2 cursor-pointer hover:bg-slate-200 w-full ${
                    pathname === ch.link ? "text-green-500" : "text-black"
                  }`}
                >
                  {ch.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}