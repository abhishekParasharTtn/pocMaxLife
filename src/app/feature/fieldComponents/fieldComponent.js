import DateInput from "@/app/feature/component/element/DateInput/DateInput";
import PhoneNumber from "@/app/feature/component/element/phoneNumber/phoneNumber";
import Option from "../component/element/options/option";
import Input from "../component/element/Input/Input";
import buttonGroup from "@/app/feature/component/ButtonGroup";

const FieldComponent = ({
    // section,
    // pages,
    component,
    // form
}) => {

    const ComponentMappings = {
        ComponentUiOption: Option,
        ComponentFormInput: Input,
        ComponentFormDobSingleInput: DateInput,
        ComponentFormPhoneNumber: PhoneNumber,
        ComponentUiButton: buttonGroup,
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