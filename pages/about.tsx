import Header from "@/components/Header";
import React from "react";
import Origin from "@/components/Origin";
import AwardsList from "@/components/AwardsList";
import AboutMe from "@/components/AboutMe";

type Props = {};

//need to fix this page and add a fade effect to the map

const About = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />
      <div className="max-w-[1240px] space-x-5 space-y-5 h-screen mt-20 pt-10">
        <Origin />
        <div className="flex flex-col md:flex-row space-x-10">
          <AwardsList />
          <AboutMe />
        </div>
      </div>
    </div>
  );
};

export default About;
