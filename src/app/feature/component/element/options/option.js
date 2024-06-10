'use client'
import RadioButtonCircle from "@/app/feature/component/element/Circleradio/defaultRadio";
import React from "react";
import radio from "@/app/feature/component/element/Genderradio/radio";
import ProductDetailsSection from "../Dropdowns/ProductDetails/ProductDetails";
import Dropdown from "../Dropdowns/Dropdown";
import RadioGroup from "@/app/feature/component/element/Circleradio/RadioGroup";

const Option = (props) => {
    const {
        component: { title,
            description,
            componentType,
            dataFilter,
            name,
            value,
            label,
            style,
            error,
            visibility,
            __typename,
            data,
            defaultValue,
            
        } = {},formName,
        journeyType
    } = props;
    const optionComponentMappings = {
        RadioGroup: RadioGroup,
        ButtonGroup: radio,
        Dropdown: Dropdown
    };
    const OptionComponent = optionComponentMappings[componentType];
    return OptionComponent ? (
        <OptionComponent
            title={title}
            label={label}
            visibility={visibility}
            name={name}
            dataFilter={dataFilter}
            componentType={componentType}
            data={data}
            defaultValue={defaultValue}
            options={data}
            formName={formName}
            journeyType={journeyType}
        />
    ) : (
        <h2>{`Missing component for type: ${componentType}`}</h2>
    );
};

export default Option;