import React from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";
import Footer from "../common/Footer";

const data = [
  {
    id: "01",
    heading: "GP Client Intake form (post decision) + Roadmap Planning Meeting",
    content:
      "Completed before Kick-Off,used to design Kick-Off.  Prefer to discuss in-person but can be virtual",
  },
  {
    id: "02",
    heading: "Kick-Off (management only + team)",
    content: "Delivered in-person",
  },
  {
    id: "03",
    heading: "Implementation Phase 1 -Discover & Execute",
    content:
      "2-4 Months (depending on amount of infrastructure needing to be done)",
  },
  {
    id: "04",
    heading: "Implementation Phase 2 -Execution & Results",
    content: "2-4 Months",
    content2:
      "Any infrastructure is already completed prior to starting this phase.",
  },
  {
    id: "05",
    heading: "Review / Close",
    content: "Close and transition out my involvement.In-person preferred",
  },
];

export default function Meet() {
  return (
    <div>
      <LandingImage
        img={Images?.MaskMeet}
        highlight="Delivery Model"
        heading="Consulting Delivery Model"
        content="A sales 'scale-up' ideally starts here.  What do I mean by infrastructure?  I think about sales infrastructure as separate from the actual sales activity.  Meaning it's not sales activity, it empowers sales activity. Having solid sales infrastructure is about being proactive and efficient with salespeople's time and energy.   You put time and effort into infrastructure to optimize.. to 'do more with less'.. ideally with every single sales activity done."
        className=" mx-10"
        hStyle="text-lg md:text-5xl text-white"
        cStyle="text-lg md:text-xl text-white"
      />
      {/* Delivery info */}
      <div className="flex flex-col px-10 md:px-[100px] py-[50px] gap-10">
        <h5 className=" text-black text-lg font-primary-md">
          Delivery Model Info
        </h5>
        <p className=" text-sm text-gray">
          What doesn't change about what I do, is it will take significant time
          and focus from both sides.  It takes time and persistence to achieve a
          real sales scale-up. More Implementation phases can be added as
          needed, but a commitment to 2 implementation phases (2-3 months each)
          is required.
        </p>

        <ul className=" pl-4">
          <li className=" text-gray text-sm list-disc">
            Delivered in-person and virtually; through one-time consulting
            kick-off "events", ongoing meetings, and ﻿on-demand
          </li>
          <li className=" text-gray text-sm list-disc">
            Time Duration: 2-6+ months depending on each case
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-full md:flex-row px-10 md:px-[100px] pb-[50px] justify-between  gap-x-2 xs:gap-10">
        <div className="flex bg-xlGray rounded-3xl border-[1px] border-lightGray p-6 flex-col gap-4 w-full md:w-[49%]">
          <h5 className=" text-lg font-secondary-md font-semibold text-black">
            Sales Educational Content - Traditional, Modern, Proprietary
            Methodologies
          </h5>
          <p className=" txet-base text-gray">
            Kick-off Events, customized content delivered in-person
          </p>
          <p className=" txet-base text-gray">Ongoing monthly calls</p>
        </div>
        <div className="flex bg-xlGray rounded-3xl border-[1px] border-lightGray p-6 flex-col gap-4 w-full md:w-[49%]">
          <h5 className=" text-lg font-secondary-md font-semibold text-black">
            Ongoing Support on real, "real-time" sales execution scenarios
          </h5>
          <p className=" txet-base text-gray">On-demand Consulting</p>
          <p className=" txet-base text-gray">Ongoing monthly calls</p>
        </div>
      </div>
      <div className="flex flex-col px-10 md:px-[100px] py-[50px] gap-10">
        <h3 className=" text-xl md:text-3xl font-semibold font-primary-md text-black">
          Measurable, iterative Implementation - with "Discovery" phase built in
        </h3>
        <p className=" text-sm text-gray">
          Estimated Time Duration, per Engagement: 6-8 Months (additional
          Implementation phases can be added on)
        </p>
      </div>
      <div className="flex flex-wrap px-10 md:px-[100px] py-[50px] gap-10  w-full">
        {data?.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2 border-l-[1px] border-lightGreen pl-2">
              <h6 className=" text-lightGreen text-base ">{item?.id}</h6>
              <p className=" text-[#111827] text-base font-secondary-md">
                {item?.heading}
              </p>
            </div>
            <div className="flex flex-col gap-2 border-l-[1px] border-lightGray pl-2">
              <p className=" text-[#212529] text-sm font-secondary-rg leading-loose">
                {item?.content}
              </p>
              <p className=" text-[#212529] text-sm font-secondary-rg leading-loose">
                {item?.content2}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-center px-10 md:px-[100px] py-[50px] gap-10  w-full justify-center">
        <h6 className=" w-96 bg-green rounded-full text-base text-white font-primary-md p-2 text-center">
          Interested to learn more?  Let’s Meet
        </h6>
      </div>
      <Footer />
    </div>
  );
}
