"use client";

interface Props {
  activeFilter: string;
  setActiveFilter: (s: string) => void;
}

export default function ProjectFilters({
  activeFilter,
  setActiveFilter,
}: Props) {
  return (
    <div className="p-5 text-white">
      <ul className="flex gap-x-5">
        <li
          className={`${
            activeFilter === "Todos" ? "font-bold" : "font-normal"
          } cursor-pointer`}
          onClick={() => {
            setActiveFilter("Todos");
          }}
        >
          Todos
        </li>
        <li
          className={`${
            activeFilter === "FrontEnd" ? "font-bold" : "font-normal"
          } cursor-pointer`}
          onClick={() => {
            setActiveFilter("FrontEnd");
          }}
        >
          FrontEnd
        </li>
        <li
          className={`${
            activeFilter === "BackEnd" ? "font-bold" : "font-normal"
          } cursor-pointer`}
          onClick={() => {
            setActiveFilter("BackEnd");
          }}
        >
          BackEnd
        </li>
        <li
          className={`${
            activeFilter === "FullStack" ? "font-bold" : "font-normal"
          } cursor-pointer`}
          onClick={() => {
            setActiveFilter("FullStack");
          }}
        >
          FullStack
        </li>
      </ul>
    </div>
  );
}
