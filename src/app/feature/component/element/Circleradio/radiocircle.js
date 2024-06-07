'use client'
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setField } from "@/redux/formSlices";

const RadioButtonCircle = (props) => {
    const { title, data, defaultValue,formName, name } = props;
    const dispatch = useDispatch();
    const selectedOption = useSelector((state) => state.forms[formName][name]);
    if (selectedOption === undefined || selectedOption === null) {
        dispatch(setField({ fieldName: name, value: defaultValue, formName: formName }));
    }
    const onChange = (key) => {
     
      dispatch(setField({ fieldName: name, value: key, formName: formName }));
       

    }

    return (
        <>
            <div className="mb-2 col-span-2">{title}</div>
            <div className="grid grid-cols-4 gap-2 col-span-2 mb-6">
                {data.map((option) => (
                    <div key={option.name} className="flex items-center cursor-pointer" onClick={() => onChange(option.name)}>
                        <input
                            type="radio"
                            className="hidden"
                            checked={option.name === selectedOption}
                            onChange={() => onChange(option.name)}
                        />
                        <span className={`border border-primary rounded-full w-4 h-4 mr-2 ${option.name === selectedOption ? 'bg-primary' : ''}`}></span>
                        <label>{option.term}</label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RadioButtonCircle;
