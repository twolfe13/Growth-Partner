import React from "react";
import { Images } from "../assets";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

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

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = async (index, URL) => {
    navigate(URL);
  };
  return (
    <div className="flex w-screen h-screen  overflow-hidden relative  ">
      <div className="flex bg-primary h-[74px] fixed w-full z-10 top-0 px-24">
        <div className="flex w-full items-center justify-between ">
          <img
            src={Images?.logo}
            alt=""
            height={60}
            width={60}
            className={`p-3 items-center `}
            onClick={() => {}}
          />

          <nav>
            <ul className="flex space-x-4">
              {Menus?.map((item, index) => (
                <li
                  key={index}
                  className={`flex cursor-pointer rounded-xl `}
                  onClick={() => {
                    activeTab(index, item.url);
                  }}
                >
                  <span
                    className={` text-gray text-sm text-center ${
                      item.url === location.pathname &&
                      "text-green font-primary-bd"
                    } `}
                  >
                    {item?.title}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-1 ">
            <div
              className=" h-11 w-[134px] bg-green rounded-full text-white text-center items-center flex justify-center cursor-pointer"
              onClick={() => {
                activeTab(-1, "/meet");
              }}
            >
              let's meet
            </div>
            <p className="text-xs font-normal text-center text-gray">
              In Person Preferred
            </p>
          </div>
        </div>
      </div>
      <div className="w-full overflow-auto mt-[74px] bg-white">
        <Outlet />
      </div>
    </div>
  );
}
