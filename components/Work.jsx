import React from "react";
import WorkItem from "./WorkItem";
import moviespace from "../public/assets/projects/moviespace2.png";
import spcetravellers from "../public/assets/projects/SpaceTravellerHub.png";
import digiBudgetApp from "../public/assets/projects/DigiApp.png"
import airquality from "../public/assets/projects/airquality.png";

function Work() {
  return (
    <div id="work" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#1e1a95]">
          Projects
        </p>
        <p className="text-sm"> Click on image for more info</p>
        <div className="grid md:grid-cols-2 gap-8">
          <WorkItem
            title="Air Quality"
            backgroundImg={airquality}
            projectUrl="/airquality"
            techStack="#ReactJs #Redux #CSS"
          />
           <WorkItem
            title="Digi-Budget"
            backgroundImg={digiBudgetApp}
            projectUrl="/digibudgetapp"
            techStack="#Ruby #Ruby on Rails #Tailwindcss"

          />
           <WorkItem
            title="Moviespace"
            backgroundImg={moviespace}
            projectUrl="/moviespace"
            techStack="#JavaScript #CSS #HTML"

          />
           <WorkItem
            title="Space Travelers Hub"
            backgroundImg={spcetravellers}
            projectUrl="/spacetraveller"
            techStack="#React #Redux #CSS"

          />
        </div>
      </div>
    </div>
  );
}

export default Work;
