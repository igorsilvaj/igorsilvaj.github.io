import ProjectCard from "./ProjectCard";
import Project from "@/interfaces/IProject";

interface Props {
  filter: string;
}

export default async function ProjectsContainer({ filter }: Props) {
  const BASE_URL = "https://backend-portfolio-evzm.onrender.com/projects";

  async function getData() {
    const res = await fetch(BASE_URL, {
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const data = await getData();

  const dictionary: Record<string, string> = {
    FrontEnd: "FE",
    BackEnd: "BE",
    FullStack: "FS",
    Todos: "",
  };

  const filteredData = data
    .filter((e: Project) => e.type.includes(dictionary[filter]) && e.visible)
    .sort((a: Project, b: Project) => b.position - a.position);

  return (
    <section className="flex flex-wrap flex-col items-center w-full">
      <div className="flex flex-wrap justify-center w-3/4 gap-2">
        {filteredData.map((project: Project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
