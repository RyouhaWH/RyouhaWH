import { LogoIco } from "../Constants/img";
import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
                <div className="max-w-screen-xl mx-auto text-center">
                    <a
                        href="#"
                        className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        <img
                            loading="lazy"
                            src={LogoIco}
                            className="w-6 h-8 mr-2 sm:h-9 sm:w-9"
                            alt="Logo"
                        />
                        Ryun Dev.
                    </a>
                    <p className="my-6 text-gray-500 dark:text-gray-400">
                        ¡Desarrollando sitios web con ❤️ para todos mis
                        usuarios!.
                    </p>
                    <ul className="flex flex-wrap items-center justify-center mb-6 text-gray-900 dark:text-white">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">
                                Acerca de mi
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">
                                Productos
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">
                                Características
                            </a>
                        </li>
                        {/* {{-- <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                    </li> --}}
        {{-- <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li> --}} */}
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">
                                ¡Contactame!
                            </a>
                        </li>
                    </ul>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2022{" "}
                        <a href="#" className="hover:underline">
                            Ryun Dev
                        </a>
                        . Todos los derechos reservados.
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
