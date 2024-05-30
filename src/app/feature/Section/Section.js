import Form from "../Form.js/Form";
import RadioButtonField from "@/app/feature/component/element/Radio/radio";
import Input from "@/app/feature/component/element/Input/Input";
import DateInput from "@/app/feature/component/element/DateInput/DateInput";
import PhoneNumber from "@/app/feature/component/element/phoneNumber/phoneNumber";
import Button from "@/app/feature/component/element/Button/Button";
const Section = ({
  themeConfig,
  utmConfig,
  page,
  sectionData
}) => {
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
    visibility} = page

  const sectionComponentMappings = {
    ComponentUiOption: RadioButtonField,
    ComponentFormInput: Input,
    ComponentFormDobSingleInput:DateInput,
    ComponentFormPhoneNumber: PhoneNumber,
    ComponentUiButton: Button,
  };
  const SectionComponent = sectionComponentMappings[componentType];

  return  SectionComponent ? (
      <>
        <SectionComponent
            title={title}
            label={label}
            visibility={visibility}
            name={name}
            dataFilter={dataFilter}

        />
      </>
  ) : (
      <h2>Missing component</h2>
  );
}

export default Section;