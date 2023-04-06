import { Contacto, Home, About } from "../Containers";
import Layout from "../Components/Layout";
import React from "react";
import Cta from "../Containers/Cta";
import Features from "../Containers/Features";
import Precios from "../Containers/Precios";
import Galeria from "../Containers/Galeria";
import NavbarExperimental from "../Components/NavbarExperimantal";
import Footer from "../Containers/Footer";

const Landing = () => {
    return (
        <>
            <NavbarExperimental />
            <main className="scroll-smooth">
                <Home />
                <Features />
                <Cta />
                <Galeria />
                <Precios />
                <Contacto />
            </main>
            <Footer />
        </>
    );
};

Landing.layout = (page) => <Layout children={page} />;

export default Landing;
