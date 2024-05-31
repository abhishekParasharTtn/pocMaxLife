'use client'
import React, { useState } from 'react';

const ToggleSwitch = ({ initialYes = false, label }) => {
    const [isYes, setIsYes] = useState(initialYes);

    const handleToggle = (value) => {
        setIsYes(value);
    };

    return (
        <div className="col-span-2">
            <div className="flex items-center mb-8">
                <label
                    className={`cursor-pointer ${isYes ? 'bg-primary text-white' : 'bg-white text-black'} w-16 h-8 flex items-center justify-center border border-primary rounded-l-md`}>
                    <input
                        type="radio"
                        name="toggle"
                        className="hidden"
                        checked={isYes}
                        onChange={() => handleToggle(true)}
                    />
                    Yes
                </label>
                <label
                    className={`cursor-pointer ${!isYes ? 'bg-primary text-white' : 'bg-white '} w-16 h-8 flex items-center justify-center border border-primary rounded-r-md`}>
                    <input
                        type="radio"
                        name="toggle"
                        className="hidden"
                        checked={!isYes}
                        onChange={() => handleToggle(false)}
                    />
                    No
                </label>
                {label && <span className="ml-2">{label}</span>}
            </div>
        </div>
    );
};

export default ToggleSwitch;
