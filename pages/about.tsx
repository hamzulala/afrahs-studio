import Header from "@/components/Header";
import React from "react";
import MapFx from "@/components/MapFx";

type Props = {};

//need to fix this page and add a fade effect to the map

const About = (props: Props) => {
  return (
    <div className="flex  items-center justify-center h-screen ease-in duration-300">
      <Header />
      <div className="flex flex-row justify-center items-center m-10">
        <div className="flex flex-col space-y-10 lg:space-y-20 xl:space-y-20">
          <MapFx
            src1="/images/map/chennai_mono.png"
            src2="/images/map/chennai_color.png"
            alt="Chennai Map"
          />
        </div>
        <div className=" flex items-center justify-center m-10">
          <MapFx
            src1="/images/map/chennai_mono.png"
            src2="/images/map/chennai_color.png"
            alt="Chennai Map"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
