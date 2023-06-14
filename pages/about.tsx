import Header from "@/components/Header";
import React from "react";
import Origin from "@/components/Origin";
import AwardsList from "@/components/AwardsList";
import AboutMe from "@/components/AboutMe";
import { About as Info } from "../typings";
import { GetStaticProps } from "next";
import { fetchAbout } from "@/utils/fetchAbout";

type Props = {
  about: Info;
};

//need to fix this page and add a fade effect to the map

const About = ({about}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />
      <div className="max-w-[1240px] space-x-5 space-y-5 h-screen mt-20 pt-10">
        <Origin about={about}/>
        <div className="flex flex-col md:flex-row space-x-10">
          <AwardsList about={about}/>
          <AboutMe about={about}/>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const about: Info = await fetchAbout();
  return {
    props: {
      about,
    },
  }

}

export default About;
