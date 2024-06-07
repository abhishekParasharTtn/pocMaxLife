'use client'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from '@/redux/formSlices';
const ToggleSwitch = ({component:{ initialYes = false, label,name },formName}) => {
    const dispatch = useDispatch();
    const selectedButton = useSelector((state) => state.forms[formName][name]);

    const handleToggle = (value) => {
      
        dispatch(setField({ fieldName: name, value: value, formName: formName }));
    };

    return (
        <div className="col-span-2">
            <div className="flex items-center mb-8">
                <label
                    className={`cursor-pointer ${selectedButton ? 'bg-primary text-white' : 'bg-white text-black'} w-16 h-8 flex items-center justify-center border border-primary rounded-l-md`}>
                    <input
                        type="radio"
                        name="toggle"
                        className="hidden"
                        checked={selectedButton}
                        onChange={() => handleToggle(true)}
                    />
                    Yes
                </label>
                <label
                    className={`cursor-pointer ${!selectedButton ? 'bg-primary text-white' : 'bg-white '} w-16 h-8 flex items-center justify-center border border-primary rounded-r-md`}>
                    <input
                        type="radio"
                        name="toggle"
                        className="hidden"
                        checked={!selectedButton}
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
