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
        <div className=" col-span-1 mb-14">
            <div className="mt-5">
                <label htmlFor={fieldName}  className="relative">
                    <input
                        value={storedValue}
                        onChange={(e) => {inputChangeHandler(e,label)}}
                        placeholder={''}
                        className="block text-primary border-b-2 border-gray-300 w-full outline-none focus:border-primary"/>
                    <span
                        className="absolute left-2 bottom-2 opacity-50 cursor-text transform origin-left transition duration-200">
                        {label.toUpperCase()}
                    </span>
                </label>
            </div>
            <style jsx>{`
                input:focus + span, input:not(:placeholder-shown) + span {
                    transform: translateY(-20px) scale(0.80);
                }
            `}</style>

        </div>
    );
};

export default Input;