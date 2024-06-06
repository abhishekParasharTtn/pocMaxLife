'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from "@/redux/formSlices";

const PhoneCodeDropdown = ({component,formName}) => {
    const dispatch = useDispatch();


    const {data, label, name, placeholder, visibility} = component;
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(data);
    
    const storedPhone = useSelector((state) => state.forms[formName][label]);

    useEffect(() => {
        setFilteredOptions(
            data.filter(country =>
                country.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    const inputChangeHandler = (e,label) => {
        const newValue = e.target.value
        dispatch(setField({ fieldName: label, value: newValue, formName: formName }));
    }

    return (
        <div >
        <div className=' flex items-baseline'>
            <select className="phoneCodeSelect bg-default">
                {filteredOptions.map((phCode, index) => (
                    <option key={index} value={phCode.code} className={'options'}>
                        {phCode.code}
                    </option>
                ))}
            </select>
            <div className="relative mb-9 col-span-2 w-full">
                <input
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-primary bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder={''}
                    value={storedPhone}
                    onChange={(e) => {inputChangeHandler(e,label)}}
                />
                {label ? (
                    <label htmlFor={name}
                           className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        {label}
                    </label>
                ) : null}
            </div>
        </div>
    </div>
    );
};

export default PhoneCodeDropdown;
