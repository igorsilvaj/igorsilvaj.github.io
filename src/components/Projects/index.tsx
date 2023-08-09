import { Suspense } from "react";

import LoadingProjects from "./LoadingProjects";
import ProjectFilters from "./ProjectFilters";
import GetProjects from "./GetProjects";

export default function Projects() {
  return (
    <section>
      <div
        id="projects"
        className="flex flex-wrap flex-col items-center w-full bg-[url('/bg.png')] min-h-[500px]"
      >
        <h2 className="text-2xl mt-5 font-bold text-white">Projetos</h2>
        <ProjectFilters />
        <Suspense fallback={<LoadingProjects />}>
          <GetProjects />
        </Suspense>
      </div>
    </section>
  );
}
