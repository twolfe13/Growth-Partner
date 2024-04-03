import React from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";

export default function NewSalesInfrastructure() {
  return (
    <div>
      {" "}
      <LandingImage
        img={Images?.MaskInfrastructure}
        highlight=" Sales Talent Engagement"
        heading="Sales Infrastructure"
        content="A sales 'scale-up' ideally starts here.  What do I mean by infrastructure?  I think about sales infrastructure as separate from the actual sales activity.  Meaning it's not sales activity, it empowers sales activity - making each activity more effective to achieve desired outcomes. Having solid sales infrastructure is about being proactive and efficient with salespeople's time and energy.   You put time and effort into infrastructure to optimize.. to 'do more with less'.. to capitalize on each lead that comes through"
        className="mx-10"
      />
    </div>
  );
}
