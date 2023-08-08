"use client"

import { Suspense, useState } from "react";

import LoadingProjects from "./LoadingProjects";
import ProjectsContainer from "./ProjectsContainer";
import ProjectFilters from "./ProjectFilters";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  return (
    <section>
      <div
        id="projects"
        className="flex flex-wrap flex-col items-center w-full bg-[url('/bg.png')] min-h-[500px]"
      >
        <h2 className="text-2xl mt-5 font-bold text-white">Projetos</h2>
        <ProjectFilters
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
        <Suspense fallback={<LoadingProjects />}>
          <ProjectsContainer filter={activeFilter}/>
        </Suspense>
      </div>
    </section>
  );
}
