"use client";

import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function ProjectFilters() {
  const { activeFilter, setActiveFilter } = useContext(AppContext);
  
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
        {/* <li
          className={`${
            activeFilter === "FullStack" ? "font-bold" : "font-normal"
          } cursor-pointer`}
          onClick={() => {
            setActiveFilter("FullStack");
          }}
        >
          FullStack
        </li> */}
      </ul>
    </div>
  );
}
