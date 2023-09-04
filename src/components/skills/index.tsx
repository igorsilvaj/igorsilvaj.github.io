"use client";

import React from "react";
import { TagCloud } from "../tagCloud";
import tags from "./tags";
import useWindowSize from "@/hooks/useWindowSize";
import Background from "../background/Background";
import bg from '@public/bg.png'

export default function Skills() {
  const { width } = useWindowSize();

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center px-5 min-h-[100dvh] relative"
    >
      <Background bg={bg} />
      <div className="flex sm:flex-col md:flex-row justify-center items-center text-white mt-16">
        <div className="flex flex-col min-w-[300px] max-w-2xl gap-2">
          <p>
            Tenho praticado através de projetos variados, desde a criação do
            projeto até a publicação online, tornando-o acessível para usuários
            na web.
          </p>
          <p>
            Além dos projetos solo, também pude atuar em grupo com utilização de
            metodologias ágeis que me permitiram aprimorar minhas habilidades de
            colaboração e comunicação.
          </p>
          <p>
            Estou sempre interessado em oportunidades de aprendizado e novos
            desafios.
          </p>
        </div>
        <TagCloud
          tags={[...tags]}
          radius={width && width < 900 ? 300 : 500}
          direction={135}
          iconSize={width && width < 900 ? 30 : 50}
        />
      </div>
    </section>
  );
}
