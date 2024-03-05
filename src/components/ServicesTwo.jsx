import React from "react";
import Link from "next/link";

const ServicesTwo = () => {
  return (
    <div name="service" className="bg-[#2b7a69] text-white min-h-[300px] mx-auto py-12">
      <div className="px-4 lg:px-0">
        <div className="text-center mb-10">
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 border-pink-600">
            Our Services
          </p>
        </div>

        <p className="mx-auto max-w-[800px] text-center text-lg">
          {" "}
          From supplying high-quality farm inputs and seedlings to assisting
          with farm establishment and providing expert consultancy services, we
          are your trusted partner in agricultural success
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-4 mx-auto max-w-[1100px] p-2 ">
        <div className="rounded-lg flex flex-col  items-center border shadow-lg shadow-[rgb(4,12,22)]">
          <img
            className="rounded-t-lg latest-img"
            src="https://i0.wp.com/kleenriteltd.com/wp-content/uploads/2018/11/Gardening-20.jpg?w=540&ssl=1"
            alt="gardening"
          />

          <div className="p-4 flex flex-col space-y-2 py-3 bg-white text-black">
            <p className="font-semibold text-[20px]">Horticulture Services</p>

            <p className="text-justify">
              From ornamental plant selection to garden design and maintenance,
              our team of experts is dedicated to transforming outdoor spaces
              into vibrant and thriving environments. Whether you're a
              homeowner, landscaper, or business owner, we offer tailored
              solutions to meet your horticultural needs. Let us help you create
              stunning outdoor spaces that inspire and delight.
            </p>
          </div>
        </div>

        <div className="bg-white text-black rounded-lg flex flex-col items-center border shadow-lg shadow-[rgb(4,12,22)]">
          <img
            className="rounded-t-lg latest-img"
            src="https://cdn.businessday.ng/2020/08/Seeds.jpg"
            alt="seeds-image"
          />
          <div className="p-4 flex flex-col space-y-2 py-3 ">
            <p className="font-semibold text-[20px]">Sales of Seeds</p>

            <p className="text-justify">
              Our carefully curated collection includes a wide range of seeds
              for various crops, ensuring that you find the perfect fit for your
              farming endeavors. Whether you're looking to grow vegetables,
              fruits, or grains, our seeds are sourced from reputable suppliers
              and are guaranteed to deliver exceptional results.
            </p>
          </div>
        </div>

        <div className="bg-white text-black flex flex-col items-center rounded-lg border shadow-lg shadow-[rgb(4,12,22)]">
          <img
            className="rounded-t-lg latest-img"
            src="https://aefarmtech.com/wp-content/uploads/2022/06/IMG_20220408_182015_640_1655494069065.jpg"
            alt="seedling-image"
          />

          <div className="p-4 flex flex-col space-y-2 py-3">
            <p className="font-semibold text-[20px]">Sales of Seedlings</p>
            <p className="text-justify">
              With our commitment to excellence and expertise in seedling
              cultivation, you can trust us to deliver healthy and vigorous
              plants that will thrive in your fields. Whether you're starting a
              new farm or expanding your existing operation, our seedlings are
              the perfect foundation for your success."
            </p>
            {/* <span className="inline-block text-[#ee1c25] text-sm text-right  ">
              <Link
                className="underline hover:no-underline hover:text-red-300"
                href="/vision-mission"
              >
                Read More
              </Link>
            </span> */}
          </div>
        </div>

        <div className="bg-white text-black rounded-lg flex flex-col items-center border shadow-lg shadow-[rgb(4,12,22)]">
          <img
            className="rounded-t-lg latest-img"
            src="https://tvcnews.gridpapacdn.com/wp-content/uploads/2017/11/Farming-Tractor-Nigeria-TVCNews.jpg"
            alt="farm-management"
          />
          <div className="p-4 flex flex-col space-y-2 py-3 ">
            <p className="font-semibold text-[20px]">
              Expert Farm Management and Maintenance Services
            </p>

            <p className="text-justify">
              Our comprehensive farm management and maintenance services ensure
              optimal productivity and sustainability for your agricultural
              venture. From soil health management to crop rotation planning,
              irrigation system maintenance to pest and disease control, we
              provide tailored solutions to meet your farm's specific needs.
            </p>
          </div>
        </div>

        <div className="bg-white text-black rounded-lg flex flex-col items-center border shadow-lg shadow-[rgb(4,12,22)]">
          <img
            className="rounded-t-lg latest-img"
            src="https://agrop.co/uploads/extra/blog/blogpost_1698419194_413.png"
            alt="consultancy-services"
          />
          <div className="p-4 flex flex-col space-y-2 py-3 ">
            <p className="font-semibold text-[20px]">
              Expert Consultancy Services Tailored to Your Agricultural Needs
            </p>

            <p className="text-justify">
              We offer comprehensive consultancy services to support your
              agricultural endeavors. Our team of experienced consultants
              provides personalized guidance and solutions to help you overcome
              challenges, optimize operations, and achieve your goals.
            </p>
          </div>
        </div>

        <div className="bg-white text-black rounded-lg flex flex-col items-center border shadow-lg shadow-[rgb(4,12,22)]">
          <img
            className="rounded-t-lg latest-img"
            src="https://www.agrirs.co.uk/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXF2UWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d74a2c1ac2f7b21112d3805d64c0dcb98fc57c59/iStock-1346294867.jpg"
            alt="consultancy-services"
          />
          <div className="p-4 flex flex-col space-y-2 py-3 ">
            <p className="font-semibold text-[20px]">
              Harnessing Growth: Explore Our Training Services
            </p>

            <p className="text-justify">
              Unlock your agricultural potential with our comprehensive training
              services. From crop management techniques to innovative farming
              practices, our expert-led programs empower you with the knowledge
              and skills needed to thrive in the agricultural sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTwo;
