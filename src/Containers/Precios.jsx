import PriceCard from "../Components/PriceCard";
import React from "react";
import { motion } from "framer-motion";

const Precios = () => {
    let data = {
        SitioWeb: {
            title: "Sitio Web",
            subtitle: "Compra tu Sitio Web hecho a tu medida",
            price: "$25.000",
            priceMode: "mensual",
            specs: [
                "Diseñada y Programada desde 0",
                "Alojamiento y Certificado ssl",
                "Dominio .cl",
                "Administración y mantención ",
            ],
        },
        Landing: {
            title: "Landing Page",
            subtitle:
                "Contrata tu Landing page, Obten un sitio de llegada para tus clientes y muestrales quien eres, tus redes, y como contar contigo.",
            price: "$19.500",
            priceMode: "mensual",
            specs: [
                "Página web que puedes modificar tu mismo.",
                "Incluye hosting, dominios, deploy y certificado SSL.",
                "Cambios en estructura: 2 mensuales",
                "Actualizaciones pequeñas: Sin límite",
            ],
        },
        // PlanMensual: {
        //     title: "Plan mensual de página web",
        //     subtitle:
        //         "Contrata tu Landing page, Especial para aquellos que están recien comenzando en el mundo web.",
        //     price: "$20.000",
        //     priceMode: "mensual",
        //     specs: [
        //         "Página web que puedes modificar tu mismo.",
        //         "Incluye hosting, dominios, deploy y certificado SSL.",
        //         "Cambios en estructura: 2 mensuales",
        //         "Actualizaciones pequeñas: Sin límite",
        //     ],
        // },
        Ecommerce: {
            title: "E-commerce",
            subtitle: "Diseñado para negocios con venta online.",
            price: "¡Pronto!",
            specs: [
                "Integración con pasarelas de pagos",
                "Auto Administrable",
                "Límite de productos: Sin límite",
                "Alojamiento, dominio y certificado ssl",
            ],
        },
    };

    const container = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.25,
                duration: .75,
                delayChildren: .5,
                staggerChildren: .35,
            },
        },
    };
    const item = {
        hidden: {opacity: 0, y: 10},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .75,
            },
        },
    }
    return (
        <section id="servicios" className="">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6"
            >
                <motion.div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                    <motion.h2 variants={item} className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
                        Nuestras Soluciones
                    </motion.h2>
                    <motion.p
                        variants={item}
                        className="mb-5 font-light text-gray-500 sm:text-xl "
                    >
                        En busca de satisfacer las diferentes necesidades de
                        nuestros usuarios, proporcionamos diferentes tipos de
                        soluciones .
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={item}
                    className="flex flex-col items-center justify-center gap-4 lg:flex-row"
                >
                    <PriceCard data={data.SitioWeb} />
                    <PriceCard data={data.Landing} />
                    <PriceCard data={data.Ecommerce} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Precios;
