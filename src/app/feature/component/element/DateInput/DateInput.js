'use client'
import React, { useState } from 'react';

const DateInput = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const openCalendar = () => {
       
    };

    return (
        <div className="relative flex items-center">
            <input
                type="Date"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="DD/MM/YYYY"
                // value={selectedDate}
                // onChange={handleDateChange}
            />
        </div>
    );
};

export default DateInput;