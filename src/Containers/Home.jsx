import Layout from "../Components/Layout";
import React from "react";
import { HomeMockup } from "../Constants/img";
import { RiArrowRightLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Home = () => {
    const texto = {
        title: "Aumenta tu presencia online con nuestros sitios web.",
        subtitle:
            "Aquí en Ryun dev. nos enfocamos en tu plataforma para no gastes tiempo en ello.",
    };

    const AnimationDuration = .5
    const variante = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: .25,
                // delayChildren: 0.2,
                staggerChildren: .125,
            },
        },
    };

    const child = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: AnimationDuration,
            },
        },
    };
    const right = {
        hidden: { x: 20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: AnimationDuration,
            },
        },
    }
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="home" className=" place-content-center grid h-[70vh]">
            <motion.div
                variants={variante}
                initial="hidden"
                animate="visible"
                className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:grid-cols-12"
            >
                <motion.div className="mr-auto place-self-center lg:col-span-7">
                    <h1
                        // variants={child}
                        className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl "
                    >
                        {texto.title}
                    </h1>
                    <motion.p
                        variants={child}
                        className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl "
                    >
                        {texto.subtitle}
                    </motion.p>
                    <motion.div variants={child}>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
                        >
                            Contáctanos
                            <RiArrowRightLine className="ml-4" />
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
                        >
                            Nuestros Planes
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div variants={right} className="relative hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={HomeMockup} alt="mockup" loading="lazy" />
                </motion.div>
            </motion.div>
        </section>
    );
};

Home.layout = (page) => <Layout children={page} />;

export default Home;
