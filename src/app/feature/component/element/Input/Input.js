import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setField } from "@/redux/formSlices";


const Input = ({ component,formName }) => {
    const dispatch = useDispatch();
    const {
        fieldName, 
        label, 
        placeholder,
        name
        
    } = component;
    console.log('formName14',formName);
    
    const [userName,setUserName] = useState({
        firstName:'',
        lastName:''
    });
    const storedValue = useSelector((state) => state.forms?.[formName]?.[label] ?? null);
    const inputChangeHandler = (e,label) => {
        const newValue = e.target.value
        setUserName({
            [label]: e.target.value,
        })
        dispatch(setField({ fieldName: name, value: newValue, formName: formName }));
    }

    return (
        <div className=" col-span-1">
        <div className="relative mb-9 col-span-1 mr-5 ">
            <input
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-primary bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder={''}
                 value={storedValue}
                onChange={(e) => {inputChangeHandler(e,label)}}
            />
            {label ? (
                <label htmlFor={fieldName} className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    {label.toUpperCase()}
                </label>
            ) : null}
        </div>
        </div>
    );
};

export default Input;