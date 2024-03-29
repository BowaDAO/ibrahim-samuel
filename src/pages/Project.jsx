import { useState } from "react";
import { projects } from "../data/data";
import { EachProject } from "../components";

const Project = () => {
  const [projectsData] = useState(projects);
  return (
    <main className="bg-navy max-h-full w-full px-6 py-20 sm:py-14 sm:px-10 md:px-28 lg:px-36 xl:px-44">
      <div className="flex flex-col gap-5 lg:mt-10">
        <article>
          <h1 className="font-bold text-secondary text-4xl sm:text-6xl leading-12">
            Some Of My Projects
          </h1>
          <hr className="mt-6" />
        </article>

        <div className="flex flex-col gap-24 mt-10">
          {projectsData.map((item, index) => {
            return <EachProject key={index} {...item} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Project;
