import React from "react";
import { Images } from "../../assets";

export default function LandingImage({
  highlight,
  heading,
  content,
  img,
  className,
  hStyle,
  cStyle,
}) {
  return (
    <div
      className="bg-contain md:bg-cover"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black bg-opacity-50 w-full xs:py-10 md:py-0 md:h-[640px]">
        <div className="px-2 md:px-8 flex flex-col md:flex-row justify-between w-full h-full">
          <div
            className={`flex ${className} flex-col gap-4  justify-end mb-20 `}
          >
            <p className=" text-base font-normal text-lightGreen">
              {highlight}
            </p>
            <p className={`${hStyle ?? "text-3xl md:text-5xl text-white"}  `}>
              {heading}
            </p>

            <p className={` ${cStyle ?? "text-lg md:text-xl text-white"} `}>
              {content}
            </p>
          </div>
          {/* <div className="flex flex-col justify-center items-center md:justify-end mb-20">
            <div className="flex flex-col gap-2 ">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
