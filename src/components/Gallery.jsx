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

const Gallery = () => {
  return (
    <div className="bg-[#edefeb] min-h-[250px] mx-auto py-12">
      <div className="px-4 lg:px-0">
        <div className="text-center mb-10">
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 border-pink-600">
            Our Gallery
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] my-5 px-4">
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
  );
};

export default Gallery;
