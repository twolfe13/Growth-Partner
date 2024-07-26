import React from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";
import Footer from "../common/Footer";

const salesEngagement = [
  {
    key: "Speed up development of your sales team",
    des: "Our work developing customized sales strategies to optimize performance, combined with practical consulting DURING implementation, can actually help your junior salespeople become seniors faster.",
  },
  {
    key: "Attract your ideal salesperson profile",
    des: "We develop your ideal salesperson profile best suited for your company needs.  Companies often spend years hiring ineffective salespeople simply because they don't clearly understand what they're looking for, and how to optimize cost-effectively.",
  },
  {
    key: "Ideal salesperson compensation structure",
    des: "Leverage my experience in multiple sales organizations seeing what worked and didn't work for me and other top performing salespeople.  Develop an ideal compensation structure, that gets the most out of your salespeople - and is customized to your reality.",
  },
];

export default function SalesEngagement() {
  return (
    <div>
      <LandingImage
        img={Images?.MaskSalesEngagements}
        highlight=" Sales Talent Engagement"
        heading="Sales & Client Team Engagement"
        content="Do you struggle to excel in retention, and engagement of talent in the 2023 talent market? You're not alone."
        className="mx-10"
        hStyle="text-lg md:text-5xl text-white"
        cStyle="text-lg md:text-xl text-white"
      />
      <div className=" flex flex-col  gap-10 py-[50px]">
        <h2 className=" text-lg text-center md:text-4xl font-primary-md text-black">
          Employee expectations at work aren't changing... they've already
          changed.
        </h2>
        <div className=" flex flex-col gap-6">
          <div className="flex flex-row w-full px-10 justify-between md:px-[100px]  ">
            <img
              src={Images?.JoinUs1}
              alt=""
              // height={50}
              width={"49%"}
              className={`items-center `}
              onClick={() => {}}
            />
            <img
              src={Images?.JoinUs2}
              alt=""
              // height={50}
              width={"49%"}
              className={`items-center `}
              onClick={() => {}}
            />
          </div>
          <div className="flex flex-row w-full px-10 justify-between md:px-[100px]  ">
            <img
              src={Images?.JoinUs3}
              alt=""
              // height={50}
              width={"49%"}
              className={`items-center `}
              onClick={() => {}}
            />
            <img
              src={Images?.JoinUs4}
              alt=""
              // height={50}
              width={"49%"}
              className={`items-center `}
              onClick={() => {}}
            />
          </div>
          <p className=" text-gray text-sm text-center px-10 md:px-[100px] ">
            LI Article Chief Growth Office screenshot
          </p>
          <div className="flex flex-col gap-4 px-10 py-10  bg-lightPink md:px-[100px] ">
            {salesEngagement?.map((item, index) => (
              <div
                className={` flex flex-col md:flex-row w-full ${
                  index != salesEngagement?.length - 1 && "border-b-[1px]"
                } border-lightGray`}
              >
                <h4 className="flex text-black  text-2xl md:w-1/4 md:pr-5 items-center ">
                  {item?.key}
                </h4>
                <p className=" text-gray text-center text-base w-full flex md:w-3/4">
                  {item?.des}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 px-10 py-[50px]  md:px-[100px] ">
            <h4 className=" text-2xl text-black font-primary-md">
              Engaging, getting Millennials / Gen Z to give their best at work
            </h4>
            <p className=" text-base text-gray">
              Why is this such a big problem? A sales team above all, depends on
              participation and engagement. If they're not participating in
              meetings, or producing sales activity.. they're just burning your
              capital, which could even be spent on lead generation or some
              other sales service.. of which there are many out there run by
              seasoned sales veterans with capable outsourced bandwidth,
              ensuring you get optimized return on every $ spent on sales.
            </p>
            <p className=" text-base text-gray">
              Use my own "millennial grown" engagement theories backed by
              results, to empower your internal sales team and avoid your
              salespeople burning out.
            </p>
            <p className=" text-base text-gray">
              Help your salespeople understand their "why" behind being a high
              performing sales person (in a practical manner) - a scientifically
              proven way to boost employee motivation, more than financial or
              other external benefits
            </p>
          </div>
          <div
            className="shadow-lg w-full  rounded-3xl flex flex-wrap  md:justify-between py-[50px]  md:px-[100px]"
            style={{ boxShadow: "0px 14px 18px 0px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="flex flex-col p-6 gap-8 md:w-1/2 lg:w-1/3 ">
              <img
                src={Images?.Chart2}
                alt=""
                height={50}
                width={50}
                className={`items-center `}
                onClick={() => {}}
              />
              <p className=" text-base text-darkBlack font-semibold font-primary-md">
                Improve performance
              </p>
              <p className=" text-sm text-gray font-normal">
                Try new and different for sales team engagement, focused on
                improving performance in a self-sustaining way.
              </p>
            </div>
            <div className="flex flex-col p-6 gap-8 md:w-1/2 lg:w-1/3 border-l-[1px] border-lightGray">
              <img
                src={Images?.Dollar}
                alt=""
                height={50}
                width={50}
                className={`items-center `}
                onClick={() => {}}
              />
              <p className=" text-base text-darkBlack font-semibold font-primary-md">
                Less costly and less risky
              </p>
              <p className=" text-sm text-gray font-normal">
                Try something less costly and less risky than hiring another
                sales VP for 100k+ / year, or giving up your equity (potentially
                millions) to a consultant.
              </p>
            </div>
            <div className="flex flex-col p-6 gap-8 md:w-1/2 lg:w-1/3 border-l-[1px] border-lightGray">
              <img
                src={Images?.Bolt}
                alt=""
                height={50}
                width={50}
                className={`items-center `}
                onClick={() => {}}
              />
              <p className=" text-base text-darkBlack font-semibold font-primary-md">
                Self - Sustaining
              </p>
              <p className=" text-sm text-gray font-normal">
                Try something more practical than a typical consultant, that
                makes your sales team more self-sustaining without unnecessary
                oversight.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-[50px] md:px-[100px] ">
            <p className=" text-base text-lightGreen xs:px-10 md:px-0">
              What I work on
            </p>
            <div className="flex flex-col md:flex-row md:justify-between xs:px-10 gap-2 md:px-0 ">
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <h2 className=" text-base md:text-3xl text-black font-primary-md ">
                  Examples of what I work on for
                </h2>
                <h2 className=" text-base md:text-3xl text-darkGreen font-primary-md md:text-center">
                  Sales Talent Management
                </h2>
              </div>
              <div className=" h-12 w-52 text-center xs:text-sm  bg-darkGreen rounded-[68px] py-[10px] md:px-6  flex items-center  justify-center text-xlGray">
                {" "}
                Delivery Model Info{" "}
              </div>
            </div>
            <p className=" text-sm text-gray xs:px-10 md:px-0">
              What's included and to what extent is unique to each case, and
              totally driven by the nature of your scale-up goals and needs.
            </p>
            <ul className="ml-4 xs:px-10 md:px-0">
              <li className=" text-gray text-sm list-disc">
                Delivered in-person and virtually; through one-time consulting
                kick-off "events", ongoing meetings, and on-demand.
              </li>
              <li className=" text-gray text-sm list-disc">
                Time Duration: 2-6+ months depending on each case
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-full md:flex-row px-10 md:px-[100px] pb-[50px] justify-between  gap-x-2 xs:gap-10">
            <div className="flex bg-xlGray rounded-3xl border-[1px] border-lightGray p-3 flex-col gap-4 w-full md:w-[49%]">
              <h5 className=" text-lg font-secondary-md font-semibold text-black">
                Remote Work
              </h5>
              <p className=" txet-base text-gray">
                How to handle while maintaining high performance standards and
                transparency.
              </p>
            </div>
            <div className="flex bg-xlGray rounded-3xl border-[1px] border-lightGray p-3 flex-col gap-4 w-full md:w-[49%]">
              <h5 className=" text-lg font-secondary-md font-semibold text-black">
                Optimized sales team roles, responsibilites, and activity
                structure
              </h5>
              <p className=" txet-base text-gray">
                How to handle while maintaining high performance standards and
                transparency.
              </p>
            </div>
            <div className="flex bg-xlGray rounded-3xl border-[1px] border-lightGray p-3 flex-col gap-4 w-full md:w-[49%]">
              <h5 className=" text-lg font-secondary-md font-semibold text-black">
                Mutually beneficial Compensation Structures
              </h5>
              <p className=" txet-base text-gray">
                How to handle while maintaining high performance standards and
                transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
