import React from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";

const salesEngagement = [
  {
    key: "Speed up the development of your sales people",
    des: "Our work developing customized sales strategies to optimize performance, combined with practical consulting DURING implementation, can actually help your junior salespeople become seniors faster.",
  },
  {
    key: "Ideal salesperson profile",
    des: "We develop your ideal salesperson profile best suited for your company needs.  Companies often spend years hiring ineffective salespeople simply because they don't clearly understand what they're looking for, and how to optimize getting it cost - effectively.",
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
        className="w-1/2"
      />
      <div className=" flex flex-col  gap-10 py-[50px]">
        <h2 className=" text-lg text-center md:text-4xl font-primary-md text-black">
          Employee expectations at work aren't changing... they've already
          changed.
        </h2>
        <div className=" flex flex-col gap-2">
          <div className="flex flex-row w-full justify-between md:px-[100px]  ">
            <img
              src={Images?.Diversity}
              alt=""
              // height={50}
              width={"49%"}
              className={`items-center `}
              onClick={() => {}}
            />
            <img
              src={Images?.CodeConduct}
              alt=""
              // height={50}
              width={"49%"}
              className={`items-center `}
              onClick={() => {}}
            />
          </div>
          <div className="flex flex-row w-full justify-between md:px-[100px] ">
            <img
              src={Images?.GrassRoots}
              alt=""
              // height={50}
              width={"49%"}
              className={`items-center `}
              onClick={() => {}}
            />

            <img
              src={Images?.Accessibility}
              alt=""
              // height={50}
              width={"24%"}
              className={`items-center `}
              onClick={() => {}}
            />
            <img
              src={Images?.RouseConsultancy}
              alt=""
              // height={50}
              width={"24%"}
              className={`items-center `}
              onClick={() => {}}
            />
          </div>
          <p className=" text-gray text-sm text-center md:px-[100px] ">
            LI Article Chief Growth Office screenshot
          </p>
          <div className="flex flex-col gap-4  bg-lightPink ">
            <h3 className=" text-3xl text-[#212529] font-primary-md">
              A few examples of sales infrastructure explained:
            </h3>
            <div className="border-[1px] bg-lightGray w-full h-1"></div>
            {salesEngagement?.map((item) => (
              <div className=" flex flex-col md:flex-row w-full py-4 border-b-[1px] border-lightGray">
                <h4 className="flex text-black text-2xl w-1/4 items-center py-2">
                  {item?.key}
                </h4>
                <p className=" text-gray  text-base w-full md:w-3/4">
                  {item?.des}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
