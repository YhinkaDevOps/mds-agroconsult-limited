"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

// Import Swiper styles
import "swiper/css";

const Hero = () => {
  return (
    <div className="hero-image min-h-screen">
      <div className="bg-text mt-28">
        <Swiper className="mySwiper">
          {/* <SwiperSlide className="animate__animated animate__bounce">
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl leading-10">
                Where Purity Meets Process, Excellence &nbsp;
                <span className="text-red-600">in Every Bite.</span>
              </h1>
              <p>
                Our commitment to quality shines through every product, ensuring
                that your culinary creations are always a notch above.
              </p>

              <div>
                <button className="px-7 py-3 bg-red-600 hover:bg-orange-600 transition duration-300 ease-in-out">
                  <Link href="/contact-us">Contact Us</Link>
                </button>
              </div>
            </div>
          </SwiperSlide> */}

          <SwiperSlide>
            <div className="font-sans flex flex-col gap-8">
              <h1 className="text-4xl tracking-tight">
                Nourishing Lives,&nbsp;
                <span className="text-red-600">Transforming Poultry.</span>
              </h1>
              <p>
                Born from the fusion of farm-to-table philosophy and
                cutting-edge food processing, we take pride in converting live
                broiler chicken into a symphony of flavors, expertly preserved
                and elegantly packaged.
              </p>

              <div>
                <button className="px-7 py-3 bg-[#7CFC00] rounded-md hover:bg-orange-600 transition duration-300 ease-in-out">
                  <Link href="/about-us">Learn More</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl tracking-tight">
                Quality Finished Products For All With Best &nbsp;
                <span className="text-red-600">Cold Cut</span>
              </h1>
              <p>
                We specialize in the seamless transformation of live broiler
                chicken into meticulously preserved and thoughtfully packaged
                frozen delights. From our farm to your table, savor the taste of
                quality and convenience, crafted with care and delivered with
                precision.
              </p>
              <div>
                <button className="px-7 py-3 bg-red-600 hover:bg-orange-600 transition duration-300 ease-in-out">
                  <Link href="/products">View Our Products</Link>
                </button>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
