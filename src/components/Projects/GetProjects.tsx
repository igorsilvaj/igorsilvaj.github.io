import projects from "@/app/data/projects.json";
import ProjectsContainer from "./ProjectsContainer";

// const BASE_URL = "https://backend-portfolio-evzm.onrender.com/projects";
// para agilizar a renderização dos projetos estou utilizando um json local.
// o serviço do render onde está hospedado o backend reduz a velocidade caso fique inativo por alguns minutos
// causando uma delay desnecessario de cerca de 2 minutos para renderizar os cards.

// async function getData() {
//   const res = await fetch(BASE_URL, {
//     next: { revalidate: 120 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// const data = await getData();

export default async function GetProjects() {
  return (
    <>
      <ProjectsContainer projects={projects} />
    </>
  );
}
