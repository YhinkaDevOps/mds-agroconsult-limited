"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Link from "next/link";

const Products = () => {
  return (
    <div className="font-sans min-h-[800px] md:min-h-svh pt-[100px]">
      <div className="products-bg bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">OUR PRODUCTS</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#32CD32]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Our Products</span>
        </span>
      </div>

      <div className="px-4 md:px-0 mx-auto max-w-[1100px] py-10 flex flex-col lg:flex-row gap-5 lg:gap-9">
        <div className="flex flex-col gap-4 basis-1/2">
          <h2 className="font-bold">Jaykhadine Farms Limited Products</h2>
          <p className="text-justify">
            MEAT & POULTRY – EGG FARMING, POULTRY MEAT – BROILER & LAYER,
            (...engaged in animal production, hunting, poultry farming, which
            includes the rearing of layers and broilers, egg production, and the
            distribution of frozen feed..)
          </p>
          <p className="text-justify">
            We are dedicated to supplying nutritious meat and poultry products
            to various sectors including food producers, retailers, and food
            service operators nationwide. As more individuals prioritize
            healthier lifestyles, there is a growing demand for animal protein
            as a vital source of essential nutrients. Our mission is to meet
            this demand by offering consumers convenient and sustainable protein
            options, in line with the changing preferences of those who value
            quality nutrition. We strive to continuously innovate and adapt to
            the evolving needs of our customers, ensuring that our products
            contribute positively to their well-being and satisfaction.
          </p>
        </div>

        <div className="basis-1/2">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper max-w-[500px]"
          >
            <SwiperSlide>
              <img
                className="latest-img"
                src="./assets/jaykhadine_2.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="latest-img"
                src="./assets/products_1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="latest-img"
                src="./assets/products_2.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="latest-img"
                src="./assets/jaykhadine_3.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="latest-img"
                src="./assets/crates-of-eggs.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://oatvanafarms.com/images/about/14.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="py-7 px-4 mb-6 mx-auto md:max-w-[1099px] rounded-md flex flex-col md:flex-row gap-4 md:gap-9 bg-[#e11c25] text-white">
        <div className="flex flex-col gap-4">
          <h5 className="text-xl font-serif font-semibold">
            Ready to place an order for any of our products,
          </h5>
          <p>From whole birds to customized portions, we've got you covered!</p>
        </div>
        <div className="flex items-start md:justify-center md:items-center">
          <Link href="/contact-us">
            <button className="bg-[#15dd0b] rounded-lg px-7 py-3 hover:bg-orange-600 transition duration-300 ease-in-out">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
