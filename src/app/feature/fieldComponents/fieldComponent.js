import DateInput from "@/app/feature/component/element/DateInput/DateInput";
import PhoneNumber from "@/app/feature/component/element/phoneNumber/phoneNumber";
import Option from "../component/element/options/option";
import Input from "../component/element/Input/Input";
import buttonGroup from "@/app/feature/component/ButtonGroup";
import DeclarationCheckbox from "@/app/feature/component/element/declarationAcceptance/checkbox";
import ToggleSwitch from "@/app/feature/component/element/toggleSwitch/toggleswitch";

const FieldComponent = ({
    component,
    formName,
    pageRoute,
    utmConfig,
   

}) => {
    
    const ComponentMappings = {
        ComponentUiOption: Option,
        ComponentFormInput: Input,
        ComponentFormDobSingleInput: DateInput,
        ComponentFormPhoneNumber: PhoneNumber,
        ComponentUiButton: buttonGroup,
        ComponentUiCheckbox:DeclarationCheckbox,
        ComponentUiToggleSwitch: ToggleSwitch,
    };

    const journeyType  = utmConfig?.journeyType

    const FieldComponent = ComponentMappings[component?.__typename];
    return FieldComponent ? (
        <FieldComponent
            component={component}
            formName={formName}
            pageRoute={pageRoute}
            utmConfig={utmConfig}
            journeyType={journeyType}
        />
    ) : (
        <div>

        </div>
    )
};

export default FieldComponent;