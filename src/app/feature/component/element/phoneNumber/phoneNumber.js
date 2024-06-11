'use client'
import React, { useEffect, useState,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from "@/redux/formSlices";
import { debounce } from "lodash";

const PhoneCodeDropdown = ({component,formName}) => {
    const dispatch = useDispatch();


    const {data, label, name, placeholder, visibility} = component;
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(data);
    const [phoneNo,setPhoneNo] = useState('');
    
    

    useEffect(() => {
        setFilteredOptions(
            data.filter(country =>
                country.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);
    const debouncedDispatch = useCallback(
        debounce((newValue) => {
            dispatch(setField({ fieldName: name, value: newValue, formName: formName }));
        }, 300), 
        [dispatch, name, formName]
    );

    const inputChangeHandler = (e,label) => {
        const newValue = e.target.value
        setPhoneNo(newValue);
        debouncedDispatch(newValue);
    }

    return (
        <div className="col-span-1 place-content-center">
            <div className='flex items-center align-items-center'>
                <select className="bg-default">
                    {filteredOptions.map((phCode, index) => (
                        <option key={index} value={phCode.code} className={'options'}>
                            {phCode.code}
                        </option>
                    ))}
                </select>
                <div className="mt-2 w-full">
                    <label className="relative">
                        <input
                            value={phoneNo}
                            onChange={(e) => {
                                inputChangeHandler(e, label)
                            }}
                            placeholder={''}
                            className="block text-primary border-b-2 border-gray-300 w-full outline-none focus:border-primary"/>
                        <span
                            className="absolute left-2 bottom-2 opacity-50 cursor-text transform origin-left transition duration-200">
                        {label.toUpperCase()}
                    </span>
                    </label>
                </div>
                <style jsx>{`
                    input:focus + span, input:not(:placeholder-shown) + span {
                        transform: translateY(-20px) scale(0.80);
                    }
                `}</style>
            </div>
        </div>
    );
};

export default PhoneCodeDropdown;
