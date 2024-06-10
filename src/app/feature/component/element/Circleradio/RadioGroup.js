'use client'
import { useDispatch, useSelector } from 'react-redux';
import { setField } from "@/redux/formSlices";
import defaultRadio from "@/app/feature/component/element/Circleradio/defaultRadio";
import ovalRadio from "@/app/feature/component/element/Circleradio/ovalRadio";

const RadioGroup = (props) => {
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
        defaultRadio: defaultRadio,
        ybl: ovalRadio
    }

    const Radio = journeyComponent[journeyType?.name] || defaultRadio;

    return Radio ? (
       <Radio
           {...radioDetails}
           selectedOption={selectedOption}
           onChange={onChange}
       />
    ): (
        <h2>{`Missing component`}</h2>
    );
};

export default RadioGroup;