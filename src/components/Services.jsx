"use client";
import React from "react";
// import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="font-serif min-h-[300px] mx-auto py-12 flex flex-col">
      <div className="px-4 lg:px-0">
        <h6 className="text-center mb-5 text-2xl">
          WELCOME TO JAYKHADINE FARMS LIMITED
        </h6>
        <p className="text-center lg:mx-[200px] mb-5">
          Located in the heart of Sango Ota, we take pride in our commitment to
          sustainable agriculture and excellence in farming practices. At
          Jaykhadine Farms, we specialize in both crop and animal production,
          striving to provide the finest quality produce to our valued
          customers.
        </p>

        <p className="text-center lg:mx-[200px] mb-5">
          With a focus on innovation and environmental stewardship, our team is
          dedicated to leveraging modern farming techniques to maximize yields
          while minimizing our ecological footprint. From cultivating a wide
          range of crops to raising healthy livestock, we ensure that every
          aspect of our operation reflects our core values of integrity,
          quality, and sustainability.
        </p>

        <p className="text-center lg:mx-[200px] mb-5">
          In addition to our farming activities, we also offer hunting and
          related services, providing outdoor enthusiasts with memorable
          experiences in nature.
        </p>

        <p className="text-center lg:mx-[200px] mb-10">
          Join us on our journey as we continue to grow, nurture, and harvest
          the bounty of our land, serving our community and beyond with the
          finest agricultural products and services.
        </p>

        <h6 className="text-center text-3xl">WHAT WE DO</h6>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mx-auto max-w-[1000px] p-2 mt-5 ">
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[20px]">Animal Production</p>
            <p className="text-[#8f8f8f] text-justify">
              Dive into a world where the journey matters just as much as the
              destination. With Jaykhadine Farms, every step of our animal
              production process is infused with care and commitment to
              sustainability. From ethically sourced feeds to meticulous
              husbandry practices, we guarantee products that delight both
              palate and conscience.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[20px] text-center">
              Hunting and Outdoor Adventures
            </p>
            <p className="text-[#8f8f8f] text-justify">
              Dive into the heart of nature's playground with our exhilarating
              hunting and outdoor adventures. Whether you seek the thrill of the
              chase or the serenity of the wilderness, our expert guides and
              pristine landscapes promise an unforgettable journey into the
              great outdoors.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[20px] text-center">
              Crop Production Solutions
            </p>
            <p className="text-[#8f8f8f] text-justify">
              Embark on a journey of growth and innovation with Jaykhadine
              Farms. Our crop production solutions blend time-honored
              agricultural practices with cutting-edge technology, ensuring
              bountiful harvests that sustain both land and livelihoods.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[20px] text-center">
              Butcher Services
            </p>
            <p className="text-[#8f8f8f] text-justify">
              Precision, passion, and perfection define our approach to butchery
              at Jaykhadine Farms Limited. With a relentless commitment to
              quality and a deep respect for the craft, our skilled butchers
              deliver cuts that are not just meat, but masterpieces – each one a
              testament to our dedication to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
