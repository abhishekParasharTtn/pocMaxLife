'use client'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from "@/redux/formSlices";
import radioUI from './radioUI';
import yblRadioUI from './yblRadioUI';

const RadioButtonField = (props) => {
    const { journeyType, ...radioDetails } = props;
    const { title, label, visibility, name, dataFilter, componentType, defaultValue, data, formName } = radioDetails;
    const dispatch = useDispatch();
    const selectedOption = useSelector((state) => state.forms[formName][name]);
    if (selectedOption === undefined || selectedOption === null) {
        dispatch(setField({ fieldName: name, value: defaultValue, formName: formName }));
    }


    const onChange = (value) => {
        dispatch(setField({ fieldName: name, value: value, formName: formName }));
    };

    const journeyComponent = {
        default: radioUI,
        ybl: yblRadioUI
    }

    const Radio = journeyComponent["ybl"] || radioUI;
    return (
        <>
            <Radio
                {...radioDetails}
                selectedOption={selectedOption}
                onChange={onChange}
            />
        </>
    );
};


export default RadioButtonField;
