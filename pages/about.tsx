import Header from "@/components/Header"
import React from "react"
import Origin from "@/components/Origin"
import AwardsList from "@/components/AwardsList"

type Props = {};

//need to fix this page and add a fade effect to the map

const About = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />
      <Origin/>
      <div className="flex flex-row">
        <AwardsList/>
      </div>
    </div>
  );
};

export default About;
