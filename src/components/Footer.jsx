import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" min-h-[200px] bg-[#32CD32] text-white px-4 py-10 md:py-16 border-dashed border-b-[1px] border-b-white">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 ">
        <div className="flex flex-col gap-2">
          <span className="hover:opacity-70 flex items-center flex-shrink-0">
            <Image
              src="/assets/jaykhadine.png"
              width={100}
              height={65}
              alt="footer-logo"
            />
          </span>

          <span className="text-sm">Jaykhadine Farms Limited</span>
        </div>

        {/* Contact us */}
        <div className="pt-2 flex flex-col gap-2">
          <Link href="/contact">
            <button className="hover:opacity-70 flex items-center flex-shrink-0 font-bold hover:underline">
              Contact Us
            </button>
          </Link>
          {/* <span className="text-sm">
            https://chimkasimmatransportservices.vercel.app/
          </span> */}
          <span className="text-sm">+(234) 08035691101 - enquiry</span>
          <span className="text-sm">+(234) 08122512867</span>
          <span className="text-sm">jaykhadinefarms@gmail.com</span>
        </div>

        {/* Useful links */}
        {/* <div className="pt-2 flex flex-col gap-2">
          <h1 className="font-bold">Useful Links</h1>
          <Link href="#">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0  hover:underline">
              Terms and conditions
            </button>
          </Link>
          <Link href="#">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Privacy policy
            </button>
          </Link>
        </div> */}

        {/* Social Links */}
        <div className="pt-2 flex flex-col gap-2">
          <h1 className="font-bold">Connect With Us</h1>
          <div className="flex flex-row gap-3">
            <button className="hover:opacity-70">
              <Link href="https://www.instagram.com/jaykhadinefarms/">
                <FaInstagram size={30} />
              </Link>
            </button>

            <button className="hover:opacity-70">
              <Link href="https://www.linkedin.com/in/igbeia-joseph-761b0bb2?originalSubdomain=ng">
                <FaLinkedin size={30} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
