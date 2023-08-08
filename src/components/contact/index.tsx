"use client";

import { AppContext } from "@/context/AppContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const email = "igorjsilvabiz@gmail.com";

export default function Contact() {
  const { toggleContact, setToggleContact } = useContext(AppContext);
  const [copied, setCopied] = useState(false);

  const handleOutsideClick = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    if (targetElement.id === "contact") {
      setToggleContact(false);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="contact"
      className={`${toggleContact ? "flex" : "hidden"} fixed top-0 left-0
      w-full h-full bg-slate-900 bg-opacity-95 text-white
      flex-col items-center justify-center z-50`}
    >
      <div className="bg-slate-900 flex flex-col flex-wrap items-center">
        <p className="mb-5">
          Disponível no{"  "}
          <Link
            href="https://www.linkedin.com/in/igorjsilva/"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </Link>
        </p>
        <p>Envie um E-mail</p>
        <button
          className="flex flex-wrap justify-around items-center 
            bg-white focus:bg-blue-700 font-bold text-slate-900
            py-2 px-4 rounded w-[290px]"
          onClick={copy}
        >
          {copied ? (
            <p>E-mail copiado!</p>
          ) : (
            <>
              <p>{email}</p>
              <AiOutlineSend />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
