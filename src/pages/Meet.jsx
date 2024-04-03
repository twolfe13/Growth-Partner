import React from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";

export default function Meet() {
  return (
    <div>
      {" "}
      <LandingImage
        img={Images?.Landing}
        highlight="Delivery Model"
        heading="Consulting Delivery Model"
        content="A sales 'scale-up' ideally starts here.  What do I mean by infrastructure?  I think about sales infrastructure as separate from the actual sales activity.  Meaning it's not sales activity, it empowers sales activity. Having solid sales infrastructure is about being proactive and efficient with salespeople's time and energy.   You put time and effort into infrastructure to optimize.. to 'do more with less'.. ideally with every single sales activity done."
        className="w-1/2"
      />
    </div>
  );
}
