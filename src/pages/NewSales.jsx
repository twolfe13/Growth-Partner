import React from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";
import Footer from "../common/Footer";

const data = [
  {
    heading: "Proprietary Sales Methodolgy",
    des: "I developed my sales methodology after 10+ years in sales, proven to close deals with billion dollar organizations and start-ups as clients. I will not only deliver the knowledge, I help your salespeople actually implement it in real-time sales scenarios.",
  },
  {
    heading: "Navigating the decision-maker",
    des: "Identifying decision-makers, defining each of their roles in the sale, and working based off that is critical to closing deals consistently.  Often especially in B2B sales, you're tasked with making other people look good.  I can help you with that, with both major corporations and smaller growth start-up leads or clients.",
  },
  {
    heading: "Fully leverage channels for new sales",
    des: "Events / conferences, LinkedIn, Email, and Phone.  How to use each of them to bring the most results?  Leverage my experience about how to use sales channels in the most modern and effective ways.  I can help your team in very specific ways, like not being too 'sales-y' - which can be key in building trust with new cold leads. How to leverage LinkedIn strategically to build a network AND capitalize $ on it.",
  },
  {
    heading: "Pitch optimization",
    des: "Leverage my experience of crafting sales pitches that brough multiple companies to market, and resulted in millions of new sales revenue - to optimize your pitches on calls and other sales channels.",
  },
  {
    heading: "Strategic pipeline development",
    des: "How to properly research, follow up, and  qualify leads, carefully aiming to optimize sales results efficiently. (there are more buyers who can't buy than those that can.. the ones who can't can kill a salesperson's motivation and resulting performance) Remember a sales scale-up needs to consistently generate new cold leads.",
  },
  {
    heading: "Objection Management",
    des: "Strategies for handling common objections from leads during the sales process.",
  },
  {
    heading: "Strategic trust building",
    des: "How and when to break the ice, when to be transparent with leads, and more - all while optimizing the sales result at the same time.  Tap into my experience about how leads / buyers think to build trust and inspire action.",
  },
  {
    heading: "How to make it easier to buy",
    des: "In proessional services, salespoele need to be able to guide leads through transferable customized buying process, in order to gain differentiation from competitors including freelancers around the globe who can provide lower costs.",
  },
  {
    heading: "Run sales meetings better",
    des: "Learn how to take control of the meeting, get through all the content and dependencies you need to give efficiently.Take actions before and after meetings that optimize outcomes.",
  },
];
export default function NewSales() {
  return (
    <div>
      <LandingImage
        img={Images?.MaskNewSales}
        highlight="New Sales Growth"
        heading="Generate more, higher quality B2B leads. Finally, 'get over the hump' take your new sales activity to the next level."
        content="I help you both strategize and implement actions - to increase your new sales activity, in a repeatable manner. Utilize my new sales experience to more effectively penetrate your target market and generate more predictable sales activity - leads, calls/meetings, proposals, and ultimately - new deals closed."
        className="mx-10"
        hStyle="text-lg md:text-5xl text-white"
        cStyle="text-lg md:text-xl text-white"
      />
      <div className="flex flex-col w-full px-10 justify-between py-[50px] gap-y-20 md:px-[100px]  ">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-6 w-full md:w-2/3">
            <h5 className=" text-lg text-black font-primary-md">
              In a real sales scale-up, you can’t rely on a single “rainmaker”
              salesperson, nor be doing sales yourself as the CEO
            </h5>
            <p className=" text-gray text-base ">
              In a sales scale-up, for an exit or not, you ultimately need a
              sales team to produce. You need to close new sales deals reliably
              (so you don't rely too much on a few large customers) - not
              relying on a single "rainmaker" salesperson, nor to be doing sales
              yourself as the CEO. I can help you navigate getting to that next
              level, using my experience "on the ground" about what works and
              what doesn't work with sales teams to help guide you.
            </p>
            <p className=" text-gray text-base ">
              I can tell you there's no "easy way out" to predictable revenue..
              even with the greatest website, LinkedIn page, or referral program
              in the world.
            </p>
            <p className=" text-gray text-base ">
              If you're committed to the hard, organic way - I want to face the
              challenge with you, including involving partners from my network
              (if needed) and utilizing my 10+ years of organic new sales
              experience - even getting my own leads throughout my entire sales
              career.
            </p>
            <p className=" text-gray text-base ">
              Real new sales "scale ups" require vulnerability to fail, and
              relentless, consistent actions. The reality is, most companies
              fail or give up on their sales growth standards / ambitions.
              Resulting in countless time and $ wasted on expensive sales hires,
              sales products, or some combination
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center md:justify-end  w-full md:w-1/3 h-96 items-center">
            <img
              src={Images?.NewSales}
              alt=""
              className=""
              onClick={() => {}}
            />
            <p className=" text-gray text-sm">
              LI Article Chief Growth Office screenshot
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-10 justify-between gap-6 pb-[50px]  md:px-[100px]  ">
        <div className="flex flex-col md:flex-row gap-[53px] w-full ">
          <h1 className=" text-[#333333] text-5xl font-primary-bd w-2/6 leading-relaxed">
            {" "}
            Healthy{" "}
            <span className=" text-5xl text-green font-primary-bd">
              Sales
            </span>{" "}
            pipeline{" "}
          </h1>
          <div className="flex flex-col gap-6 md:w-4/6 w-full">
            <p className="text-base text-gray">
              A healthy sales pipeline generates new leads consistently - and
              importantly for management - in a repeatable manner.
            </p>
            <p className="text-base text-gray">
              Although they're typically more performant, you can't rely on
              referrals and inconsistent inbound leads. You need a controllable,
              repeatable sales pipeline to increase your company value. That
              means you need significant outbound activity, meaning you need
              capability in-house to build trust with and convert cold leads.
            </p>
          </div>
        </div>
        <p className=" text-base text-gray">
          My hands-on approach working directly alongside you and/or your team
          to implement my sales methodologies, is much less risky than hiring a
          costly sales manager. I work alongside your salespeople to help them
          become as empowered as possible to be self-efficient, and if hiring a
          manager is the best fit for your path to scale your new sales efforts,
          I will even help you hire them.
        </p>
        <div className="flex flex-wrap justify-center md:justify-between gap-4">
          <div
            className="flex flex-col p-6  bg-white border-2 border-white w-full md:w-1/4 rounded-3xl items-center shadow-lg"
            style={{ boxShadow: "0px 14px 18px 0px rgba(0, 0, 0, 0.04)" }}
          >
            <img
              src={Images?.Snow2}
              alt=""
              height={50}
              width={50}
              className={`items-center`}
              onClick={() => {}}
            />
          </div>

          <div
            className="flex flex-col p-6  bg-white border-2 border-white w-full md:w-1/4 rounded-3xl items-center shadow-lg"
            style={{ boxShadow: "0px 14px 18px 0px rgba(0, 0, 0, 0.04)" }}
          >
            <img
              src={Images?.RepeatOne}
              alt=""
              height={50}
              width={50}
              className={`items-center`}
              onClick={() => {}}
            />
          </div>

          <div
            className="flex flex-col p-6  bg-white border-2 border-white w-full md:w-1/4 rounded-3xl items-center shadow-lg"
            style={{ boxShadow: "0px 14px 18px 0px rgba(0, 0, 0, 0.04)" }}
          >
            <img
              src={Images?.MoneyBag}
              alt=""
              height={50}
              width={50}
              className={`items-center`}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-10 justify-between gap-6 pb-[50px]  md:px-[100px]  ">
        <h5 className=" text-lg text-black font-primary-md">
          Are you really committed to new sales growth, in a scalable repeatable
          manner (predictable revenue")?
        </h5>
        <p className="text-base text-gray">
          If you're not truly committed to it - it's not important if you use a
          CRM really well, if you have an optimized pitch, sales material, or
          any other optimization you discuss with me or internally. If you don't
          change business will still keep going as usual - you'll keep getting
          that occasional inbound lead, that referral low hanging fruit
        </p>
        <div className="py-10  flex flex-col gap-8">
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
            
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-10 justify-between gap-6 pb-[50px]  md:px-[100px]  ">
        <h2 className=" text-black text-4xl font-primary-md">
          My
          <span className=" text-4xl text-green font-primary-md">
            Value-driven
          </span>{" "}
          approach to new sales
        </h2>
        <p className=" text-gray text-base ">
          Like many sales concepts -
          <span className=" text-base text-black  font-primary-md">
            a value-driven approach
          </span>{" "}
          is abstract and may be easy to understand conceptually, but very
          difficult to implement in specific practice.
        </p>
        <p className=" text-gray text-base ">
          The highest performing, modern sales organizations are able to
          implement a value-driven, long-term relationship approach that
          <span className=" text-base text-black  font-primary-md">
            makes leads feel
          </span>{" "}
          it's easy to buy.
        </p>
        <p className=" text-base text-gray">
          This approach mainly drives two things:
        </p>
      </div>
      <div className="flex px-2 md:px-[100px] pb-[50px]">
        <div className="flex flex-col  md:flex-row w-full h-[100px] bg-green rounded-[124px]  items-center justify-center  ">
          <div className="flex flex-row gap-1 md:p-4 md:gap-4">
            <img
              src={Images?.CheckBadge}
              alt=""
              className=" w-4 h-4 md:w-[30px] md:h-[30px]"
              onClick={() => {}}
            />
            <p className=" text-sm md:text-lg text-lightGreen"> Trust</p>
            <p className=" text-sm  md:text-lg text-lightGreen"> +</p>
            <img
              src={Images?.ShieldCheck}
              alt=""
              className=" w-4 h-4 md:w-[30px] md:h-[30px]"
              onClick={() => {}}
            />
            <p className=" text-sm md:text-lg text-lightGreen">
              {" "}
              Buying Actions
            </p>
            <p className=" text-sm md:text-lg text-lightGreen"> =</p>
            <img
              src={Images?.More}
              alt=""
              className=" w-4 h-4 md:w-[30px] md:h-[30px]"
              onClick={() => {}}
            />
            <p className=" text-sm md:text-lg text-lightGreen"> More Sales</p>
          </div>
          <p className=" text-sm md:text-lg text-lightGreen"> &</p>
          <div className="flex flex-row gap-1 md:p-4 md:gap-4">
            <img
              src={Images?.User}
              alt=""
              className=" w-4 h-4 md:w-[30px] md:h-[30px]"
              onClick={() => {}}
            />
            <p className=" text-sm md:text-lg text-lightGreen">
              {" "}
              long-term relationships
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-10 md:px-[100px] pb-[50px] gap-6">
        <p className="text-base text-gray">
          Being value-driven in sales is a mindset, but it's about how you do
          everything.. and potentially touches every lead interaction on the
          "lead journey". One way to describe this approach from a high-level,
          is it's about being focused on them the lead, and solving their
          problems.. what all leads truly want care and want to talk about.
          Another way to imagine being value-driven is it's a "pull", not a
          "push" approach.
        </p>
        <p className="text-base text-gray">
          Your mindset and approach only becomes apparent and tangible in
          certain situations, and at certain times in the sales cycle. Being
          value-driven with a new potential client early on, can imply "trusting
          first" in difficult situations (e.g. starting to do "work" for a job
          before getting it like showing/talking to candidates in recruiting) -
          which can be dangerous - if the lead/opportunity isn't evaluated
          deeply enough or objectively enough.
        </p>
        <p className="text-base text-gray">
          Utilize my experience and frameworks that provide you the practical
          strategies and actions to achieve long-term relationships with new
          clients, that result in recurring revenue and referrals.
        </p>
      </div>
      <div className="flex flex-col  justify-center items-center bg-lightPink px-10 md:px-[100px] py-[70px]">
        <p className="text-black text-4xl font-primary-bd text-center">
          -- I work with companies who don't have a sales team yet (and need to
          create one), or companies with a sales team already in place --
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-[50px] px-10 md:px-[100px] ">
        <p className=" text-base text-lightGreen  md:px-0">What I work on</p>
        <div className="flex flex-col md:flex-row md:justify-between  gap-2 md:px-0 ">
          <div className="flex flex-col md:flex-row gap-2 md:items-center">
            <h2 className=" text-base md:text-3xl text-black font-primary-md ">
              Examples of what I work on for
            </h2>
            <h2 className=" text-base md:text-3xl text-darkGreen font-primary-md md:text-center">
              New Sales /G2M
            </h2>
          </div>
          <div className=" h-12 w-52 text-center xs:text-sm  bg-darkGreen rounded-[68px] py-[10px] md:px-6  flex items-center  justify-center text-xlGray">
            {" "}
            Delivery Model Info{" "}
          </div>
        </div>
        <p className=" text-sm text-gray  md:px-0">
          What's included and to what extent is unique to each case, and totally
          driven by the nature of your scale-up goals and needs.
        </p>
        <ul className="ml-4  md:px-0">
          <li className=" text-gray text-sm list-disc">
            Delivered in-person and virtually; through one-time "events",
            ongoing meetings, and on-demand.
          </li>
          <li className=" text-gray text-sm list-disc">
            Time Duration: 2-6+ months depending on each case
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap justify-start gap-y-4 px-10 md:px-[100px] py-[50px] ">
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
      <Footer />
    </div>
  );
}
