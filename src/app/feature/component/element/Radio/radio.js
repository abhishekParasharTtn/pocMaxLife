'use client'
import {useState} from "react";
import {Gender, formData} from "@/app/api/dummyData";

const Radio = ({form}) => {
    const {customerDetails ,personalDetails} = form;
  

    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div>
            <h1>{customerDetails.title}</h1>
            <h4>{customerDetails.subTitle}</h4>
            <div className={'flex'}>
                {Gender.map((option) => (
                    <div key={option.id} className={'flex'}>
                        <input
                            type="radio"
                            id={option.id}
                            name="gender"
                            value={option.value}
                            checked={selectedOption === option.value}
                            onChange={handleOptionChange}
                            className=""
                        />
                        <label htmlFor={option.id} className="text-gray-700">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
            <div className="relative">
                <input type="text" id="floating_filled"
                       className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" "/>
                <label htmlFor="floating_filled"
                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Floating
                    filled</label>
            </div>
        </div>
    );
};

export default Radio;