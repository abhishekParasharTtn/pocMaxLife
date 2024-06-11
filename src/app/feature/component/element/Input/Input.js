import {useState,useCallback} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setField } from "@/redux/formSlices";
import { debounce } from "lodash";
import JourneyInput from "@/app/feature/component/element/Input/journeyInput";
import defaultInput from "@/app/feature/component/element/Input/DefaultInput";


const Input = ({ component,formName, journeyType }) => {
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
    const InputComponentMapping = {
        DefaultInput: defaultInput,
        ybl: JourneyInput,
    }

    const InputComponent = InputComponentMapping[journeyType?.name] || defaultInput;

    return InputComponent ? (
        <InputComponent
            inputChangeHandler={inputChangeHandler}
            userName={userName}
            fieldName={fieldName}
            label={label}
            placeholder={placeholder}
        />
    ): (<h2>{`Missing component`}</h2>)
};

export default Input;