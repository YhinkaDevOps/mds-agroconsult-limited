"use client";

import { Link } from "react-scroll";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import backgroundImage from "../../public/assets/hero-bg.jpg";

// Import Swiper styles
import "swiper/css";

const Hero = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
        className="hero-image min-h-screen "
        name="/"
      ></div>
      <div className="bg-text mt-28">
        <Swiper className="mySwiper">
          <SwiperSlide>
            <div className="font-sans flex flex-col gap-8">
              <h1 className="text-4xl tracking-tight">
                Cultivating Growth Together: Your Premier Agro-Solutions Partner
              </h1>
              <p>
                At MDS Agroconsult Limited, we sow the seeds of innovation,
                nurture growth, and reap the rewards of agricultural excellence.
                As a premier agro-based firm, we specialize in every facet of
                crop farming and consultancy, offering a comprehensive range of
                products and services tailored to meet the diverse needs of our
                clients.
              </p>

              <div>
                <button className="px-7 py-3 bg-[#7CFC00] rounded-md hover:bg-orange-600 transition duration-300 ease-in-out">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                  >
                    Learn More
                  </Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
