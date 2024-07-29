import React from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";

const infrastructureData = [
  {
    key: "KPI",
    des: "The KPI isn't the sales activity.. the calls or emails, but KPIs put in place to help optimize how the salesperson works, as a result optimizing their performance and company sales performance as a whole.",
  },
  {
    key: "Sales Pitchbook",
    des: "Pitches are infrastructure that help you optimize each time / $ put into outbound sales effort.  you could do your pitches 'off the cuff' for intro calls, but it could optimize things to have different pitches for different leads.   Making the sales pitch is a sales activity, but the 'playbook' is the infrastructure in place.",
  },
  {
    key: "Sales Processes",
    des: "You could, and many many companies do - complete sales without a formal process.  But with an underlying sales process with the different stages and involvement / dependencies (sometimes even  involving other internal functional areas apart from sales) built in, you can more proactively guide the lead to buy on your sales calls (or other activity) more efficiently.. for your lead, and for your internal people.  Ultimately, implementing a highly intentional sales process geared towards the lead makes your firm much more competitive than freelancers or other forms of competition.",
  },
];
const SalesInfrastructure = [
  {
    image: Images?.SalesProcess,
    heading: "Sales Process",
    des: [
      "Stages are robust and fully developed, and* truly aligned with how the sale actually works 'on the ground'.",
      "Defined in detail for every instance / meeting / action required for leads to buy. Including how it works cross-functionally with other departments as needed to complete the sale.",
      "The whole sales team has it present and fully understands.  Non-sales people even understand it as needed (cross functional)",
      "How to have a firm sales process and at the same time be flexible for the right opportunities.",
      "At each stage of the sales process AND client process, what are you trying to achieve?  (e.g. staffing at the beginning you're trying to show you can attract top talent..e ven if not the right fit, but a hihg level).  What dependencies are their from the lead for them to buy, and how to optimize that?",
    ],
  },
  {
    image: Images?.SalesMaterial,
    heading: "Sales Material",
    des: [
      "Describe your offering and value proposition is key",
      "In a customized way thinking about your business model first (e.g. product or service). Impacts the length, style, etc. improvisation.",
      "Customized material for each stage in the sales process (e.g. After intro share this material, for Proposal send this material)",
    ],
  },
  {
    image: Images?.handoff,
    heading: "'New Sale to Client' Hand-off Process",
    des: [
      "Design a pass off from sales to client success / operations in a way that's a smooth, efficient experience for the client aligned with their needs from the sales process - and at the same time, your internal team gets what they need to deliver a high quality service.",
    ],
  },
  {
    image: Images?.SalesResources,
    heading:
      "Sales resources:  Sales training material, Cross-functional collaboration material",
    des: [
      "Optimize internal dependencies with internal education that's under your control.",
      "Different functions have different objectives.  How to make them work together, in a way that prioritizes the sales team's results?",
      "Work in a way based on clear shared roles & responsibilities, not based on an individual or 'in the moment' improvisation.  A way that can be 'passed off' when someone goes on vacation, etc",
    ],
  },
  {
    image: Images?.CrossFunctionalResponsisbilites,
    heading:
      "Cross-functional  responsibilities + processes for sales and client delivery",
    des: [
      "Makes organization more scalable and quantified, touching every sales and client related department including operations and even Finance (podio HR apps, proposal, to projects that includes finance and operations)...",
    ],
  },
  {
    image: Images?.KPIDevelopment,
    heading: "KPI Design and Development",
    des: [
      "Lead Journey (sales process but including marketing.. sometimes relevant to make, but sales process is most important",
      "Customer Journey (from when becomes a client, to making it billable)",
    ],
  },
  {
    image: Images?.SalesJourney,
    heading: "Create “Sales Journeys”",
    des: [
      "Lead Journey (sales process but including marketing.. sometimes relevant to make, but sales process is most important",
      "Customer Journey (from when becomes a client, to making it billable)",
    ],
  },
  {
    image: Images?.PitchDevelopment,
    heading: "Pitch Development",
    des: [
      "You finally got a response or Intro Call booked. Now what do you say on the call?  How you present your offering is critical to get the actions needed to complete a sale.",
      "Or what do you say to get the meeting, when executives are constantly flooded with messages from sales representatives?",
    ],
  },
  {
    image: Images?.ValuePreposition,
    heading: "Value Proposition Development",
    des: [
      "You need an optimized value prop for your target, that is differentiated in your market.  You can only get this from 'on the ground' sales work, all the way through the process, multiple times to see reactions and confirm what they need.",
      "You need to think deeply about what are the 'bullets' of a value proposition, of which as many as possible you feel certain will 'move people'.",
    ],
  },
  {
    image: Images?.CrossFunctionalSalesTeamRoles,
    heading:
      "Cross-Functional Sales Team Roles, Responsibilities and Activities",
    des: [
      "Intentionally design structures and experiences for sales - operational events that touch the lead / client.",
      "Role structures customized to fit your business and sales org.",
      "Robust outlined activities to improve salespeople engagement and self-sufficiency",
    ],
  },
  {
    image: Images?.SalesTrading,
    heading: "Sales Tooling",
    des: [
      "CRM product(s) tailored for your business (Podio, Pipedrive, or a combination)",
      "AI tools like meeting recording and summarization (only as needed and if relevant for your goals.. E.g. not using AI if you want people to actively learn those things, or teach a way of thinking)",
    ],
  },
  {
    image: Images?.SalesPlaybook,
    heading: "Sales Playbook (new and client sales)",
    des: [
      "Based on real sales activity, empower your sales people with specific examples of positive AND negative outcomes to learn from -  detailing the key learning points from the experience.",
      "Can contain mini pitches, specific sales/industry knowledge, and more based on the individual company needs.",
    ],
  },
  {
    image: Images?.ServiceOfferingStructure,
    heading: "Service offering structure",
    des: ["(e.g. what we do; how we work)"],
  },
  {
    image: Images?.OnboardingTransisitonProcess,
    heading: "Onboarding / Transition Process",
    des: [],
  },
  {
    image: Images?.EducationResourceHub,
    heading: "Education Resource Hub",
    des: [],
  },
  { image: Images?.PricingRate, heading: "Pricing / Rate Card", des: [] },
  {
    image: Images?.TransitionProcess,
    heading: "Transition Process",
    des: [
      "Someone moving on or not working out shouldn't de-stabilize your company in any way.  You want your replacement to perform ASAP, and take the least time as possible from other salespeople to get them up to speed.",
    ],
  },
];
export default function NewSalesInfrastructure() {
  return (
    <div>
      <LandingImage
        img={Images?.MaskInfrastructure}
        highlight=" Sales Talent Engagement"
        heading="Sales Infrastructure"
        content="A sales 'scale-up' ideally starts here.  What do I mean by infrastructure?  I think about sales infrastructure as separate from the actual sales activity.  Meaning it's not sales activity, it empowers sales activity - making each activity more effective to achieve desired outcomes. Having solid sales infrastructure is about being proactive and efficient with salespeople's time and energy.   You put time and effort into infrastructure to optimize.. to 'do more with less'.. to capitalize on each lead that comes through"
        className="mx-10"
      />
      <div className=" py-12 flex flex-col justify-center items-center px-10 md:px-0">
        <h3 className=" text-3xl font-primary-md text-black">
          Sales infrastructure for B2B Services Companies
        </h3>
        <div className="flex flex-col md:flex-row gap-4 pt-12">
          <div className=" flex flex-col py-[30px] px-[42px] rounded-2xl gap-2 w-[300px] md:w-[448px] border-[1px] border-lightGray items-center">
            <img
              src={Images?.SuspensionBolt}
              alt=""
              height={72}
              width={72}
              className={`items-center `}
              onClick={() => {}}
            />
            <h5 className=" text-lg text-black font-primary-md">
              Optimize generation of sales activity and outcomes
            </h5>
            <p className=" text-base text-gray">
              Initial internal infrastructure, that helps optimize generation of
              sales activity and outcomes (more predictable, higher sales
              activity)
            </p>
            <p className=" text-base text-gray">
              E.g. Sales pitchbook, sales material, KPIs 
            </p>
          </div>
          <div className=" flex flex-col py-[30px] px-[42px] rounded-2xl gap-2 w-[300px] md:w-[448px] border-[1px] border-lightGray items-center">
            <img
              src={Images?.SuspensionBolt}
              alt=""
              height={72}
              width={72}
              className={`items-center `}
              onClick={() => {}}
            />
            <h5 className=" text-lg text-black font-primary-md">
              Optimizes each sales activity outcome for each lead/client
            </h5>
            <p className=" text-base text-gray">
              Lead or client-facing infrastructure, that further optimizes each
              sales activity outcome, for each lead/client that passes through 
              (more predictable, efficient sales results and revenue $)
            </p>
            <p className=" text-base text-gray">
              E.g. Sales process, Customer experience
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-[50px] px-10 md:px-[100px] bg-lightPink">
        <h3 className=" text-3xl text-[#212529] font-primary-md">
          A few examples of sales infrastructure explained:
        </h3>
        <div className="border-[1px] bg-lightGray w-full h-1"></div>
        {infrastructureData?.map((item) => (
          <div className=" flex flex-col md:flex-row w-full py-4 border-b-[1px] border-lightGray">
            <h4 className="flex text-black text-2xl w-1/4 items-center py-2">
              {item?.key}
            </h4>
            <p className=" text-gray  text-base w-full md:w-3/4">{item?.des}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 py-[50px] md:px-[100px] px-10 ">
        <p className=" txet-base text-gray">
          All these elements of sales infrastructure (and many more) will help
          you achieve more predictable sales revenue. To "unpack" and carefully
          architect infrastructure, ultimately it takes both deep sales
          experience and deep business experience in your typical sale.
        </p>
        <p className=" txet-base text-gray">
          Through robust sales infrastructure, we literally quantify your sales
          efforts with actionable information within a smooth process,
          empowering both management and salespeople. Through this change in
          working style, you effectively stop relying on emails and
          conversations that get lost or lack clear, timely cross-functional
          information. Most importantly, working this.
        </p>
      </div>
      <div className="flex flex-col gap-4 py-[50px] md:px-[100px] border-b-[2px] border-lightGray">
        <p className=" text-base text-lightGreen xs:px-10 md:px-0">
          What I work on
        </p>
        <div className="flex flex-col md:flex-row md:justify-between xs:px-10 gap-2 md:px-0 ">
          <div className="flex flex-col md:flex-row gap-2 md:items-center">
            <h2 className=" text-base md:text-3xl text-black font-primary-md ">
              Examples of what I work on for
            </h2>
            <h2 className=" text-base md:text-3xl text-darkGreen font-primary-md md:text-center">
              Sales Infrastructure
            </h2>
          </div>
          <div className=" h-12 w-52 xs:text-sm  bg-darkGreen rounded-[68px] py-[9px] px-6  flex items-center justify-end text-xlGray">
            {" "}
            Delivery Model Info{" "}
          </div>
        </div>
        <p className=" text-sm text-gray xs:px-10 md:px-0">
          What's included and to what extent is unique to each case, and totally
          driven bythe nature of your scale-up goals and needs.
        </p>
        <ul className="ml-4 xs:px-10 md:px-0">
          <li className=" text-gray text-sm list-disc">
            Delivered in-person and virtually; through one-time consulting
            kick-off "events", ongoing meetings, and on-demand.
          </li>
          <li className=" text-gray text-sm list-disc">
            Time Duration: 2-6+ months depending on each case
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 py-[50px] px-10 md:px-[100px]">
        {SalesInfrastructure?.map((item, index) => (
          <div className=" flex flex-col gap-4">
            <div className="flex flex-row gap-x-4">
              <div>
                <img
                  src={item?.image}
                  alt=""
                  height={32}
                  width={32}
                  className={`items-center `}
                  onClick={() => {}}
                />
              </div>
              <h5 className="text-[18px] font-primary-md text-black">
                {item?.heading}
              </h5>
            </div>
            <ul className="pl-5">
              {item?.des?.map((val) => (
                <li className=" text-gray text-base list-disc py-1">{val}</li>
              ))}
            </ul>
            {index != SalesInfrastructure?.length - 1 && (
              <div className=" h-[1px] bg-lightGray rounded w-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
