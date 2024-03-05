"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import Link from "next/link";

const Vision = () => {
  return (
    <div className="min-h-[800px] md:min-h-svh pt-[85px]">
      <div className=" bg-[#f6f6f6] py-8 px-4 md:py-10 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">VISION | MISSION</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Vision | Mission</span>
        </span>
      </div>

      <div className="px-4 md:px-0 mx-auto max-w-[1100px] py-10 flex flex-col lg:flex-row gap-5 lg:gap-9">
        <div className="flex flex-col gap-4 basis-1/2">
          <div className="flex flex-col gap-3">
            <h6 className="text-2xl font-semibold">Our Vision</h6>
            <p>
              Empower Africa's agricultural landscape to thrive sustainably and
              achieve self-sufficiency in food production. Serve as the pivotal
              connection, fostering growth, innovation, and prosperity across
              the continent's farming communities.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-2xl font-semibold">Our Mission</h6>
            <p>
              To employ customized approaches in addressing agricultural
              obstacles and contribute to the sustainable progress of African
              Agriculture. We are dedicated to providing specialized solutions
              that cater to the diverse needs of farmers, empowering them to
              enhance productivity, promote environmental stewardship, and
              foster long-term prosperity within the agricultural sector across
              Africa.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[550px] my-5 px-4">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 80,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://i0.wp.com/kleenriteltd.com/wp-content/uploads/2018/11/Gardening-20.jpg?w=540&ssl=1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.businessday.ng/2020/08/Seeds.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://aefarmtech.com/wp-content/uploads/2022/06/IMG_20220408_182015_640_1655494069065.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://tvcnews.gridpapacdn.com/wp-content/uploads/2017/11/Farming-Tractor-Nigeria-TVCNews.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://agrop.co/uploads/extra/blog/blogpost_1698419194_413.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://vinspirer.com/images/uploads/232dc9c564ed019ec63997bd04aa89c8.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Vision;
