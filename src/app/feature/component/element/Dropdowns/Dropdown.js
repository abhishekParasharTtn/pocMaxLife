'use client'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from "@/redux/formSlices";



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
          <div className={`{${disabled ? 'select-disabled text-disable' : ''} relative mb-5`} >
              <select
                  value={selectedValue}
                  onChange={handleChange}
                  disabled={disabled}
                  className={`block py-3 bg-transparent w-full border-b-2 outline-none focus:border-primary ${disabled ? 'text-disable cursor-not-allowed' : 'cursor-pointer'}`}
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
                  }

                  .select-disabled ~ label {
                      opacity: 0.6; 
                      cursor: not-allowed;
                  }
              `}
          </style>
      </div>
  )
}
export default Dropdown;