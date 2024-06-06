'use client'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from "@/redux/formSlices";



const selectClassString = "block py-2.5 px-0 w-full focus:border-orange text-sm focus:text-black-400 bg-transparent border-0 border-b-2 border-gray-50 appearance-none dark:text-gray-400 dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer";



const Dropdown = ({productData, setProductData, name, title, label, options, disabled = false, formName}) => {
       const dispatch = useDispatch();
    const handleChange = (e) => {
        const newValue =  e.target.value

        const premiumType = options.filter((premiumType) => {
            if(premiumType.id === e.target.value){
                return premiumType;
            }
        });
        dispatch(setField({ fieldName: name, value: newValue, formName: formName  }))
    }

    return (
        <>
        {/* {label && <label className="dropdown-label">{label}</label>} */}
        <select className={selectClassString}
            // value={productData.productSelected.id}
            onChange={handleChange}
            placeholder={label}
        >
            <option style={{color: "gray"}}>{label ? label :"Premium Type"  }</option>
            {
                options?.map((option, index) => (
                    <option style={{color: "black"}} key={index} value={option.id}>
                        {option.label}
                    </option>
                ))
            }
        </select>
        </>
    )
}
export default Dropdown;