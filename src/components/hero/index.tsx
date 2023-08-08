"use client";

import React, { useState } from "react";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiFileUserLine } from "react-icons/ri";
import { scrollToElement } from "@/utils/scroll";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [activeMessage, setActiveMessage] = useState(["", false]);

  const showMessage = (message: string, duration: number) => {
    setActiveMessage([message, true]);
    setTimeout(() => {
      setActiveMessage(["", false]);
    }, duration);
  };
  return (
    <section
      id="hero"
      className={`flex flex-nowrap flex-col items-center justify-center h-[100dvh] min-h-[600px] bg-[url('/bg.png')] relative`}
    >
      <div className="flex flex-wrap justify-center items-center">
        <div
          className="flex flex-col flex-wrap items-center gap-2 p-10 rounded-md
          text-base text-white bg-slate-200 bg-opacity-30"
        >
          <Image
            className="rounded-full"
            src="https://github.com/igorsilvaj.png"
            alt="profile"
            width={200}
            priority
            height={200}
          />
          <p>Olá! Sou o Igor.</p>
          <p>Desenvolvedor de software.</p>
          <div className="flex gap-5 mt-5">
            <Link href="https://github.com/igorsilvaj" target="_blank">
              <FaGithub size="40px" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/igorjsilva/"
              target="_blank"
            >
              <FaLinkedin size="40px" />
            </Link>
            <Link href="https://read.cv/igorjsilva" target="_blank">
              <RiFileUserLine size="40px" />
            </Link>
            <AiOutlineMail
              className="cursor-pointer"
              size="40px"
              onClick={() => {
                navigator.clipboard.writeText("igorjsilvabiz@gmail.com");
                showMessage("E-mail copiado!", 2000);
              }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 animate-bounce cursor-pointer text-white pb-3">
        <FaArrowDown
          size="30px"
          onClick={() => {
            scrollToElement("skills");
          }}
        />
      </div>
      <div className={`${activeMessage[1] ? 'fixed': 'hidden'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      font-bold text-green-600 bg-white p-5 rounded-lg`}>
        {activeMessage}
      </div>
    </section>
  );
}
