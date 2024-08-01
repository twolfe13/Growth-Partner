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
            className={`items-center `}
            onClick={() => {}}
          />
          <div className=" text-white text-base font-normal md:pt-5 pt-2">
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
        <div className="flex flex-col w-full md:w-1/4 gap-y-4">

          <div className="flex items-center gap-x-5">
           
            <img
              src={Images?.Linkedin}
              alt=""
              height={30}
              width={30}
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
        Copyright © 2024, All rights reserved.
      </p>
    </div>
  );
}
