import React from "react";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const PriceCard = ({ data }) => {

    return (
        <div>
            <div className="flex flex-col max-w-md p-6 mx-auto text-center text-gray-900 bg-white border border-gray-200 rounded-lg shadow-lg xl:p-8">
                <h3 className="mb-4 text-2xl font-black font-body">
                    {data.title}
                </h3>
                <p className="font-light text-gray-500 sm:text-lg font- ">
                    {data.subtitle}
                </p>

                {data.price && (
                    <div className="flex items-baseline justify-center my-8">
                        <span className="mr-2 text-5xl font-extrabold">
                            {data.price}
                        </span>
                        {data.priceMode && (
                            <span className="text-gray-500 dark:text-gray-400">
                                /{data.priceMode}
                            </span>
                        )}
                    </div>
                )}

                {/*  List  */}
                <ul role="list" className="mt-12 mb-8 space-y-4 text-left">
                    {data.specs.map((spec, i) => (
                        <li
                            key={i}
                            className="flex items-center justify-start gap-4 pb-2 border-b border-gray-100"
                        >
                            <BsFillBookmarkCheckFill
                                fontSize={27}
                                className="text-primary-700 shrink-0"
                            />
                            <span>{spec}</span>
                        </li>
                    ))}
                </ul>
                <a
                    href="#"
                    className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                    ¡Contáctame!
                </a>
            </div>
        </div>
    );
};

export default PriceCard;
