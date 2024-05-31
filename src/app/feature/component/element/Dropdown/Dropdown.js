"use client"
import { useState } from "react";

const selectClassString = "block py-2.5 px-0 w-full focus:border-orange text-sm focus:text-black-400 bg-transparent border-0 border-b-2 border-gray-50 appearance-none dark:text-gray-400 dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer";

const Dropdown = ({productData, type, options, selectedValue, setSelectedValue, placeholder, label, disabled = false }) => {

    const handleChange = (event) => setSelectedValue(event.target.value);

    if(type == "vestingAge") {
        return (
            <>
            {/* {label && <label className="">{label}</label>} */}
            <select className={selectClassString}
                value={selectedValue}
                onChange={handleChange}
                placeholder={placeholder}
            >
                <option style={{color: "gray"}}>{placeholder}</option>
                {
                    options?.map((option, index) => (
                        <option style={{color: "black"}} key={index} value={option}>
                            {option}
                        </option>
                    ))
                }
            </select>
            </>
        )
    }

    if(type == "premiumType") {
        return (
            <>
            {/* {label && <label className="dropdown-label">{label}</label>} */}
            <select className={selectClassString}
                value={selectedValue}
                onChange={handleChange}
                placeholder={placeholder}
            >
                <option style={{color: "gray"}}>{placeholder}</option>
                {
                    options?.map((option, index) => (
                        <option style={{color: "black"}} key={index} value={option.id}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
            </>
        )
    }

    return (
        <>
            {/* {label && <label className="dropdown-label">{label}</label>} */}
            <select className={selectClassString}
                value={selectedValue}
                onChange={handleChange}
                disabled={disabled}
                placeholder={placeholder}
            >
                <option style={{color: "gray"}}>{placeholder}</option>
                {
                    options?.map((option, index) => (
                        <option style={{color: "black"}} key={index} value={option.productId}>
                            {option.marketingName}
                        </option>
                    ))
                }
            </select>
        </>
    )
};

export default Dropdown;