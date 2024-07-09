/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../Components/Hero";
import Biography from "../Components/Biography";

const AboutUS = () => {
  return (
    <>
   <Hero
        title={"Learn More About Us | DocDirect Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  )
}

export default AboutUS