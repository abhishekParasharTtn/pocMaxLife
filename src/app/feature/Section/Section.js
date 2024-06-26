import React from 'react';
import RadioButtonField from '@/app/feature/component/element/Genderradio/radio';
import Input from '@/app/feature/component/element/Input/Input';
import DateInput from '@/app/feature/component/element/DateInput/DateInput';
import PhoneNumber from '@/app/feature/component/element/phoneNumber/phoneNumber';
import Button from '@/app/feature/component/element/Button/Button';
import DeclarationCheckbox from "@/app/feature/component/element/declarationAcceptance/checkbox";
import ToggleSwitch from "@/app/feature/component/element/toggleSwitch/toggleswitch";
import RadioButtonCircle from "@/app/feature/component/element/Circleradio/radiocircle";

const Section = ({ themeConfig, utmConfig, page, sectionData }) => {
  const {
    title,
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
  } = page;

  console.log('__typeName:', __typename, page);

  const sectionComponentMappings = {
    ComponentUiOption: RadioButtonCircle,
    ComponentFormPhoneNumber: PhoneNumber,
    ComponentFormInput: Input,
    ComponentFormDobSingleInput: DateInput,
    ComponentUiButton: Button,
    ComponentUiCheckbox: DeclarationCheckbox,
    ComponentUiToggleSwitch: ToggleSwitch,
  };

  const SectionComponent = sectionComponentMappings[page?.__typename];

  console.log('SectionComponent:', SectionComponent);

  return SectionComponent ? (
      <SectionComponent
          title={title}
          label={label}
          visibility={visibility}
          name={name}
          dataFilter={dataFilter}
      />
  ) : (
      <h2>{`Missing component for type: ${componentType}`}</h2>
  );
};

export default Section;
