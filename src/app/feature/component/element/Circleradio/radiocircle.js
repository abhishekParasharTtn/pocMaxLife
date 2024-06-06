'use client'
import React, { useState } from "react";

const RadioButtonCircle = (props) => {
    const { title, data, defaultValue } = props;
    const initialSelectedOption = defaultValue || '';
    const [selectedOption, setSelectedOption] = useState(initialSelectedOption);

    const onChange = (key) => {
        setSelectedOption(key);
    }

    return (
        <>
            <div className="mb-2 col-span-2">{title}</div>
            <div className="grid grid-cols-4 gap-2 col-span-2 mb-6">
                {data.map((option) => (
                    <div key={option.name} className="flex items-center cursor-pointer" onClick={() => onChange(option.value)}>
                        <input
                            type="radio"
                            className="hidden"
                            checked={option.value === selectedOption}
                            onChange={() => onChange(option.value)}
                        />
                        <span className={`border border-primary rounded-full w-4 h-4 mr-2 ${option.value === selectedOption ? 'bg-primary' : ''}`}></span>
                        <label>{option.term}</label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RadioButtonCircle;
