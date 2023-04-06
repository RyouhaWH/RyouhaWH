import React from "react";

const FormInput = ({data, onChange, value}) => {


    return (
        <div>
            <label
                htmlFor={data.id}
                className="block mb-1 text-sm font-medium text-gray-900"
            >
                {data.label}
            </label>
            <input
                type={data.type}
                id={data.id}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                value={value}
                placeholder={data.placeholder}
                required
                onChange={onChange}
            />
        </div>
    );
};

export default FormInput;
