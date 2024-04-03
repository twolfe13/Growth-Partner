import React from "react";
import Footer from "../common/Footer.jsx";
import { Images } from "../assets";
import LandingImage from "../components/home/LandingImage.jsx";

export default function home() {
  return (
    <div>
      <LandingImage
        img={Images?.Landing}
        highlight=" Proven strategies backed by science for success."
        heading="More Practical Sales Consulting"
        content="For CEOs and Sales Leaders committed to a sales 'scale up' -
              encompassing performance, structure, and sales talent engagement."
        className="w-1/2"
      />
      {/* Section 1*/}
      <div className=" pt-10 px-10 md:px-[100px] pb-12">
        <div className="flex flex-col gap-8">
          <h4 className=" text-2xl text-darkBlack font-primary-bd">
            For CEOs and Sales Leaders committed to a sales "scale up" -
            encompassing performance, structure, and sales talent engagement.
          </h4>
          <p className=" text-base text-gray">
            Leverage my “on the Ground” experience to help you grow your sales,
            in a repeatable way.{" "}
          </p>
          <div
            className="shadow-lg w-full  rounded-3xl flex flex-wrap justify-center"
            style={{ boxShadow: "0px 14px 18px 0px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="flex flex-col p-6 gap-8 md:w-1/2 lg:w-1/4 max-w-[610px]">
              <img
                src={Images?.Chart}
                alt=""
                height={50}
                width={50}
                className={`items-center `}
                onClick={() => {}}
              />
              <p className=" text-base text-darkBlack font-semibold font-primary-md">
                Improve Sales Results
              </p>
              <p className=" text-sm text-gray font-normal">
                Increasing new sales performance by being more efficient with
                each lead through optimized sales infrastructure, in order
                achieve more predictable sales activity.
              </p>
            </div>
            <div className="flex flex-col p-6 gap-8 md:w-1/2 lg:w-1/4 max-w-[610px]">
              <img
                src={Images?.Bolt}
                alt=""
                height={50}
                width={50}
                className={`items-center `}
                onClick={() => {}}
              />
              <p className=" text-base text-darkBlack font-semibold font-primary-md">
                Sustainable Performance Consulting
              </p>
              <p className=" text-sm text-gray font-normal">
                Empowering your salespeople through practical, repeatable sales
                experiences - so they can be successful without micro-managing.
              </p>
            </div>
            <div className="flex flex-col p-6 gap-8 md:w-1/2 lg:w-1/4 max-w-[610px]">
              <img
                src={Images?.Usb}
                alt=""
                height={50}
                width={50}
                className={`items-center `}
                onClick={() => {}}
              />
              <p className=" text-base text-darkBlack font-semibold font-primary-md">
                Sales Infrastructure
              </p>
              <p className=" text-sm text-gray font-normal">
                Empowering your salespeople through optimized sales
                infrastructure. Improving your sales team's engagement and
                activity levels.
              </p>
            </div>
            <div className="flex flex-col p-6 gap-8 md:w-1/2 lg:w-1/4 max-w-[610px]">
              <img
                src={Images?.City}
                alt=""
                height={50}
                width={50}
                className={`items-center `}
                onClick={() => {}}
              />
              <p className=" text-base text-darkBlack font-semibold font-primary-md">
                Salespeople Engagement
              </p>
              <p className=" text-sm text-gray font-normal">
                Aligning your company' growth vision with your salespeople - in
                order to achieve performance-based, long-term relationships with
                top salespeople in the market.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className=" pt-10 px-10 md:px-[100px] pb-12">
        <div className="flex flex-col gap-8">
          <h4 className=" text-2xl text-darkBlack font-primary-bd">
            Leverage my experience to help you grow your sales, in a repeatable
            and sustainable way.  Let's talk if…
          </h4>
          <div className="flex flex-wrap justify-center md:justify-between gap-4">
            <div className="w-full  md:w-[49%]  flex justify-center   border-[1px] border-lightGray rounded-2xl">
              <div className="flex flex-col p-6 gap-8">
                <img
                  src={Images?.SuspensionBolt}
                  alt=""
                  height={50}
                  width={50}
                  className={`items-center`}
                  onClick={() => {}}
                />
                <p className="text-base text-darkBlack font-semibold font-primary-bd">
                  You’re ready to scale up
                </p>
                <p className="text-sm text-gray font-normal">
                  You're ready to scale up sales.. to hire your 1st sales team
                  member(s) and/or to start seeing "serious, predictable
                  revenue" only an intentional, robust effort can achieve.
                </p>
              </div>
            </div>
            <div className="w-full md:w-[49%]  flex justify-center border-[1px] border-lightGray rounded-2xl">
              <div className="flex flex-col p-6 gap-8">
                <img
                  src={Images?.Chart2}
                  alt=""
                  height={50}
                  width={50}
                  className={`items-center`}
                  onClick={() => {}}
                />
                <p className="text-base text-darkBlack font-semibold font-primary-bd">
                  You’re ready to achieve something more
                </p>
                <p className="text-sm text-gray font-normal">
                  You're making a sales growth push, to increase market share or
                  revenue, E.g. 2x-3x annual revenue; be in the top 25% of
                  service providers by annual revenue growth
                </p>
              </div>
            </div>
            <div className="w-full md:w-[49%]  flex justify-center border-[1px] border-lightGray rounded-2xl">
              <div className="flex flex-col p-6 gap-8">
                <img
                  src={Images?.Userhands}
                  alt=""
                  height={50}
                  width={50}
                  className={`items-center`}
                  onClick={() => {}}
                />
                <p className="text-base text-darkBlack font-semibold font-primary-bd">
                  A successful exit is on your radar
                </p>
                <p className="text-sm text-gray font-normal">
                  You're an entrepreneur finally ready to cash in on a hard
                  earned, a life changing exit - and you need better sales
                  results in order to accomplish the exit you deserve.
                </p>
              </div>
            </div>
            <div className="w-full md:w-[49%]  flex justify-center border-[1px] border-lightGray rounded-2xl">
              <div className="flex flex-col p-6 gap-8">
                <img
                  src={Images?.HandStars}
                  alt=""
                  height={50}
                  width={50}
                  className={`items-center`}
                  onClick={() => {}}
                />
                <p className="text-base text-darkBlack font-semibold font-primary-bd">
                  You need to try something different
                </p>
                <p className="text-sm text-gray font-normal">
                  You're tired of failing everything "in the book", wasting
                  capital $ on sales hires, trying to increase sales and
                  motivate salespeople to give their best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className=" pt-10 px-10 md:px-[100px] pb-12 bg-lightPink">
        <div className="flex flex-col gap-8">
          <h4 className=" text-2xl text-darkBlack font-primary-bd">
            You already know in a "scale-up" stage, optimizing your sales
            efforts is important. But how do you optimize?
          </h4>
          <p className=" text-base font-normal text-mdGray">
            Your sales process.. your pitch.. your materials.. your training..
            your client experience.. the underlying structure of everything
            touching a lead or client. What about optimizing your sales team
            member engagement, and resulting productivity?
          </p>
          <p className=" text-base font-normal text-mdGray">
            If you're committed to scaling up.. that almost always means giving
            up some control and/or taking more risks as a CEO or sales leader.
            To support you in this, I help you implement actions you can control
            and measure, BEFORE you make those big sales hires or other capital
            investments in your sales growth.
          </p>
          <div className="flex flex-wrap justify-center md:justify-between gap-4"></div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between gap-4">
          <div
            className="flex flex-col p-6  bg-lightPink border-2 border-white w-full md:w-1/4 rounded-3xl items-center shadow-lg"
            style={{ boxShadow: "0px 14px 18px 0px rgba(0, 0, 0, 0.04)" }}
          >
            <img
              src={Images?.SuspensionBolt}
              alt=""
              height={50}
              width={50}
              className={`items-center`}
              onClick={() => {}}
            />
          </div>

          <div
            className="flex flex-col p-6  bg-lightPink border-2 border-white w-full md:w-1/4 rounded-3xl items-center shadow-lg"
            style={{ boxShadow: "0px 14px 18px 0px rgba(0, 0, 0, 0.04)" }}
          >
            <img
              src={Images?.Chart2}
              alt=""
              height={50}
              width={50}
              className={`items-center`}
              onClick={() => {}}
            />
          </div>

          <div
            className="flex flex-col p-6  bg-lightPink border-2 border-white w-full md:w-1/4 rounded-3xl items-center shadow-lg"
            style={{ boxShadow: "0px 14px 18px 0px rgba(0, 0, 0, 0.04)" }}
          >
            <img
              src={Images?.Userhands}
              alt=""
              height={50}
              width={50}
              className={`items-center`}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      {/* Section 4*/}
      <div className=" pt-10 px-10 md:px-[100px] pb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <h4 className=" text-3xl text-darkBlack font-primary-bd">
            Where does my role as a consultant fit in, to your sales growth?
          </h4>
          <div className="flex flex-col gap-8">
            <p className=" text-base font-normal text-gray">
              You can think of my role as a collaborator and partner. Bringing
              on a fresh, non-biased, seasoned sales perspective applied through
              my customized processes - completely focused on leaving your sales
              scale-up in a better condition than when we started working
              together.
            </p>
            <p className=" text-base font-normal text-gray">
              From there, after "kick off" sessions I deliver, on an ongoing
              basis you can leverage my knowledge and experience I spent over a
              decade of sales calls / closed deals / leads generated / proposals
              developed / clients managed, and more - to bring your vision into
              reality - via a delivery model that integrates directly with your
              role as an active CEO or sales executive.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between gap-4"></div>
        </div>
      </div>
      {/* Section 5*/}
      <div
        className=" bg-contain md:bg-cover"
        style={{ backgroundImage: `url(${Images?.Frame})` }}
      >
        <div className="bg-xlGray bg-opacity-20 w-full  flex  md:px-[100px] pb-12 relative justify-between ">
          <div className="flex flex-col gap-8 p-10 w-1/2">
            <h5 className=" text-lg font-semibold text-darkBlack font-primary-md">
              My role is to be there for you as a Founder / CEO / Sales Leader
              on an ongoing basis. Including proactively bringing your attention
              to potential sales problems, and even doing sales work myself if
              needed to uncover solutions.
            </h5>
            <p className=" text-xl text-gray font-normal">
              Utilizing my career in professional services, I work with my
              clients in a customized manner - integrating my work directly with
              you and your company, based on your individual needs.
            </p>
            <p className=" text-xl text-gray font-normal">
              My consulting offering adds value via both strategic ideation AND
              implementation of your most important growth initiative - growing
              sales - the "lifeblood" of any company.
            </p>
          </div>
          <div className=" w-1/2 flex justify-end ">
            <div>
              <img
                src={Images?.Andrea}
                alt=""
                height={600}
                width={400}
                className={` items-center `}
                onClick={() => {}}
              />
            </div>
          </div>

          <div
            className=" absolute top-1/4 left-2/4 transform -translate-x-2/5 -translate-y-1/2 w-56 h-28 bg-white shadow-lg border-[1px] border-lightGray p-6 rounded-2xl flex justify-between items-center"
            style={{ boxShadow: "0px 14px 18px 0px rgba(0, 0, 0, 0.04)" }}
          >
            <div>
              <img
                src={Images?.Protection}
                alt=""
                height={56}
                width={56}
                className={` items-center `}
                onClick={() => {}}
              />
            </div>
            <div className="flex flex-col">
              <p className=" text-2xl font-bold font-primary-Ex-bd text-black">
                100%
              </p>
              <p className=" text-xs font-bold  text-mdLightGray">
                Success rate this year
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className=" pt-10 px-10 md:px-[100px] pb-12 flex flex-col gap-8">
        <h4 className=" text-2xl font-semibold text-darkBlack font-primary-md">
          In the sales consulting world, clients typically get 1 of 2 types of
          people, or some combination of the two: 
        </h4>
        <p className=" text-base font-normal text-darkBlack">
          1. Sales consultants who are really marketing people
        </p>
        <p className=" text-base font-normal text-darkBlack">
          2. Sales consultants who are really finance / M&A / or operations
          people 
        </p>
        <p className=" text-base  text-mdGray font-normal">
          In my case, I've been a sales person for over 10 years - and I truly
          appreciate sales as a disciplined profession. My experience
          encompasses both high performing sales activity, and also transforming
          the sales activity into a repeatable, scalable underlying structure -
          independent from activity (calls, meetings, closed deals generated)
          itself.  I've designed underlying structure for 3 different sales
          organizations, and implemented them "on the ground"... even getting my
          own leads my entire career.
        </p>
        <p className=" text-base  text-mdGray font-normal">
          Through my sales career experience, I bring a deep understanding of
          what fails and what succeeds to impact results, on the surface and
          behind the scenes. As well as how to motivate and engage salespeople. 
          I can be as hands-on with you and your team as needed. I've "hunted"
          my own leads my whole sales career, and led every stage of sales
          processes from targeting the ideal lead to making it a billable
          client.{" "}
        </p>
      </div>

      {/* Section 7 */}
      <div className="pt-10 px-4 md:px-[100px] pb-12 flex flex-col gap-8">
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
                  makes your sales team more self-sustaining without unnecessary
                  oversight.
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
              className="h-56 w-56 md:h-96 md:w-96"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      {/* Section 8 */}
      <div className="pt-10 px-4 md:px-[100px] pb-12 flex flex-col gap-8">
        <div
          className="bg-contain md:bg-cover relative rounded-3xl"
          style={{ backgroundImage: `url(${Images?.Mask})` }}
        >
          {/* Overlay with reduced opacity */}
          <div className="absolute inset-0 bg-green opacity-70 rounded-xl"></div>

          <div className="p-4 md:p-12 flex flex-col md:flex-row gap-4 relative z-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-primary-Ex-bd text-white text-3xl md:text-4xl text-center md:text-left">
                Mission
              </h2>
              <p className="text-base font-primary-rg text-white text-center md:text-left">
                I'm on a mission to bring a unique approach to sales consulting
                and meaningful change to businesses, by partnering with those
                who trust me to support them in such an important area of any
                business - your sales results. As I have throughout my sales
                career with thousands of leads and clients - I aim to earn your
                trust through results and actions. And I utilize my prior
                experience to help people in very specific, meaningful ways.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between   md:items-end">
              <div className="flex flex-col gap-1">
                <div className="h-11 w-full md:w-[170px] rounded-[68px] border-[2px] border-white relative overflow-hidden hover:bg-gray">
                  <div className="bg-lightGray opacity-50 rounded-[68px] w-full h-full flex justify-center items-center">
                    <p className="text-white opacity-100 text-center md:text-left">
                      Let's meet
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-transparent border-none text-white py-2 px-4 rounded-[68px] hover:bg-opacity-75 hover:text-opacity-100 transition duration-300 ease-in-out">
                      Let's meet
                    </button>
                  </div>
                </div>
                <p className="text-xs font-normal text-center text-white ">
                  In Person Preferred
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
