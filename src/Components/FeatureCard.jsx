import React from "react";

const FeatureCard = ({ data }) => {
    return (
        <div className="px-12 py-10 space-y-4 bg-white border border-gray-200 shadow-lg rounded-3xl">
            <div
                className={
                    "flex items-center bg-green-600 justify-center rounded-xl w-14 h-14 " +
                    data.color
                }
            >
                {data.icon}
            </div>
            <h3 className="mb-2 text-xl font-bold ">{data.title}</h3>
            <hr
                className={
                    "w-full h-[2px] rounded-full bg-green-600 " + data.color
                }
            />
            <p className="text-gray-500 ">{data.text}</p>
        </div>
    );
};

export default FeatureCard;
