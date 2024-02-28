import React from "react";
import Link from "next/link";

const Latest = () => {
  return (
    <div className=" bg-[#f5f5f5] min-h-screen mx-auto py-12">
      <h5 className="text-center text-4xl mb-8">LATEST</h5>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-4 mx-auto max-w-[1100px] p-2 ">
        <div className="flex flex-col gap-3 items-center rounded-md border shadow-lg shadow-[rgb(4,12,22)]">
          <img className="latest-img" src="./assets/jaykhadine_.png" alt="" />

          <div className="p-2 flex flex-col space-y-2 py-3">
            <p className="font-semibold text-[20px]">
              Welcome to Jaykhadine Farms Limited
            </p>
            <span className="text-sm">Feb 17, 2021</span>
            <p className="text-[#8f8f8f] text-justify text-sm">
              Jaykhadine Farms Limited, situated in Sango Otta, Ogun State,
              specializes in crop and animal production, hunting, and related
              services. As a leading food processing company, we excel in
              converting live broiler chicken into meticulously preserved and
              packaged frozen chicken meat.....
            </p>
            <span className="inline-block text-[#ee1c25] text-sm text-right  ">
              <Link
                className="underline hover:no-underline hover:text-red-300"
                href="/about-us"
              >
                Read More
              </Link>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center rounded-md border shadow-lg shadow-[rgb(4,12,22)]">
          <img className="latest-img" src="./assets/jaykhadine_2.png" alt="" />
          <div className="p-2 flex flex-col space-y-2 py-3">
            <p className="font-semibold text-[20px]">
              Jaykhadine Farms Limited Products
            </p>
            <span className="text-sm">Feb 17, 2021</span>
            <p className="text-[#8f8f8f] text-justify text-sm">
              Poultry meat is renowned as an exceptionally versatile choice in
              the market, prized not just for its affordability, but also for
              its low-fat composition and abundant protein content.
            </p>
            <span className="inline-block text-[#ee1c25] text-sm text-right  ">
              <Link
                className="underline hover:no-underline hover:text-red-300"
                href="/products"
              >
                Read More
              </Link>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center rounded-md border shadow-lg shadow-[rgb(4,12,22)]">
          <img className="latest-img" src="./assets/mission.jpg" alt="" />

          <div className="p-2 flex flex-col space-y-2 py-3">
            <p className="font-semibold text-[20px]">Our Mission and Vision</p>
            <span className="text-sm">Feb 17, 2021</span>
            <p className="text-[#8f8f8f] text-justify text-sm">
              To provide a consistent supply of high-quality frozen chicken to
              our customers whilst maintaining the highest global industry
              standards in food safety and defence.
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
