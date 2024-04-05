import React from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";

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
    </div>
  );
}
