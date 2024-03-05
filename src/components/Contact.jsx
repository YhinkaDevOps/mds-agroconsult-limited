"use client";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Contact = () => {
  return (
    <div name="contact" className="min-h-screen py-12">
      <div className="px-4 lg:px-0">
        <div className="text-center mb-10">
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 border-pink-600">
            Contact Us
          </p>
        </div>
      </div>
      {/* Contact Container */}
      <div className="mx-auto max-w-[1099px] my-10 px-2 md:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4">
        <div className="mx-auto max-w-[550px] my-5 px-4">
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
        <div className="contact-form border shadow-lg rounded-md flex flex-col gap-2 py-7 px-4">
          <h3 className="text-[#444444] text-2xl font-semibold">Visit Us</h3>
          <div>
            <p>MDS Agroconsult Limited</p>
            <p>Along Apapa Road</p>
            <p>Odo Ona, Idi Ayunre, Ibadan</p>
            <p>Oyo State</p>
            <p>Nigeria</p>
          </div>

          <h3 className="text-[#444444] text-2xl font-semibold">Phone Us</h3>
          <div>
            <p>Customer Service:</p>
            <p>08056448422</p>
            <p>08034665279</p>
          </div>

          <h3 className="text-[#444444] text-2xl font-semibold">Email Us</h3>
          <div>
            <p>mdsagroconsultlimited@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
