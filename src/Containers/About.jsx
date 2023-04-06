import React from "react";
import { About_01, About_02 } from "../Constants/img/";

const About = () => {
    return (
        <section id="about" className="">
            <div className="overflow-hidden gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-600 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                        Hey! Aquí Jorge Waltemath
                    </h2>
                    <p className="text-lg italic mb-4">
                        Desarrollador Front-end.
                    </p>
                    <p className="mb-4 sm:mr-8">
                        Creador de Ryun dev, un pequeño emprendimiento que nace
                        al sur de Chile, y con el cual busco entregar soluciones
                        asequibles para aquellas personas o emprendimientos que,
                        como yo, quieran dar el paso hacia la digitalización de
                        sus ideas, proyectos y negocios.
                    </p>
                    <p className="italic">
                        ¡Estaré encantado de poder trabajar con usted!
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img
                        loading="lazy"
                        className="h-full rounded-lg"
                        src={About_01}
                        alt="Imagen About"
                    />
                    <img
                        loading="lazy"
                        className="mt-4 object-cover h-full lg:mt-4 rounded-lg"
                        src={About_02}
                        alt="Imagen About"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
