"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const links = [
  { label: "Produtos", href: "#"},
  { label: "Categorias", href: "#"},
  { label: "Sobre", href: "#"},
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-20 w-full top-0 start-0 border-b border-default border-gray-300 bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">

        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            Product Hunt
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
          <button type="button" className="text-white bg-[#F4320B] hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-3 py-2 focus:outline-none">
            Sign In
          </button>
          <button type="button" className="text-white bg-[#F4320B] hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-3 py-2 focus:outline-none">
            Sign Up
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden"
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faX} className="text-2xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            )}
          </button>
        </div>

        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col font-medium rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
            {links.map((link) => (
              <li>
                <a key={link.label} href={link.href} className="block py-2 px-3 text-heading rounded hover:text-[#F4320B] hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>  

      </div>  
    </header>
  );
}