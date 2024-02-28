"use client";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="font-sans min-h-svh pt-[100px]">
      <div className="about-bg bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">ABOUT US</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#32CD32]" href="/">
            Home
          </Link>
          /<span className="font-semibold">About Us</span>
        </span>
      </div>

      <div className="px-4 md:px-0 mx-auto max-w-[1100px] py-10 flex flex-col gap-4">
        <h6 className="text-3xl">Jaykhadine Farms Limited</h6>
        <p className="text-justify">
          <span className="font-bold">Jaykhadine Farms Limited,</span> situated
          in Sango Otta, Ogun State, specializes in crop and animal production,
          hunting, and related services. As a leading food processing company,
          we excel in converting live broiler chicken into meticulously
          preserved and packaged frozen chicken meat.
        </p>

        <p className="text-justify">
          At Jaykhadine Farms Limited, our inception was driven by a strategic
          mission to address the significant demand-supply gap within the
          Nigerian foods market, with a primary focus on local chicken meat
          production. Our core objective is to bridge this gap by fostering
          self-sufficiency in the poultry industry and ensuring the market's
          access to premium-quality locally sourced chicken meat. While our
          farming operations began over a decade ago, our official incorporation
          by the Corporate Affairs Commission occurred in February 2021.
        </p>

        <p className="text-justify">
          Our vision is to develop a resilient and sustainable business model
          that not only meets the growing demand for animal production, hunting,
          and related services but also reduces the country's dependency on
          imported meat products. Through strategic interventions and the
          implementation of superior agricultural practices, we strive to play a
          pivotal role in fulfilling domestic needs, fostering economic
          development, and promoting self-sufficiency in animal production.
        </p>

        <p className="text-justify">
          As we eagerly pursue new opportunities, our steadfast dedication to
          ethical business practices remains our guiding principle. We
          persistently endeavor to conduct our activities in a manner that not
          only preserves our esteemed reputation but also propels us toward
          ongoing innovation.
        </p>

        <p className="text-justify">
          Our commitment stems from our vision to ensure a sustainable and
          enhanced quality of life for consumers, both present and future.
          Embracing a forward-looking mindset, we proactively explore innovative
          solutions to address current needs while also fostering long-term
          positive outcomes. Our relentless pursuit of excellence is grounded in
          the belief that responsible business practices and a passion for
          innovation are essential in shaping a brighter future for all. With
          this steadfast dedication, we aspire to leave a lasting legacy of
          progress and prosperity for generations to come.
        </p>
      </div>
    </div>
  );
};

export default About;
