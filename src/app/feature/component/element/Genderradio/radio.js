'use client'
import { useState } from 'react';

const RadioButtonField = ({ title, label, visibility, name, dataFilter, componentType, defaultValue, data }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);


    const onChange = (value) => {
        setSelectedValue(value);
        console.log('Selected value:', value);
    };

    return (
        <div>
            {title && <div className="mb-3 col-span-2">{title}</div>}
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
                {data?.map((option, index) => (
                    <label
                        key={option.value}
                        className={`gender-option flex-1 text-center py-2 cursor-pointer ${
                            index !== data.length - 1 ? 'border-r' : ''
                        } ${
                            option.value === selectedValue ? 'bg-primary text-white' : 'bg-white text-gray-700'
                        }`}
                    >
                        <input
                            className="peer hidden"
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={option.value === selectedValue}
                            onChange={() => onChange(option.value)}
                        />
                        {option.label}
                    </label>
                ))}
            </div>
            <style jsx>{`
                .gender-option {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background-color 0.3s, color 0.3s;
                }

                .gender-option:not(:last-child) {
                    border-right: 1px solid #D1D5DB; /* Tailwind border-gray-300 */
                }

                .gender-option:hover {
                    background-color: #d1d5db; /* Tailwind gray-300 */
                }
            `}</style>
        </div>
    );
};

export default RadioButtonField;
