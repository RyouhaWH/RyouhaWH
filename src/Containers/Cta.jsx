import { CtaImg } from "../Constants/img";
import React from "react";
import { motion } from "framer-motion";

const Cta = () => {
    return (
        <section id="cta" className="relative">
            <div
                className="absolute w-full h-full -z-10"
                style={{
                    backgroundImage: "url(" + CtaImg + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#0004]"></div>
            </div>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.75, ease: "easeInOut" },
                    }}
                    viewport={{ once: true }}
                    className="max-w-screen-sm mx-auto text-center"
                >
                    <h2 className="mb-4 overflow-hidden text-4xl font-extrabold leading-tight tracking-tight text-white ">
                        Diferentes planes y servicios según sus necesidades.
                    </h2>
                    <p className="mb-6 overflow-hidden font-light text-gray-200 md:text-lg">
                        Encuentra aquel que más se acomode a tu medida.
                    </p>
                    <a
                        href="#"
                        className="overflow-hidden text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none"
                    >
                        Conocer más
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Cta;
