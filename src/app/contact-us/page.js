"use client";
import React, { useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import { sendContactForm } from "../../../lib/api";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues };

const Contact = () => {
  const toast = useToast();

  const [state, setState] = useState(initState);

  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="min-h-screen pt-[85px]">
      <div className="bg-[#f6f6f6] py-8 px-4 md:py-10 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3">
        <h6 className="text-2xl font-semibold px-2">CONTACT US</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#32CD32]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Contact Us</span>
        </span>
      </div>
      {/* Contact Container */}
      <div className="mx-auto max-w-[1099px] my-10 px-2 md:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4">
        {/* <div className="contact-form border shadow-lg shadow-[rgb(4,12,22)] container rounded-md py-7 px-4 order-last">
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              errorBorderColor="red.300"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.subject && !values.subject}
          >
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.message && !values.message}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              type="text"
              name="message"
              errorBorderColor="red.300"
              rows={4}
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <div className="text-center">
            {error && (
              <Text color="red.500" my={4} fontSize="lg">
                {error}
              </Text>
            )}
          </div>
          <div className="mx-auto text-center">
            <Button
              isDisabled={
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              px={10}
              colorScheme="red"
              isLoading={isLoading}
              onClick={onSubmit}
            >
              Send
            </Button>
          </div>
        </div> */}
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
            className="mySwiper-contact"
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
        <div className="contact-form border shadow-lg rounded-md shadow-[rgb(4,12,22)] flex flex-col gap-2 py-7 px-4">
          <h3 className="text-[#444444] text-2xl font-semibold">Visit Us</h3>
          <div>
            <p>Jaykhadine Farms Limited</p>
            <p>6th Avenue, Surulere Estate, Water Water</p>
            <p>Iyana Iyesi, Sango Otta</p>
            <p>Ogun State</p>
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
            <p>opesegun223@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
