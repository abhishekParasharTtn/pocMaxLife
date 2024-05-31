'use client'
import {useState} from 'react';

const RadioButtonGroup = ({ dataFilter, initialKey = 'male', label }) => {
    const [selectedKey, setSelectedKey] = useState(initialKey);

    const handleToggle = (key) => {
        setSelectedKey(key);
    };

    return (
        <div className="flex items-center mb-8">
            {dataFilter.map((item, index) => (
                <label key={item.key}
                       className={`cursor-pointer ${selectedKey === item.key
                           ? 'bg-black text-white' : 
                           'bg-white text-black'} w-24 h-8 flex items-center justify-center border border-black ${index === 0 ? 'rounded-l-md' : ''} ${index === dataFilter.length - 1 ? 'rounded-r-md' : ''}`}>
                    <input
                        type="radio"
                        name="toggle"
                        className="hidden"
                        checked={selectedKey === item.key}
                        onChange={() => handleToggle(item.key)}
                    />
                    {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
                </label>
            ))}
            {label && <span className="ml-2">{label}</span>}
        </div>
    );
};

export default RadioButtonGroup;