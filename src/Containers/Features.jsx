import FeatureCard from "../Components/FeatureCard";
import React from "react";
import { AiOutlineMobile, AiOutlineWhatsApp } from "react-icons/ai";
import { BsSpeedometer2 } from "react-icons/Bs";
import { motion } from "framer-motion";

const Features = () => {
    const mobile = <AiOutlineMobile fontSize={36} color="#fff" />;
    const performance = <BsSpeedometer2 fontSize={36} color="#fff" />
    const social = <AiOutlineWhatsApp fontSize={36} color="#fff" />

    const colorGradient = {
        red: "bg-gradient-to-bl from-yellow-600 to-red-600",
        pink: "bg-gradient-to-bl from-pink-400 to-pink-600",
        green: "bg-gradient-to-bl from-green-400 to-primary-600",
    };

    const data = [
        {
            icon: mobile,
            color: colorGradient.pink,
            title: "Diseño Responsive",
            text: "Sin importar el dispositivo desde el cual se visualice tu sitio web, este se adaptara a su pantalla para nunca perder su diseño.",
        },
        {
            icon: performance,
            color: colorGradient.red,
            title: "Alto Desempeño",
            text: "Olvidate de los tiempos de carga, te proporcionamos Sitios webs creados con codigo prácticamente desde 0.",
        },
        {
            icon: social,
            color: colorGradient.green,
            title: "Redes Sociales",
            text: "Proporciona a tus usuarios una zona desde la cual poder acceder a todas tus redes para mantenerse informados y aumentar la conversión de usuario a cliente.",
        },
    ];

    return (
        <section id="features" className="">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { 
                            duration: 0.75, 
                            delay: .5 
                        },
                    }}
                    className="p-8 space-y-4 overflow-hidden sm:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0"
                >
                    {data.map((data, i) => (
                        <FeatureCard key={i} data={data} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
