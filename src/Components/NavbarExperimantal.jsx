import { LogoIco } from "../Constants/img";
import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";

const NavbarExperimental = () => {
    const [openNav, setOpenNav] = useState(false);

    const ToggleNav = () => {
        setOpenNav(!openNav);
    };

    return (
        <header className="sticky top-0 z-10">
            <nav className="shadow-md bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-row flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                    <a href="{{ url('/') }}" className="flex items-center">
                        <img
                            src={LogoIco}
                            className="w-6 h-6 mr-3 sm:h-9 sm:w-9"
                            alt="Ryundev Logo"
                        />
                        <span className="self-center hidden text-xl font-semibold sm:block whitespace-nowrap">
                            Ryun Dev.
                        </span>
                    </a>

                    <div
                        className="items-center justify-between hidden w-full gap-4 lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a
                                    href="#inicio"
                                    className="block py-2 pl-3 pr-4 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 "
                                    aria-current="page"
                                >
                                    Inicio
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    href="#about"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                                >
                                    Acerca de mi
                                </a>
                            </li> */}
                            <li>
                                <a
                                    href="#servicios"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
                                >
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#features"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
                                >
                                    Características
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#galeria"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
                                >
                                    Proyectos
                                </a>
                            </li>
                        </ul>
                        <div className="items-center hidden gap-4 sm:flex lg:order-2">
                            <a
                                href="#contacto"
                                className="ml-4 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
                            >
                                ¡Contáctanos!
                            </a>
                        </div>
                    </div>

                    <div className="sm:hidden">
                        <CgMenuGridO fontSize={27} onClick={ToggleNav} />
                    </div>

                    {openNav && (
                        <div className="absolute flex items-center justify-center top-0 left-0 z-10 w-screen h-screen bg-[#fffc] backdrop-blur-sm">
                            <RiCloseFill
                                className="absolute right-[25px] top-5"
                                fontSize={30}
                                onClick={ToggleNav}
                            />
                            <nav className="items-center justify-between w-full px-4 mx-4 ">
                                <ul className="flex flex-col gap-8 mt-4 font-sans text-lg font-bold text-center ">
                                    <li>
                                        <a
                                            href="#inicio"
                                            className="block py-2 pl-3 pr-4 text-black transition-colors border-b border-gray-200 rounded hover:bg-primary-500 hover:text-white"
                                        >
                                            Inicio
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#about"
                                            className="block py-2 pl-3 pr-4 text-gray-700 transition-colors border-b border-gray-200 rounded hover:bg-primary-500 hover:text-white"
                                        >
                                            Acerca de mi
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#servicios"
                                            className="block py-2 pl-3 pr-4 text-gray-700 transition-colors border-b border-gray-200 rounded hover:bg-primary-500 hover:text-white"
                                        >
                                            Servicios
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#features"
                                            className="block py-2 pl-3 pr-4 text-gray-700 transition-colors border-b border-gray-200 rounded hover:bg-primary-500 hover:text-white"
                                        >
                                            Características
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#galeria"
                                            className="block py-2 pl-3 pr-4 text-gray-700 transition-colors border-b border-gray-200 rounded hover:bg-primary-500 hover:text-white"
                                        >
                                            Proyectos
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#contacto"
                                            className="block py-2 pl-3 pr-4 text-gray-700 transition-colors border-b border-gray-200 rounded hover:bg-primary-500 hover:text-white"
                                        >
                                            ¡Contáctanos!
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default NavbarExperimental;
