import {useState,useCallback} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setField } from "@/redux/formSlices";
import { debounce } from "lodash";


const Input = ({ component,formName }) => {
    const dispatch = useDispatch();
    const {
        fieldName, 
        label, 
        placeholder,
        name
        
    } = component;

    
    const [userName,setUserName] = useState({
        firstName:'',
        lastName:'',
        email:''
    });
    const storedValue = useSelector((state) => state.forms?.[formName]?.[name] ?? null);

    const debouncedDispatch = useCallback(
        debounce((newValue) => {
            dispatch(setField({ fieldName: name, value: newValue, formName: formName }));
        }, 300),
        [dispatch, name, formName]
    );
    const inputChangeHandler = (e,label) => {

        const newValue = e.target.value
        setUserName({
            [label]: e.target.value,
        })
        debouncedDispatch(newValue);

    }

    return (
        <div className=" col-span-1">
            <div className="relative mb-9 col-span-1 mr-5 ">
                <label htmlFor={fieldName} className="relative">
                    <input
                        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-primary bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder={''}
                        value={userName[fieldName]}
                        onChange={(e) => {
                            inputChangeHandler(e, label)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                               
                            }
                        }}
                    />
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