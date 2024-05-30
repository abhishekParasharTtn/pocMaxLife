'use client'
import React, { useEffect, useState } from 'react';

const phoneCodeList = [
    { "name": "India", "phCode": "+91" },
    { "name": "Andorra", "phCode": "+376" },
    { "name": "Anguilla", "phCode": "+1264" },
    { "name": "Aruba", "phCode": "+297" }
];

const PhoneCodeDropdown = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(phoneCodeList);

    useEffect(() => {
        setFilteredOptions(
            phoneCodeList.filter(country =>
                country.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    return (
        <div className='self-center'>
            <select className="phoneCodeSelect bg-default">
                {filteredOptions.map((country, index) => (
                    <option key={index} value={country.phCode} className={'options'}>
                        {country.phCode}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PhoneCodeDropdown;
