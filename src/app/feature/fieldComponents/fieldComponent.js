import RadioButtonField from "@/app/feature/component/element/Genderradio/radio";
import DateInput from "@/app/feature/component/element/DateInput/DateInput";
import PhoneNumber from "@/app/feature/component/element/phoneNumber/phoneNumber";
import Option from "../component/element/options/option";
import Input from "../component/element/Input/Input";
import Button from "../component/element/Button/Button";

const FieldComponent = ({
    // section,
    // pages,
    component,
    // form
}) => {

    // console.log(component, 'field component')
    const ComponentMappings = {
        ComponentUiOption: Option,
        ComponentFormInput: Input,
        ComponentFormDobSingleInput: DateInput,
        ComponentFormPhoneNumber: PhoneNumber,
        ComponentUiButton: Button,
    };
    const FieldComponent = ComponentMappings[component?.__typename];
    return FieldComponent ? (
        <FieldComponent
            component={component}
        // form={form}
        // section={section}
        // pages={pages}
        />
    ) : (
        <div>

        </div>
    )
};

export default FieldComponent;