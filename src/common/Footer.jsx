import React, { useState } from "react";
import { Images } from "../assets";

const Menus = [
  { title: "Home", url: "/" },
  { title: "About me", url: "/aboutme" },
  { title: "New Sales", url: "/newSales" },
  { title: "Client Sales", url: "/clientSales" },
  { title: "Sales Engagement", url: "/salesEngagement" },
  {
    title: "New Sales Infrastructure",
    url: "/infrastructure",
  },
];
const Legal = [
  { title: "Contact Us", url: "/contact" },
  { title: "Terms & Services", url: "/terms" },
  { title: "Privacy Policy", url: "/privacy" },
];
export default function Footer() {
  const [email, setEmail] = useState(null);
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const sendEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      console.log("Send Email");
    } else {
      console.log("Do nothing");
    }
  };
  return (
    <div className=" bg-green flex md:flex-row flex-col justify-between w-full p-8">
      <div className="flex flex-col w-full md:w-1/4  ">
        <img
          src={Images?.WhiteLogo}
          alt=""
          height={300}
          width={300}
          className={`p-3 items-center `}
          onClick={() => {}}
        />
        <div className=" text-white text-base font-normal">
          More Practical, Accountable, and Cost-Effective Sales Consulting
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/4  ">
        <p className="text-base text-white font-bold">Pages</p>
        <div className="flex flex-col  gap-2 my-3">
          {Menus.map((item, index) => (
            <div
              id={index}
              className=" cursor-pointer text-white hover:underline"
            >
              {item?.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/4 ">
        <p className="text-base text-white  font-primary-bd">Legal</p>
        <div className="flex flex-col  gap-2 my-3">
          {Legal.map((item, index) => (
            <div
              id={index}
              className=" cursor-pointer text-white hover:underline"
            >
              {item?.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/4   gap-y-4">
        <p className="text-base text-white font-bold">Subscribe</p>
        <div className="text-white text-base font-normal ">
          Sign up for Alerts, Special Offers, Education and Updates
        </div>
        <div className="flex items-center">
          <input
            onChange={(event) => {
              onChange(event);
            }}
            value={email}
            className={` w-full bg-white text-gray p-2 text-[16px] rounded-l-[4px] focus:outline-none  `}
            type={"text"}
            placeholder={"Enter Your E-mail"}
          />
          <div className="bg-lightGreen w-12 h-full items-center flex justify-center rounded-r-[4px]">
            <img
              src={Images?.Arrow}
              alt=""
              height={20}
              width={20}
              className={` items-center `}
              onClick={() => {
                sendEmail();
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-5 py-4">
          <img
            src={Images?.Facebook}
            alt=""
            height={10}
            width={10}
            className={` items-center `}
            onClick={() => {
              // sendEmail();
            }}
          />
          <img
            src={Images?.Twitter}
            alt=""
            height={20}
            width={20}
            className={` items-center `}
            onClick={() => {
              // sendEmail();
            }}
          />
          <img
            src={Images?.Instagram}
            alt=""
            height={20}
            width={20}
            className={` items-center `}
            onClick={() => {
              // sendEmail();
            }}
          />
        </div>
      </div>
    </div>
  );
}
