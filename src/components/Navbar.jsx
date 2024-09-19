"use client";
// import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const handleClick = () => setisClick(!isClick);

  return (
    <nav className="font-sans navbar w-full fixed z-50 bg-white md:px-[20px] lg:px-[50px] xl:px-[80px]">
      <div className="mx-auto py-4 px-2 md:pb-8 md:pt-2">
        <div className="flex justify-between items-end">
          <Link to="/" spy={true} smooth={true} duration={500}>
            <button className="text-[#900C3F] font-bold hover:opacity-70 flex items-center flex-shrink-0 pt-5">
              <Image
                src="/assets/mds.png"
                width={30}
                height={65}
                alt="mds-logo"
              />
              MDS Agroconsult Limited
            </button>
          </Link>

          <div className="hidden md:block">
            <ul className="nav-list flex gap-x-9 items-center text-base">
              <li className="cursor-pointer text-black font-medium text-sm hover:text-[#900C3F]">
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="capitalize"
                >
                  HOME
                </Link>
              </li>
              <li className="cursor-pointer text-black font-medium text-sm hover:text-[#900C3F]">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-55}
                >
                  ABOUT US
                </Link>
              </li>
              <li className="cursor-pointer text-black font-medium text-sm hover:text-[#900C3F]">
                <Link
                  to="service"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-55}
                >
                  SERVICES
                </Link>
              </li>
              <li className="cursor-pointer text-black font-medium text-sm hover:text-[#900C3F]">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-55}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center p-2 rounded-md focus:outline-none md:hidden border-2 border-[#333663]">
            <button onClick={handleClick}>
              {isClick ? (
                <FaTimes color="#333663" size={30} />
              ) : (
                <FaBars color="#333663" size={30} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div>
        {isClick && (
          <div className="bg-[#333663] md:hidden">
            <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
              <ul className="list-none space-y-2">
                <li className="cursor-pointer text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="capitalize"
                  >
                    HOME
                  </Link>
                </li>
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55}
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link
                    to="service"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55}
                  >
                    SERVICES
                  </Link>
                </li>
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
