import React from "react";

const FormTextarea = ({data, value, onChange}) => {

    return (
        <div>
            <label
                htmlFor={data.id}
                className="block mb-1 text-sm font-medium text-gray-900 "
            >
                {data.label}
            </label>
            <textarea
                id={data.id}
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder={data.placeholder}
                onChange={onChange}
                value={value}
            ></textarea>
        </div>
    );
};

export default FormTextarea;
