import React, { useState } from "react";
import { Images } from "../assets";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
    <div className="flex flex-col bg-green px-8 pt-8 pb-1">
      <div className="  flex md:flex-row flex-col justify-between w-full ">
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
          <p className="text-base text-white font-primary-bd pt-2 md:pt-0">
            Pages
          </p>
          <div className="flex flex-col  gap-2 my-3">
            {Menus.map((item, index) => (
              <div
                id={index}
                className=" cursor-pointer text-white hover:underline"
                onClick={()=>{navigate(item?.url)}}
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
          <div className="flex items-center h-full">
            <input
              onChange={(event) => {
                onChange(event);
              }}
              value={email}
              className={` w-full bg-white text-gray p-2 text-[16px] rounded-l-[4px] focus:outline-none  `}
              type={"text"}
              placeholder={"Enter Your E-mail"}
            />
            <div className="bg-lightGreen w-12 h-10 items-center flex justify-center rounded-r-[4px]">
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
      <div className="w-full h-[1px] bg-xlGray my-2 rounded"></div>
      <p className=" text-sm font-primary-md text-white text-center mt-5">
        Copyright © 2024, All rights are reserved.
      </p>
    </div>
  );
}
