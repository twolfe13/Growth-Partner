import React from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";

export default function SalesEngagement() {
  return (
    <div>
      <LandingImage
        img={Images?.MaskSalesEngagements}
        highlight=" Sales Talent Engagement"
        heading="Sales & Client Team Engagement"
        content="Do you struggle to excel in retention, and engagement of talent in the 2023 talent market? You're not alone."
        className="w-1/2"
      />
    </div>
  );
}
