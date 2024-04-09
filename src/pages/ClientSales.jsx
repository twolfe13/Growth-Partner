import React from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";
import Footer from "../common/Footer";

const data = [
  {
    heading: "'Hand off' from sales to client success",
    des: "Having a clear, smooth process aligned with buyer expectations is critical to efficient upselling efforts - and optimizing client retention.",
  },
  {
    heading: "Strategic Upselling",
    des: "New ideas like a customized newsletter, with strategic content, and even strategic timing.  (maybe take out specific idea from website like newsletter )",
  },
  {
    heading: "How to act in difficult situations",
    des: "How to weigh your options and the consequences with clients, optimizing for long-term client relationships.  How to handle trust during difficult situations. E.g. Is it better to admit you're wrong?  E.g. being honest",
  },
  {
    heading: "Fully leverage channels for new sales",
    des: "Learn how to take control of the meeting, get through all the content and dependencies you need to give efficiently. Take actions before and after meetings that optimize outcomes.",
  },
  {
    heading:
      "How to build long-term relationships - that grow with time, bring referrals, and bring recurring revenue",
    des: "Implement a value-driven approach that clients can feel - proactively driving trust and action for when upselling opportunities presented.",
  },
];

export default function ClientSales() {
  return (
    <div>
      <LandingImage
        img={Images?.MaskClientSales}
        highlight=" Client Sales"
        heading="Client Sales Growth
        & Customer Experience"
        content="We'll  use proven strategies and actions enabling you to take more advantage of the widely known 'easiest way' to increase sales revenue - selling to your current customers.
        Together we will design and implement highly intentional, robust client management activities, encompassing internal and external elements like 'customer journey' - to optimize upselling."
        className="mx-10"
        hStyle="text-lg md:text-5xl text-white"
        cStyle="text-lg md:text-xl text-white"
      />
      <div className="flex flex-col w-full px-10 justify-between py-[50px] md:px-[100px]  ">
        <div className=" flex flex-col gap-6">
          <h4 className=" text-2xl text-black">
            Leverage my experience to optimize your upselling results.{" "}
          </h4>
          <p className=" text-base text-gray">
            (In B2B services) Functionally, client teams need to be optimizing
            trust to inspire further actions post initial sale - and ensuring
            you're in a proactive, optimal position to capitalize when your
            clients need to grow and/or you need to make the "ask"
          </p>
          <p className=" text-base text-gray">
            A client success role is responsible for proactively adding value to
            the client - regardless of price. Taking a long-term approach +
            actions to optimize trust = long-term relationships and sustainable,
            growing revenue $. To accomplish this, we will uncover and deliver a
            customized structure and implementation based on your individual
            needs.
          </p>
        </div>
        <div className="flex flex-col gap-6 py-[50px] justify-center text-center">
          <h3 className=" text-3xl text-black font-primary-md">
            Frequently Asked Question
          </h3>
          <p className=" text-base text-gray">
            I work with companies who don't have a client/account team yet (and
            need to create one), or companies with a client/account team already
            in place
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-lightGreen text-base font-normal text-center md:text-left">
            Why choose us?
          </p>
          <h1 className="text-darkGreen text-4xl md:text-5xl font-semibold font-primary-md text-center md:text-left">
            Try something new and different
          </h1>
          <p className="text-base font-normal text-gray text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col gap-8 md:gap-20">
              <div className="flex flex-col items-center md:flex-row md:items-start gap-5">
                <div className="h-14 w-14 md:w-20">
                  <img
                    src={Images?.Chart2}
                    alt=""
                    className="rounded-full p-2 bg-lightPink"
                    onClick={() => {}}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg md:text-xl font-semibold text-green text-center md:text-left">
                    Focused on improving sales
                  </p>
                  <p className="text-base font-normal text-gray text-center md:text-left">
                    Try something new and different, completely focused on
                    improving sales performance in a self-sustaining way.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row md:items-start gap-5">
                <div className="w-14 md:w-20">
                  <img
                    src={Images?.ClipBoard}
                    alt=""
                    className="rounded-full p-1 bg-lightPink"
                    onClick={() => {}}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg md:text-xl font-semibold text-green text-center md:text-left">
                    More practical than a typical consultant
                  </p>
                  <p className="text-base font-normal text-gray text-center md:text-left">
                    Try something more practical than a typical consultant, that
                    makes your sales team more self-sustaining without
                    unnecessary oversight.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row md:items-start gap-5">
                <div className="h-14 w-14 md:w-20">
                  <img
                    src={Images?.Dollar}
                    alt=""
                    className="rounded-full p-1 bg-lightPink"
                    onClick={() => {}}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg md:text-xl font-semibold text-green text-center md:text-left">
                    Less costly and less risky
                  </p>
                  <p className="text-base font-normal text-gray text-center md:text-left">
                    Try something less costly and less risky than hiring another
                    sales VP for 100k+ / year, or giving up your equity
                    (potentially millions) to a consultant.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={Images?.Avatar2}
                alt=""
                className=" w-56  md:w-96"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-[50px] ">
          <p className=" text-base text-lightGreen  md:px-0">What I work on</p>
          <div className="flex flex-col md:flex-row md:justify-between  gap-2 md:px-0 ">
            <div className="flex flex-col md:flex-row gap-2 md:items-center">
              <h2 className=" text-base md:text-3xl text-black font-primary-md ">
                Examples of what I work on for
              </h2>
              <h2 className=" text-base md:text-3xl text-darkGreen font-primary-md md:text-center">
                Client / Account Growth
              </h2>
            </div>
            <div className=" h-12 w-52 text-center xs:text-sm  bg-darkGreen rounded-[68px] py-[10px] md:px-6  flex items-center  justify-center text-xlGray">
              {" "}
              Delivery Model Info{" "}
            </div>
          </div>
          <p className=" text-sm text-gray  md:px-0">
            What's included and to what extent is unique to each case, and
            totally driven by the nature of your scale-up goals and needs.
          </p>
          <ul className="ml-4  md:px-0">
            <li className=" text-gray text-sm list-disc">
              Delivered in-person and virtually; through one-time consulting
              kick-off "events", ongoing meetings, and on-demand.
            </li>
            <li className=" text-gray text-sm list-disc">
              Time Duration: 2-6+ months depending on each case
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-start gap-y-4 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex bg-xlGray rounded-3xl border-[1px] border-lightGray p-6 flex-col gap-4 w-full md:w-[49%] lg:w-[31%] m-2  "
            >
              <h5 className="text-lg font-secondary-md font-semibold text-black">
                {item?.heading}
              </h5>
              <p className="text-base text-gray">{item?.des}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
