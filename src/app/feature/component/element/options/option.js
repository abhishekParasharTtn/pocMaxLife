'use client'
import RadioButtonCircle from "@/app/feature/component/element/Circleradio/radiocircle";
import React from "react";
import radio from "@/app/feature/component/element/Genderradio/radio";
import ProductDetailsSection from "../Dropdowns/ProductDetails/ProductDetails";

const Option = (
    {title,
    description,
    componentType,
    dataFilter,
    name,
    value,
    label,
    style,
    error,
    visibility,
    __typename
}) => {
    console.log(componentType,'from option')
    const optionComponentMappings = {
        RadioGroup : RadioButtonCircle,
        ButtonGroup:radio,
        Dropdown: ProductDetailsSection
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
        />
    ) : (
        <h2>{`Missing component for type: ${componentType}`}</h2>
    );
};

export default Option;