// import { Galeria_1 } from "@/Constants/img";
import React from "react";

const GaleriaImg = ({img}) => {
    return (
        <div className="max-w-lg rounded-lg shadow-lg overflow-hidden">
            <img loading="lazy" width={400} src={img} alt="Imagen proyectos realizados" />
        </div>
    );
};

export default GaleriaImg;
