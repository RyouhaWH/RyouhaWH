import GaleriaImg from "../Components/GaleriaImg";
import ComponentTitle from "../Components/Piezas/ComponentTitle";
import { Galeria_1, Galeria_2, Galeria_3 } from "../Constants/img";
import React from "react";
import { motion } from "framer-motion";

const Galeria = () => {
    const texto = {
        title: "Algunos proyectos realizados",
    };

    const container = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay:.1,
                duration: 0.55,
                delayChildren: .5,
                staggerChildren: 0.35,
            },
        },
    };
    const item = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.75,
            },
        },
    };
    return (
        <section id="galeria" className="grid pt-16 place-content-center">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6"
            >
                <motion.div variants={item}>
                    <ComponentTitle data={texto} blackText={false} />
                </motion.div>

                <motion.div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                },
                            },
                        }}
                    >
                        <GaleriaImg img={Galeria_1} />
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                },
                            },
                        }}
                    >
                        <GaleriaImg img={Galeria_2} />
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                },
                            },
                        }}
                    >
                        <GaleriaImg img={Galeria_3} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Galeria;
