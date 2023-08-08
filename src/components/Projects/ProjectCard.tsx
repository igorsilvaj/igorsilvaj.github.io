"use client";

import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export interface ProjectCardProps {
  image: string;
  name: string;
  type: string;
  url: string;
  repository: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { image, name, type, url, repository } = props;
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className={`flex flex-wrap justify-center p-2 bg-white
      border border-solid border-black rounded h-[300px] w-[300px]`}
    >
      <div
        className={`${
          selected
            ? `
          flex flex-wrap justify-center items-center bg-slate-500/80
          w-[100dvw] h-[100dvh] z-50
          fixed bottom-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]
          `
            : "hidden"
        }`}
        onClick={() => {
          setSelected(!selected);
        }}
      >
        <div className="w-[600px] h-[600px] relative">
          <Image
            className="rounded"
            src={image}
            blurDataURL={image}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
            alt="Project preview"
          />
        </div>
      </div>

      <div
        className={`w-[280px] h-[200px] relative`}
        onClick={() => {
          setSelected(!selected);
        }}
      >
        <Image
          className="rounded"
          priority
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          alt="Project preview"
        />
      </div>
      <div className="w-[100%]">
        <p className="text-xl font-bold inline">{name}</p>
      </div>
      <div className="flex flex-wrap items-start justify-between w-[100%]">
        <p className="text-lg font-medium text-white rounded text-center px-2 bg-blue-600">
          {type}
        </p>
        <div className="flex flex-wrap gap-3 pr-1">
          <Link
            href={url}
            target="_blank"
            className="text-lg font-medium text-white rounded text-center px-2 bg-blue-600 "
          >
            Live
          </Link>
          <Link
            href={repository}
            target="_blank"
            className="text-lg font-medium text-white rounded text-center px-2 bg-blue-600 "
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  );
}
