'use client'
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { setField } from "@/redux/formSlices";
const DeclarationCheckbox = ({component: {name, label}, formName}) => {
    const dispatch = useDispatch();
    const inputChangeHandler = (e,name) => {
        const newValue = e.target.checked;
        dispatch(setField({ fieldName: name, value: newValue, formName: formName }));
    }
    return (
        <div className={'col-span-2'}>
            <div className=''>
                <input
                    type='checkbox'
                    id={name}
                    name={name}
                    onChange={(e) => inputChangeHandler(e, name)}
                />
                <label htmlFor={name} className="ml-3 cursor-pointer">{label}</label>
            </div>
        </div>
    );
};

export default DeclarationCheckbox;