'use client'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from "@/redux/formSlices";

const DateInput = ({formName,component:{label,name}}) => {
 

    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.forms?.[formName]?.[label] ?? null);

    const handleDateChange = (event) => {
         const newValue = event.target.value
        dispatch(setField({ fieldName: name, value: newValue, formName: formName }));
        
    };

    const openCalendar = () => {
       
    };

    return (
        <div className="relative flex items-center col-span-1">
            <input
                type="Date"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="DD/MM/YYYY"
                value={selectedDate}
                onChange={handleDateChange}
            />
        </div>
    );
};

export default DateInput;