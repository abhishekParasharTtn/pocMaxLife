import React from "react";


const OvalRadio = ({ title, label, visibility, name, dataFilter, componentType, defaultValue, data,formName, onChange, selectedOption }) => {

    return (
        <>
            <div className=" col-span-2">{title}</div>
            <div className="grid grid-cols-4 gap-2 col-span-2 mb-6">
                {data.map((option) => (
                    <div key={option.name} className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            name={name}  // Ensure each group has a unique name
                            className="hidden peer"
                            checked={option.name === selectedOption}
                            onChange={() => onChange(option.name)}
                            id={`${name}-${option.name}`}  // Ensure each id is unique
                        />
                        <label
                            htmlFor={`${name}-${option.name}`}
                            className="flex items-center cursor-pointer"
                        >
              <span
                  className={`w-4 h-4 mr-2 cursor-pointer rounded-full border border-primary flex items-center justify-center ${
                      option.name === selectedOption ? 'bg-primary' : 'bg-white'
                  }`}
              >
                {option.name === selectedOption && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                )}
              </span>
                            {option.label || option.term}
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
};


export default OvalRadio;