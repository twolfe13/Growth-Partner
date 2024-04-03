import React from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";

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
        className="mx-10 "
      />
    </div>
  );
}
