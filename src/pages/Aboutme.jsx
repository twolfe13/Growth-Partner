import React from "react";
import LandingImage from "../components/home/LandingImage";
import { Images } from "../assets";

export default function Aboutme() {
  return (
    <div>
      <LandingImage
        img={Images?.MaskAboutMe}
        highlight="About us"
        heading="Where I'm From and Where I've Been"
        content="I believe the places you've been - where you grow up, where you experience life over time, the people and physical environment, plays a large role in 'who you are' or your values, as a human doing business. "
        className="mx-10 "
      />
    </div>
  );
}
