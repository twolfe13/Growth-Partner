import React, { useEffect, useState } from "react";
import { Images } from "../assets";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const Menus = [
  { title: "Home", url: "/" },
  { title: "About me", url: "/aboutme" },
  { title: "New Sales", url: "/newSales" },
  { title: "Client Sales", url: "/clientSales" },
  { title: "Sales Engagement", url: "/salesEngagement" },
  { title: "New Sales Infrastructure", url: "/infrastructure" },
];

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSideMenu, setShowSideMenu] = useState(false);

  const activeTab = (index, URL) => {
    navigate(URL);
    setShowSideMenu(false); // Close the side menu when a menu item is clicked
  };

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden relative">
      {/* Header */}
      <div className="flex bg-primary h-[74px] z-10 px-4 md:px-24">
        <div className="flex items-center justify-between w-full">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-green rounded p-2"
            onClick={() => setShowSideMenu(!showSideMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2} 
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Logo */}
          <img
            src={Images?.logo}
            alt=""
            className="p-3 h-20 w-20 cursor-pointer"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {Menus?.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer rounded-xl`}
                  onClick={() => activeTab(index, item.url)}
                >
                  <span
                    className={`text-sm ${
                      item.url === location.pathname &&
                      "text-green font-primary-bd"
                    } text-gray`}
                  >
                    {item?.title}
                  </span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex flex-col items-center gap-1">
            <div
              className="h-12 w-auto px-6 bg-green rounded-full text-white text-center flex justify-center items-center cursor-pointer"
              onClick={() => activeTab(-1, "/meet")}
            >
              Delivery Model Info
            </div>
            
          </div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      {showSideMenu && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-20">
          <div className="flex flex-col h-full max-w-xs w-full bg-white">
            <div className="flex items-center justify-between px-4 py-2 bg-primary">
              <img
                src={Images?.logo}
                alt=""
                className="p-3 h-12 w-12 cursor-pointer"
              />
              <button
                onClick={() => setShowSideMenu(false)}
                className="bg-green rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {Menus?.map((item, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer text-sm ${
                      item.url === location.pathname &&
                      "text-green font-primary-bd"
                    } text-gray`}
                    onClick={() => activeTab(index, item.url)}
                  >
                    {item.title}
                  </span>
                ))}
              </nav>
              <div className="mt-4">
                <div
                  className="h-11 w-full bg-green rounded-full text-white text-center flex justify-center items-center cursor-pointer"
                  onClick={() => activeTab(-1, "/meet")}
                >
                  let's meet
                </div>
                <p className="text-xs font-normal text-gray text-center mt-1">
                  In Person Preferred
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-white">
        <Outlet />
      </div>
    </div>
  );
}
