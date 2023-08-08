"use client";

import { AppContext } from "@/context/AppContext";
import { scrollToElement } from "@/utils/scroll";
import React, { useContext, useEffect, useRef, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const {setToggleContact} = useContext(AppContext);

  const handleOutsideClick = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    if (
      targetElement.id !== "menuOpen" &&
      targetElement.tagName.toLocaleLowerCase() !== "path"
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="flex flex-wrap fixed z-50">
      <button
        ref={menuRef}
        className={`sm:flex md:hidden fixed top-3 left-3`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {isActive ? (
          <RxCross1 size="2em" color="white" />
        ) : (
          <RxHamburgerMenu id="menuOpen" size="2em" color="white" />
        )}
      </button>

      <nav className={`${isActive ? "sm:flex bg-black" : "sm:hidden md:flex"}`}>
        <ul className="flex flex-wrap justify-start items-center gap-3 p-5 flex-col w-screen md:flex-row">
          <li
            className="text-white cursor-pointer"
            onClick={() => {
              scrollToElement("projects");
            }}
          >
            Projetos
          </li>
          <li
            className="text-white cursor-pointer"
            onClick={() => {
              setToggleContact(true);
            }}
          >
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
}
