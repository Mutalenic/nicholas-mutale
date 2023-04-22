import React from "react";
import WorkItem from "./WorkItem";
import moviespace from "../public/assets/projects/moviespace2.png";
import spcetravellers from "../public/assets/projects/SpaceTravellerHub.png";
import digiBudgetApp from "../public/assets/projects/DigiApp.png"
import airquality from "../public/assets/projects/airquality.png";
import Description from "./Description";

function Work() {
  return (
    <div id="work" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#1e1a95]">
          Projects
        </p>
        <div className="grid">
        <div className="grid md:grid-cols-2">
          <WorkItem
            title="Air Quality"
            backgroundImg={airquality}
            projectUrl="/airquality"
            techStack="#ReactJs #Redux #CSS"
          />
          <Description
          description="This is an app for tracking air pollution in a country .In this web
          app you will be able to see what the current air quality data is and
          also can track the data of air pollution based on gas percentage of
          air"
          demoLink="https://deploy-preview-2--stately-kashata-1db13f.netlify.app/"
          codeLink="https://github.com/Mutalenic/air-quality-data"
          react="ReactJs"
          redux="Redux"
          restcountriesApi="Restcountries API"
          openweatherApi="Openwaether API"
          />
          </div>
        <div className="grid md:grid-cols-2">
          <WorkItem
            title="Digi-Budget"
            backgroundImg={digiBudgetApp}
            projectUrl="/digibudgetapp"
            techStack="#Ruby #Ruby on Rails #Tailwindcss"

          />
          <Description
          description="The DigiBudget App is a mobile web application that allows the user
          to manage his/her budget: they have a list of transactions
          associated with a category, so that the user can see how much money
          they spend and on a particular category."
          demoLink="https://joli-choucroute-65855.herokuapp.com/"
          codeLink="https://github.com/Mutalenic/digi_budget"
          ruby="Ruby"
          rails="Ruby on Rails"
          postgres="PostgreSQL"
          Tailwindcss="Tailwindcss"
          />
          </div>
        <div className="grid md:grid-cols-2">
           <WorkItem
            title="Moviespace"
            backgroundImg={moviespace}
            projectUrl="/moviespace"
            techStack="#JavaScript #CSS #HTML"

          />
          <Description
          description="This JavaScript capstone project is about building a web application
          based on an external API. We selected an API that provides data
          about a topic that we liked and then built the webapp around it. The
          webapp has 2 user interfaces."
          demoLink="https://natig25.github.io/MovieSpace/"
          codeLink="https://github.com/Mutalenic/JS-capstone"
          javascript="JavaScript"
          css="CSS"
          tvmazeApi="TVmazeApi"
          Webpack="Webpack"
          />
          </div>
        <div className="grid md:grid-cols-2">
          <WorkItem
            title="Space Travelers Hub"
            backgroundImg={spcetravellers}
            projectUrl="/spacetraveller"
            techStack="#React #Redux #CSS"

          />
          <Description
          description="Real live data from the SpaceX API. A web application built with
          React and Redux for a company that provides commercial and
          scientific space travel services. The application allows users to
          book rockets and join selected space missions."
          demoLink="https://6262b54ee8f3d52d5200c258--tiny-bavarois-1b6015.netlify.app/"
          codeLink="https://github.com/Mutalenic/space_travelers_hub"
          react="ReactJS"
          css="CSS"
          redux="Redux"
          spaceApi="SpaceApi"
          />
          </div>          
        </div>
      </div>
    </div>
  );
}

export default Work;
