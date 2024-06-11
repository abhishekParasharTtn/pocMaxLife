'use client'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from "@/redux/formSlices";

const selectClassString = "block py-2.5 px-0 w-full focus:border-orange text-base focus:text-black-400 bg-transparent border-0 border-b-2 border-gray-50 appearance-none dark:text-gray-400 dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer";
// const selectClassString = "block py-2.5 px-0 w-full focus:border-orange text-sm focus:text-black-400 bg-transparent border-0 border-b-2 border-gray-50 appearance-none dark:text-gray-400 dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer";



const Dropdown = ({ productData, setProductData, name, title, label, options, disabled = false, formName }) => {
  const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value
    setSelectedValue(newValue);
    const premiumType = options.filter((premiumType) => {
      if (premiumType.id === e.target.value) {
        return premiumType;
      }
    });
    dispatch(setField({ fieldName: name, value: newValue, formName: formName }))
  }

  return (
      <div className="select-wrapper w-full">
          <div className='relative mb-5'>
              <select
                  value={selectedValue}
                  onChange={handleChange}
                  className="block py-3 cursor-pointer bg-transparent w-full border-b-2 outline-none focus:border-primary"
              >
                  <option value="" disabled hidden></option>
                  {options?.map((option, index) => (
                      <option key={index} value={option.id}>
                          {option.label}
                      </option>
                  ))}
              </select>
              <label
                  className={`absolute left-0 ${selectedValue ? '-top-2 text-base text-primary' : 'bottom-2 text-lg'} transform origin-left transition-all duration-200`}>
                  {label ? label : "Premium Type"}
              </label>
          </div>
          <style jsx>
              {`
                  //select:focus {
                  //    outline: none;
                  //    border-bottom: 2px solid #f27930; /* Add a valid color code here */
                  //}

                  select:focus ~ label,
                  select:not([value=""]):valid ~ label {
                      transform: translateY(-10px) scale(0.80);
                      color: #a3a3a3;
                  }
              `}
          </style>
      </div>
  )
}
export default Dropdown;