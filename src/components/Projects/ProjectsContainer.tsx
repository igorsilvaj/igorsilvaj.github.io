"use client";

import ProjectCard from "./ProjectCard";
import Project from "@/interfaces/IProject";
import LoadingProjects from "./LoadingProjects";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

// const BASE_URL = "https://backend-portfolio-evzm.onrender.com/projects";
// para agilizar a renderização dos projetos estou utilizando um json local.
// o serviço do render onde está hospedado o backend reduz a velocidade caso fique inativo por alguns minutos
// causando uma delay desnecessario de cerca de 2 minutos para renderizar os cards.

interface Props {
  projects: Project[];
  filter?: string;
}

export default function ProjectsContainer({ projects }: Props) {
  const { activeFilter: filter } = useContext(AppContext);
  const dictionary: Record<string, string> = {
    FrontEnd: "FE",
    BackEnd: "BE",
    FullStack: "FS",
    Todos: "",
  };

  const filteredData = projects
    .filter((e: Project) => e.type.includes(dictionary[filter]) && e.visible)
    .sort((a: Project, b: Project) => b.position - a.position);

  return (
    <section className="flex flex-wrap flex-col items-center w-full">
      <div className="flex flex-wrap justify-center w-3/4 gap-2">
        {filteredData.length > 0 ? (
          filteredData.map((project: Project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        ) : (
          <LoadingProjects />
        )}
      </div>
    </section>
  );
}
