import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" min-h-[200px] bg-[#333663] text-white px-4 py-10 md:py-16 border-dashed border-b-[1px] border-b-white">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 ">
        <div className="flex flex-col gap-2">
          <span className="hover:opacity-70 flex items-center flex-shrink-0">
            <Image
              src="/assets/mds.png"
              width={50}
              height={50}
              alt="footer-logo"
            />
          </span>

          <span className="text-sm">MDS Agroconsult Limited</span>
        </div>

        {/* Contact us */}
        <div className="pt-2 flex flex-col gap-2 md:items-center">
          <Link href="/contact">
            <button className="hover:opacity-70 flex items-center flex-shrink-0 font-bold hover:underline">
              Contact Us
            </button>
          </Link>
          {/* <span className="text-sm">
            https://chimkasimmatransportservices.vercel.app/
          </span> */}
          <span className="text-sm">+(234) 08056448422 - enquiry</span>
          <span className="text-sm">+(234) 08034665279</span>
          <span className="text-sm">mdsagroconsultlimited@gmail.com</span>
        </div>

        {/* Social Links */}
        <div className="pt-2 flex flex-col gap-2 md:items-center">
          <h1 className="font-bold">Connect With Us</h1>
          <div className="flex flex-row gap-3">
            {/* <button className="hover:opacity-70">
              <Link href="https://www.instagram.com/jaykhadinefarms/">
                <FaInstagram size={30} />
              </Link>
            </button> */}

            <button className="hover:opacity-70">
              <Link href="/">
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
