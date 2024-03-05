import React from "react";
import Link from "next/link";

const Latest = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen mx-auto py-12">
      <div className="px-4 lg:px-0">
        <div className="text-center mb-10">
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 border-pink-600">
            Who We Are
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-4 mx-auto max-w-[1100px] p-2 ">
        <div className="flex flex-col gap-3 items-center rounded-md border shadow-lg shadow-[rgb(4,12,22)]">
          <img
            className="latest-img"
            src="https://i0.wp.com/kleenriteltd.com/wp-content/uploads/2018/11/Gardening-20.jpg?w=540&ssl=1"
            alt=""
          />

          <div className="p-2 flex flex-col space-y-2 py-3">
            <p className="font-semibold text-[20px]">
              Welcome to MDS Agroconsult Limited
            </p>
            <p className="text-[#8f8f8f] text-justify text-sm">
              MDS Agroconsult Limited is a leading player in the agricultural
              landscape, specializing in crop farming, horticulture, and
              consultancy services. With a steadfast commitment to excellence,
              we offer a comprehensive suite of products and services tailored
              to meet the diverse needs of our clients.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center rounded-md border shadow-lg shadow-[rgb(4,12,22)]">
          <img
            className="latest-img"
            src="https://agrop.co/uploads/extra/blog/blogpost_1698419194_413.png"
            alt=""
          />
          <div className="p-2 flex flex-col space-y-2 py-3">
            <p className="font-semibold text-[20px]">
              Tailored Solutions, Personalized Service
            </p>
            <p className="text-[#8f8f8f] text-justify text-sm">
              We recognize the individuality of each client, which is why we
              provide tailored solutions that match your style, preferences, and
              the unique essence of your environment. Your happiness is our
              primary concern, and our dedication lies in crafting personalized
              offerings to meet your needs.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center rounded-md border shadow-lg shadow-[rgb(4,12,22)]">
          <img className="latest-img" src="./assets/mission.jpg" alt="" />

          <div className="p-2 flex flex-col space-y-2 py-3">
            <p className="font-semibold text-[20px]">Our Mission and Vision</p>

            <p className="text-[#8f8f8f] text-justify text-sm">
              To employ customized approaches in addressing agricultural
              obstacles and contribute to the sustainable progress of African
              Agriculture. We are dedicated to providing specialized solutions
              that cater to the diverse needs of farmers, empowering them to
              enhance productivity, promote environmental stewardship, and
              foster long-term prosperity within the agricultural sector across
              Africa
            </p>
            <span className="inline-block text-[#ee1c25] text-sm text-right  ">
              <Link
                className="underline hover:no-underline hover:text-red-300"
                href="/vision-mission"
              >
                Read More
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
