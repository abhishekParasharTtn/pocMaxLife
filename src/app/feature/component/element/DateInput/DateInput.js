'use client'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from "@/redux/formSlices";

const DateInput = ({formName,component:{label,name}}) => {
 

    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.forms?.[formName]?.[label] ?? null);
    // const DateInput = ({component}) => {
    //     console.log(component)
    //         const [selectedDate, setSelectedDate] = useState('');
    const handleDateChange = (event) => {
         const newValue = event.target.value
        dispatch(setField({ fieldName: name, value: newValue, formName: formName }));
        
    };

    const openCalendar = () => {
       
    };

    return (
        <div className="flex flex-col">
            {<label className='mb-3'>{label}</label>}
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