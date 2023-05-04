import React, { useState } from "react";
import styled, { css } from "styled-components";
import ProjectCard from "./ProjectCard";
import apiReturn from "../mock";

interface StyleProps {
  selected?: boolean;
}

const Wrapper = styled.section`
  align-items: center;
  /* background-color: #d6d0d0; */
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  height: 100%;
  max-width: 917px;
  width: 90%;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
`;

const FilterContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-flow: row wrap;
  padding: 10px 0;
  width: 80%;
`;

const FilterTitle = styled.h3`
  width: 100%;
`;

const FilterOption = styled.span`
  ${(props: StyleProps) =>
    props.selected &&
    css`
      font-weight: 900;
    `}
`;

export default function Projects() {
  // colocar chave featured no banco de dados
  const [activeFilter, setActiveFilter] = useState("Todos");
  const dictionary: { [key: string]: string } = {
    FrontEnd: "FE",
    BackEnd: "BE",
    FullStack: "FS",
    Todos: "",
  };
  const filtered = apiReturn.filter((e) =>
    e.type.includes(dictionary[activeFilter])
  );
  const handleClick = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const span = event.target as HTMLSpanElement;
    setActiveFilter(span.id);
  };

  return (
    <Wrapper id="projects">
      <FilterContainer>
        <FilterTitle>Filtrar: </FilterTitle>
        <FilterOption
          id="Todos"
          selected={activeFilter === "Todos"}
          onClick={handleClick}
        >
          Todos
        </FilterOption>
        <FilterOption
          id="FrontEnd"
          selected={activeFilter === "FrontEnd"}
          onClick={handleClick}
        >
          FrontEnd
        </FilterOption>
        <FilterOption
          id="BackEnd"
          selected={activeFilter === "BackEnd"}
          onClick={handleClick}
        >
          BackEnd
        </FilterOption>
        <FilterOption
          id="FullStack"
          selected={activeFilter === "FullStack"}
          onClick={handleClick}
        >
          FullStack
        </FilterOption>
      </FilterContainer>
      <ProjectsContainer>
        {filtered.map((e) => (
          <ProjectCard
            key={e.id}
            image={e.image}
            name={e.name}
            type={e.type}
            url={e.url}
            repository={e.repository}
          />
        ))}
      </ProjectsContainer>
    </Wrapper>
  );
}
