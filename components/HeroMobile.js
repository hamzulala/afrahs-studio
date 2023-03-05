import React from "react";
import ImgCarouselMobile from "./ImgCarouselMobile";
import projects from "@/data/projects.json";
import Header from "./Header";

const HeroMobile = ({ projectId }) => {
  /*
        LANDING PAGE FOR MOBILE VIEW
     */

  return (
    <div
      className="items-center ease-in duration-300"
      style={{ color: `${projects[projectId].secondaryColor}` }}
    >
      <div className="md:hidden overflow-y-auto ">
        <Header
          primaryColor={projects[projectId].primaryColor}
          secondaryColor={projects[projectId].secondaryColor}
        />
      </div>
      <ImgCarouselMobile projectId={projectId} />
    </div>
  );
};

export default HeroMobile;
