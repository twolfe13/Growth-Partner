import React from "react";
import { Images } from "../../assets";

export default function LandingImage({
  highlight,
  heading,
  content,
  img,
  className,
}) {
  return (
    <div
      className="bg-contain md:bg-cover"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black bg-opacity-50 w-full h-[640px]">
        <div className="px-8 flex justify-between w-full h-full">
          <div
            className={`flex ${className} flex-col gap-4  justify-end mb-20 `}
          >
            <p className=" text-base font-normal text-lightGreen">
              {highlight}
            </p>
            <p className=" text-3xl md:text-5xl text-white ">{heading}</p>

            <p className=" text-lg md:text-xl text-white">{content}</p>
          </div>
          <div className="flex flex-col justify-end mb-20">
            <div className="flex flex-col gap-1 ">
              <div className="h-11 w-[170px] rounded-[68px] border-[2px] border-white relative overflow-hidden hover:bg-gray">
                <div className="bg-lightGray opacity-50 rounded-[68px] w-full h-full flex justify-center items-center">
                  <p className="text-white opacity-100">Let's meet</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-transparent border-none text-white py-2 px-4 rounded-[68px] hover:bg-opacity-75 hover:text-opacity-100 transition duration-300 ease-in-out">
                    Let's meet
                  </button>
                </div>
              </div>

              <p className="text-xs font-normal text-center text-white">
                In Person Preferred
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
