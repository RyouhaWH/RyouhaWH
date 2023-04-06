import React from "react";

const ComponentTitle = ({ data, blackText }) => {
    return (
        <div className="max-w-screen-md mx-auto mb-8 lg:mb-16">
            <h2 className="pb-6 overflow-hidden text-4xl font-extrabold tracking-tight text-center text-gray-900">
                {data.title}
            </h2>
            <p className="overflow-hidden text-center text-gray-500 sm:text-xl">
                {data.subtitle}
            </p>
        </div>
    );
};

export default ComponentTitle;
