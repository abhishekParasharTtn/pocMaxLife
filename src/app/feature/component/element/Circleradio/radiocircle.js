'use client'
import React, { useState } from "react";

const RadioButtonCircle = (props) => {
    const { fieldName, label, dataFilter, title } = props;
    const [selectedOption, setSelectedOption] = useState(null);

    const onChange = (key) => {
        setSelectedOption(key);
    }

    return (
        <>
            <div className="mb-3 col-span-2">{title}</div>
            <div className="grid grid-cols-4 gap-2 col-span-2 mb-10">
                {dataFilter.map((option) => (
                    <div key={option.key} className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            className="hidden"
                            checked={option.key === selectedOption}
                            onChange={() => onChange(option.key)}
                        />
                        <span className="border border-primary rounded-full w-4 h-4 mr-2"></span>
                        <label>{option.value}</label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RadioButtonCircle;
