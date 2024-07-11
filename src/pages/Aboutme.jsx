import React, { useState } from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";
import Footer from "../common/Footer";

const textData = [
  "The following year in 2012, I applied for VP of Business Development and got it.   After getting leads, going to meetings with CEOs myself, I was then thrust into being responsible for my own team of sales people.  I led team meetings, trained and guided people to produce sales activity.",
  "The coolest part to me looking back, is we were able to engage salespeople to make calls, use the CRM, etc. - without even having the option to pay them!  It was so cool to me because we were students, selling a real service that made real revenue and impacted businesses - and even people from other countries. ",
  "I dove more in to AIESEC since then (much more than my studies), and eventually became VP of Business Development, then Local President in 2014.. representing NIU in the national plenary alongside top students from schools like Yale and Cornell.",
  "Being responsible for a team and being in such diverse groups of people, taught me a ton about engaging people in a work scenario.. especially those from the 'millennial' generation'. We even developed a talent 'product' called Millennial Leader to recruit more top talent.  The same sales work I do 10 years later, we did even in a more robust and dynamic manner back in AIESEC as students. ",
  "While most poeple were in class, I could be found in the library pitching people on LinkedIn, or taking calls in the back where it was quiet if I got a response (good timing. Call me X), or driving to meet executives I cold called or pitched.   My grades suffered, but I knew the practical sales experience I was getting that other students were simply learning about, would pay off in the end.",
];
const textPresidantData = [
  "After I left university and AIESEC in 2015, after finishing my President term (responsible for BD and Account Management, among other functions like Talent Management), I decided to do a sales internship through AIESEC in the UK.  Working for AIESEC again, getting paid this time.. I was one of 4 US based AIESECers selected to bring our sales experience and knowledge to AIESEC UK - including conducting training at their National Conference.  I was assigned to the Birmingham LC (2nd largest city in the UK) and lived near Birmingham University during the summer of 2015.",
  "After the AIESEC UK stint, it was time to enter the workforce in Chicago, and put my rich AIESEC experience behind me.  I had plenty of opportunities on my radar through the network of CEOs I had built selling AIESEC, and my participating in the College of Business at NIU.  Eventually I identified a Chicago recruiting / services start-up called PreScouter, who was looking for an employee #1 to help them launch a side business called Scholar Source.  It seemed like a good fit, and I could tie in my prior recruiting experience.  I ended up helping the Co-Founder strategize the entire go-to-market effort - writing the outbound pitches, setting up a CRM using Podio (I used it in AIESEC), among other sales processes - even the recruitment process.  We ended up being successful getting the venture of the ground, and I closed my 1st recruiting services deal with Miracle Gro - a $1B+ company.",
  "The Founder was keen to keep me on board, but I decided it wasn't for me.  To me the traditional headhunting industry was on the way out, and I saw a bigger opportunity in software development services.  Even more than a job I could make a lot of money in, I wanted to make impact, like in AIESEC.  So I decided to check the international initernships database for a spanish-speaking opportunity (I took spanish in high school), and found an opportunity with a 20-person custom software development company in Montevideo, Uruguay.  I didn't know anything about Uruguay, but I knew the person who already accepted the 2nd available Go To Market role - he did sales in AIESEC for University of Texas in Austin - so I took the opportunity.  My research told me there was a billions dollars opportunity in the Nearshore IT market.",
];
const textWhereIamFrom = [
  "Born in Frankfort, IL a suburb of Chicago ~ 45 mins to the Southwest.  Population",
  "My neighborhood and High School: Frankfort Square, IL Lincoln-Way High School.  Baby boomer hard working parents, blue collar and office jobs.",
  "Suburbs can be rather rural (e.g. a nearby suburb to Frankfort, Manhattan, was mostly farmland), while I had some friends/acquaintances in Chicago, where I grew up was more like suburbia known as 'Chicagoland'",
  "I spent most of my time on sports my entire childhood, and was outside whenever I could.  I played all sports but laser-focused on ice hockey from ages 6 - 18 years old.  I practiced, trained, and played games at least 4-5 times / week for most of that 12 year period.",
  "My hockey experiences really shaped who I am as a competitor.  I played on a top team (after working my way up from 'bronze' and 'house' level, at a travel club coached by a Canadian former NHLer.  Team won IL state championship in 2008 and several league championships. We were ranked highly in Tier 2 IL hockey (link).  During one stretch we won 22 games in a row, and were ranked #2 in the entire nation.",
];
const ChicagoText = [
  "3rd largest city in the US with about X million people",
  "Economy size: $M (size of X country)",
  "Arts top of the world, very 'cultured' downtown.",
  "Scalability understanding (largest corps and growing start ups open there; large economy / population in city / surrounding suburbs as it's called 'Chicagoland')",
  "Business culture dominated by law, financial world - logical",
];
const NorthernIllinoisText = [
  "My University: Northern Illinois University in DeKalb, IL.  'College town', large public school campus in a remote Chicago west suburb",
  "University is where I found AIESEC, a student run organization - where I could be a 'CEO' of a company, sell a real service, train sales teams, run BoD meetings, and many more experiences that really shaped my business career.  I spent 5 years on AIESEC in at least 4 different roles, extending to the UK and Uruguay.",
  "On a typical day in college, you'd probably find me in the library, but not studying for tests... doing sales work and calls.  My first 'office' was here, standing in the back of the stacks where no one would hear me.. seconds after receiving the reply to my marketing services pitch on LI from a senior level executive in NYC 'interested. Call me 514-676-8889'. Eventually I had an office to work out of, our aiesec office, the org I had already been cutting my sales teeth on for a solid 4.5 years as a 5th year senior.",
];
const MontevideoText = [
  "Lived there 3 years from May 2016- June 2019",
  "Population",
  "learned spanish (wife helped me become fluent)",
  "Small population makes it a hotbed for start-up testing (North and South America)",
  "Economy size:",
  "Emotional, spontaneous world",
  "adipiscing elit, sed do eiusmod tempor",
  "incididunt ut labore et dolore magna aliqua.",
];
const Data = [
  {
    heading: "B2B Client Sales",
    experiance:
      "AIESEC Experience (2011 - 2015), Switch Experience  2016-2023)",
    des: [
      "X Clients managed Switch portfolio",
      "Responsible for X people",
      "Responsible for maintain and upsell client pipeline from $70k to $2.5M annual revenue",
      "Worked closely with Management and internal team in Uruguay in Spanish and English, to work through cultural differences and optimize client account results (retention, upselling, strategic partnership).",
      "More than $7M in total B2B services sold",
      "Managed client accounts at start-ups funded by Mark Cuban, to largest corps in the world.",
      "AIESEC grew existing accounts and trained other account managers in Chicago, Seattle, etc. (get from LI) as part of Nat'l support team",
    ],
  },
  {
    heading: "B2B New Sales career",
    experiance:
      "Switch experience (2016-23), PreScouter / Scholar Source (2015), KMGi (Yandiki photo) (2014-15), AIESEC experiences (2011-2015)",
    des: [
      "Closed B2B deals with various major corporations with revenue over $1B; brands like New York Times, MiracleGro, and others (upon request)",
      "Responsible for creation of new sales pipeline and growth of accounts from $70k to $2.5M+ annual revenue in 2023.",
      "Grew new sales activity from 0 to 400+ leads, with new leads added consistently over 6 years",
      "Developed new strategic sales partnerships since back in 2012 (with university to help AIESEC business produce more, and for recruiting new talent) - and as recent as 2019-23 (Thrive Workplace partnership, Logisyn partnership - resulting in new sales referrals / closed new business deals.  Nearshore Americas - resulting in an article about Switch office space in the leading industry magazine.",
      "In all new business roles spanning my entire 13 year sales career, I was always responsible for getting my own leads.",
    ],
  },
  {
    heading: "Sales Strategy / Leadership",
    experiance:
      "Switch experience (2016-21),PreScouter / Scholar Source (2015),AIESEC experiences (2011-15),NIU Springboard (2014)",
    des: [
      "At Switch, an IT Services company, I co-crafted new sales and marketing language for targeting the US market - using my previous B2B Services sales and G2M experience. Marketing: LI and other social platforms, website (led a re-design later in 2019). Sales: Rate card, Pitch, Intro presentations material, Follow-up presentations, Proposal presentations.",
      "Designed Switch's 1st B2B sales process from scratch (prospect -> lead -> opportunity qualification -> closing deal -> making it billable) including CRM and other tooling.",
      "Designed Switch's 1st formal client management process (including how different functional areas work together), changing the way the company worked with customers to demonstrate more value and competitiveness.",
      "With AIESEC, I coached three Local Client Sales VPs on delivery and customer experience management for clients in the Greater Chicago, Seattle, and Miami area. Created and participated in Account Management innovations that were able to be utilized nationally",
      "With AIESEC, IT Services company, and recruitment company - I created and championed infrastructure innovations (tools, workflows, processes) encompassing sales and other functions like operations, accounting, and HR.",
      "With Springboard at NIU, I led a team of 12 conducting domestic and international market research to determine strategies and make recommendations in: Branding, Business Development, International Trade, Operations, and Social Media Strategy.",
      "With AIESEC, I led 2 sales teams (local BD team, national AM team) and the entire organization of ~35 people as President.  I was responsible to lead meetings with VPs, training sessions with members and external including strategy and entrepreneurial training",
      "With PreScouter / Scholar Source in Chicago, I worked directly with the Founder of the recruitment services firm, to design the sales infrastructure (CRM, pitch, sales process) - in addition to cross-functional processes touching the client (e.g. Sales + Recruiter processes)",
    ],
  },
];
export default function Aboutme() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <LandingImage
        img={Images?.MaskAboutMe}
        highlight="About us"
        heading="Where I'm From and Where I've Been"
        content="I believe the places you've been - where you grow up, where you experience life over time, the people and physical environment, plays a large role in 'who you are' or your values, as a human doing business. "
        className="mx-10"
        hStyle="text-lg md:text-5xl text-white"
        cStyle="text-lg md:text-xl text-white"
      />
      <div className="flex flex-row  w-full px-10 justify-between py-[50px] gap-10 md:px-[100px] bg-xlGray">
        <div className="flex flex-col">
          <img src={Images?.Google} alt="" className="" onClick={() => {}} />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-gray text-base">
            Someone living in a certain place all their life will - to a strong
            extent, interpret the world through that place's environment,
            cultural beliefs, and people they knew and observed over time. 
          </p>
          <p className="text-gray text-base">
            I believe what I can offer as a consultant, is a direct product of my life
            and business experiences - including the different places, wins,
            losses, good times and hard times. I also find it interesting and useful to understand the nuances of
            who people are, especially in the practically unlimited sea of
            people doing business out there.
          </p>
          <p className="text-gray text-base">
            While personally I base my business relationships on mutual results and
            values over time - I believe where someone's been is good to know when
            it comes to meeting new people. And I believe where we've been and how
            it impacts who we are makes us human, and is worth sharing.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  w-full px-10 justify-between py-[40px] gap-10 md:px-[100px]">
        <div className="flex flex-col gap-6 w-full md:w-2/3">
          <h2 className=" text-4xl text-black font-primary-bd">
            My Career as a Salesperson -
          </h2>
          <h5 className=" text-lg text-black font-primary-md ">
            13+ years of high performing, dynamic, hands-on experience
            working for different companies accross 2 continents.   
          </h5>

          <h5 className=" text-lg text-black font-primary-md ">
            Always generating my own leads, and working on both new / client sales strategy and implementation - resulting in millions of new sales revenue.
          </h5>

          <p className=" text-gray text-base ">
            Unlike many sales growth consultants, my background isn't mostly made up of Finance or Operations experience 
            - my background is 100% sales.
          </p>
          <p className=" text-gray text-base ">
            My experience covers practically all sales roles relevant today -
            SDR (lead generator), Account Executive (AE), Account Manager (AM /
            client growth), Strategic Partnership (lead generation
            partnerships), and Sales Manager or GTM Consultant (responsible for a sales team; responsible for sales process design, CRM design, planning/forecasting, and other strategy)
          </p>
          <p className=" text-gray text-base ">
          A few highlights: Helping bring 3 organizations to market successfully in very competitive markets (IT Services and Recruiting markets), generating new sales with multiple billion dollar companies, and closing multiple $1M+ sales deals.
          </p>
        </div>
        <div className="flex flex-col justify-end md:w-1/5 h-116 items-center">
          <img src={Images?.Wolfe} alt="" className="" onClick={() => {}} />
        </div>
      </div>
      {!showMore && (
        <div className="flex justify-center items-center w-full ">
          <h6
            className=" text-green text-base text-center py-[10px] font-primary-bd cursor-pointer"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            Show More...
          </h6>
        </div>
      )}
      {showMore && (
        <div className="animate-slideIn">
          <div className="flex flex-col md:flex-row  w-full px-10 justify-between py-[50px] gap-10 md:px-[100px] bg-lightPink">
            <div className="flex flex-row  md:flex-col gap-6 ">
              <h2 className=" text-4xl text-black font-primary-md">
                Start of my Sales Journey
              </h2>
              <p className=" text-base md:text-xl text-black font-primary-md">
                2011 - 2012
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <p className=" text-base text-gray">
                My 1st sales experience goes back to 2011, while I was still a
                student technically, working for AIESEC (more info and pictures
                below) selling international talent to Chicagoland businesses,
                to help fuel their international expansion / growth initiatives.
                Upon joining my first role was as a Business Development team
                member, covering "SDR" and "AE" activities. I was responsible
                for hunting and developing leads, and closing sales. This is
                when I first made cold calls, used a CRM, and closed my first
                deal (generated $5,000 in revenue, which seemed like alot at the
                time!) that I'll never forget.
              </p>
              <p className=" text-base text-gray">
                I won Business Development Member of the Year, and I was already
                hooked on sales after that 1st taste. The competitiveness, and
                performance-based work felt like hockey and sports to me
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  w-full px-10 justify-between py-[50px] gap-10 md:px-[100px]">
            <div className="flex flex-col md:w-1/3">
              <img
                src={Images?.PresedentTerm1} 
                alt=""
                className=" h-[400px] w-1/2 md:w-1/3"
                onClick={() => {}}
              />

              <h3 className=" text-3xl text-black font-primary-md pt-3">
                1st Sales Team & AIESEC President
              </h3>
              <p className=" text-black text-xl">2012 - 2014</p>
            </div>
            <div className="flex flex-col gap-6 md:w-2/3">
              {textData?.map((item) => (
                <p className=" text-base text-gray">{item}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row  w-full px-10 justify-between py-[50px] gap-10 md:px-[100px] bg-lightPink">
            <div className="flex flex-row  md:flex-col gap-6 md:w-1/3  ">
              <div className=" flex flex-col  gap-4 ">
                <div className=" w-full">
                  <img
                    src={Images?.PresedentTerm2} 
                    alt=""
                    // height={50}
                    width={""}
                    className={`items-center `}
                    onClick={() => {}}
                  />
                </div>
                <div className="flex flex-row w-full justify-between  ">
                  <img
                    src={Images?.RouseConsultancy} 
                    alt=""
                    // height={50}
                    width={"33%"}
                    className={`items-center `}
                    onClick={() => {}}
                  />

                  <img
                    src={Images?.PresedentTerm3}
                    alt=""
                    // height={50}
                    width={"33%"}
                    className={`items-center `}
                    onClick={() => {}}
                  />
                  <img
                    src={Images?.PresedentTerm4}
                    alt=""
                    // height={50}
                    width={"33%"}
                    className={`items-center `}
                    onClick={() => {}}
                  />
                </div>
              </div>
              <h2 className=" text-2xl md:text-4xl text-black font-primary-md">
                After finishing my President term
              </h2>
              <div className="flex flex-col md:flex-row gap-4">
                <p className=" text-base md:text-xl text-black">
                  AIESEC in the UK, 1st sales job in Chicago @ recruitment firm
                </p>
                <p className=" text-base md:text-xl text-black font-primary-md">
                  2015
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 md:w-2/3">
              {textPresidantData?.map((item) => (
                <p className=" text-base text-gray">{item}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row  w-full px-10 justify-between py-[50px] gap-10 md:px-[100px]">
            <h3 className=" text-3xl text-black font-primary-md md:w-1/2">
              How I developed my identity and vision for my place in the world,
              and how I can make an impact on it.
            </h3>
          </div>
          <div className="flex flex-col md:flex-row  w-full px-10 justify-between pb-[50px] gap-10 md:px-[100px]">
            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="flex flex-col md:w-2/3">
                <h5 className=" text-lg text-black w-1/2">
                  Suburban Chicago, Illinois The Base / Where I'm from -
                  1991(b.) to 2010
                </h5>
                <ul className=" pl-4">
                  {textWhereIamFrom?.map((item) => (
                    <li className=" text-gray text-sm list-disc">{item}</li>
                  ))}
                </ul>
              </div>
              <div className=" flex flex-col md:w-1/3 gap-4">
                <div className=" w-full">
                  <img
                    src={Images?.Sports3} 
                    alt=""
                    height={400}  
                    width={""}
                    className={`items-center `}
                    onClick={() => {}}
                  />
                </div>
                <div className="flex flex-row w-full justify-between  ">
                  <img
                    src={Images?.Sports2}
                    alt=""
                    // height={50}
                    width={"33%"}
                    className={`items-center `}
                    onClick={() => {}}
                  />

                  <img
                    src={Images?.Sports1}
                    alt=""
                    // height={50}
                    width={"33%"}
                    className={`items-center `}
                    onClick={() => {}}
                  />
                  <img
                    src={Images?.Sports4}
                    alt=""
                    // height={50}
                    width={"33%"}
                    className={`items-center `}
                    onClick={() => {}}
                  />
                </div>
                <p className=" text-gray text-sm text-center ">
                  hockey, high school pics ADD FROM FRANKFORT
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  w-full px-10 justify-between pb-[50px] gap-10 md:px-[100px]">
            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="flex flex-col md:w-2/3">
                <h5 className=" text-lg text-black w-full md:w-1/2">
                  Suburban Chicago, Illinois The Base / Where I'm from -
                  1991(b.) to 2010
                </h5>
                <ul className=" pl-4">
                  {ChicagoText?.map((item) => (
                    <li className=" text-gray text-sm list-disc">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col md:w-1/3">
                <img
                  src={Images?.Statistic}
                  alt=""
                  // height={50}
                  width={""}
                  className={`items-center `}
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  w-full px-10 justify-between pb-[50px] gap-10 md:px-[100px]">
            <div className="flex flex-col  w-full gap-6">
              <div className="flex flex-col">
                <h5 className=" text-lg text-black w-full md:w-1/2">
                  Northern Illinois University - Dekalb, IL Where I started my
                  sales career - 2010-2015
                </h5>
                <ul className=" pl-4">
                  {NorthernIllinoisText?.map((item) => (
                    <li className=" text-gray text-sm list-disc">{item}</li>
                  ))}
                </ul>
              </div>
              <div className=" flex flex-col gap-2">
                <div className="flex flex-row w-full  justify-between   ">
                  <img
                    src={Images?.Diversity}
                    alt=""
                    // height={50}
                    width={"49%"}
                    className={`items-center `}
                    onClick={() => {}}
                  />
                  <img
                    src={Images?.CodeConduct}
                    alt=""
                    // height={50}
                    width={"49%"}
                    className={`items-center `}
                    onClick={() => {}}
                  />
                </div>
                <div className="flex flex-row w-full  justify-between ">
                  <img
                    src={Images?.GrassRoots}
                    alt=""
                    // height={50}
                    width={"49%"}
                    className={`items-center `}
                    onClick={() => {}}
                  />

                  <img
                    src={Images?.Accessibility}
                    alt=""
                    // height={50}
                    width={"24%"}
                    className={`items-center `}
                    onClick={() => {}}
                  />
                  <img
                    src={Images?.Liberary}
                    alt=""
                    // height={50}
                    width={"24%"}
                    className={`items-center `}
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full px-10 justify-between pb-[50px] gap-10 md:px-[100px]">
            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="flex flex-col md:w-2/3 gap-4">
                <h5 className=" text-lg text-black w-full md:w-1/2">
                  Montevideo, Uruguay Diversity and Humanity 2016 - 2019
                </h5>
                <ul className=" pl-4">
                  {MontevideoText?.map((item) => (
                    <li className=" text-gray text-sm list-disc">{item}</li>
                  ))}
                </ul>
                <p className="text-base text-gray">
                  I traveled back and forth on the 10+ hour flight to the US
                  east coast, for sales meetings.
                </p>
              </div>
              <div className="flex flex-col gap-2    w-full md:w-1/3  items-center">
                <div className="flex flex-row  md:flex-col   ">
                  <div className=" flex flex-col  gap-4 ">
                    <div className=" w-full">
                      <img
                        src={Images?.Montevideo1}
                        alt=""
                        // height={50}
                        width={""}
                        className={`items-center `}
                        onClick={() => {}}
                      />
                    </div>
                    <div className="flex flex-row w-full justify-between  ">
                      <img
                        src={Images?.Montevideo2}
                        alt=""
                        // height={50}
                        width={"49%"}
                        className={`items-center `}
                        onClick={() => {}}
                      />

                      <img
                        src={Images?.Montevideo3}
                        alt=""
                        // height={50}
                        width={"49%"}
                        className={`items-center `}
                        onClick={() => {}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full px-10 justify-between pb-[50px] gap-10 md:px-[100px]">
            <h3 className=" text-3xl text-black font-primary-bd">
              More Places - other than Chicago and Montevideo
            </h3>
            <h5 className=" text-lg text-black font-primary-md">
              Additional cultures I soaked in and met people, for work trips or
              conferences
            </h5>
            <div className="py-5 flex flex-col">
              <h5 className=" text-lg text-black font-primary-md pb-5">
                International:
              </h5>
              <ul className=" pl-4">
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">
                    London, UK and Birmingham, UK
                  </span>{" "}
                  (lived summer 2015), delivered business development
                  traineeship + 2015 National conference facilitator
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">
                    Buenos Aires, Argentina{" "}
                  </span>{" "}
                  (2018 sales trip)
                </li>
              </ul>
            </div>
            <div className="flex flex-col  gap-4">
              <h5 className=" text-lg text-black font-primary-md pb-5">
                United States:
              </h5>
              <ul className="flex flex-col pl-4 gap-4">
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">
                    San Francisco, CA
                  </span>{" "}
                  (2012 AIESEC National Leadership conference, 2018 TechCrunch)
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">Madison, WI</span>{" "}
                  (AIESEC conferences, member and facilitator 2011-2014)
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">
                    Indianapolis, IN
                  </span>{" "}
                  (AIESEC conference 2014, sales trip 2017)
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">Ithaca, NY</span>{" "}
                  (AIESEC Local Committee Presidents Meeting at Cornell
                  University, class of 2015)
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">Denver, CO</span>{" "}
                  (sales trips 2017-2023)
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">
                    New York City, NY
                  </span>{" "}
                  (sales trips 2017-2023, AIESEC National Leadership conference
                  2014)
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">
                    Stamford, CT
                  </span>{" "}
                  (2017-2023 sales trips)
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">
                    Baltimore, MD
                  </span>{" "}
                  (2017-2018 sales trips)
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">
                    Washington, DC
                  </span>{" "}
                  (2018 sales trips)
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">Atlanta, GA</span>{" "}
                  (2017 sales trip)
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">Boston, MA</span>{" "}
                  (2017 sales trip)
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">
                    Charlotte, NC
                  </span>{" "}
                  and
                  <span className="text-gray font-primary-md">
                    Raleigh, NC
                  </span>{" "}
                  (2017 sales trip)
                </li>
                <li className=" text-gray text-sm list-disc">
                  <span className="text-gray font-primary-md">Akron, OH</span>{" "}
                  (2022 sales trip)
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col  w-full px-10 justify-between pb-[50px] gap-10 md:px-[100px]">
            <h4 className=" text-2xl text-black font-primary-md">
              I’ve always been attracted to professional growth, and lived
              various work experiences in 3 countries since my sales career
              started in 2011.  A summary of new and client sales highlights:
            </h4>
          </div>
          <div className="flex justify-center items-center w-full ">
            <h6
              className=" text-green text-base text-center py-[10px] font-primary-bd cursor-pointer"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              Show Less...
            </h6>
          </div>
        </div>
      )}
      {/* show More */}

      <div className="flex flex-col  w-full px-10 justify-between py-[50px] gap-10 md:px-[100px] bg-lightPink">
        {Data?.map((item, index) => (
          <div
            className="flex flex-col md:flex-row  w-full md:justify-between gap-2"
            id={index}
          >
            <h2 className="flex text-black text-lg md:text-4xl font-primary-bd md:w-1/3">
              {item?.heading}
            </h2>
            <p className=" text-black text-base md:text-xl md:w-1/3">
              {item?.experiance}
            </p>
            <ul className="flex flex-col gap-2 md:w-1/3">
              {item?.des?.map((val, idx) => (
                <li className=" text-gray text-base list-disc" id={idx}>
                  {val}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
