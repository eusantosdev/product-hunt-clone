"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className="w-full top-0 start-0 border-b border-default">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Product Hunt</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
                <button type="button" className="text-white bg-[#F4320B] hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-3 py-2 focus:outline-none">Sing In</button>
                <button type="button" className="text-white bg-[#F4320B] hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-3 py-2 focus:outline-none">Sing Up</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-sticky" aria-expanded="false">
                        <FontAwesomeIcon icon={faBars} className="text-2xl"/>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
                        <li>
                            <a href="#" className="block py-2 px-3 text-heading rounded hover:text-[#F4320B] hover:underline">Produtos</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-heading rounded hover:text-[#F4320B] hover:underline">Categorias</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-heading rounded hover:text-[#F4320B] hover:underline">Sobre</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}