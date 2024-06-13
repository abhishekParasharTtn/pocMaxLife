import DateInput from "@/app/feature/component/element/DateInput/DateInput";
import PhoneNumber from "@/app/feature/component/element/phoneNumber/phoneNumber";
import Option from "../component/element/options/option";
import Input from "../component/element/Input/Input";
import buttonGroup from "@/app/feature/component/ButtonGroup";
import DeclarationCheckbox from "@/app/feature/component/element/declarationAcceptance/checkbox";
import ToggleSwitch from "@/app/feature/component/element/toggleSwitch/toggleswitch";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { productPageService } from "@/app/services/ruleEngine/productPageService";

var _facts = {}
const FieldComponent = ({
    component,
    formName,
    pageRoute,
    utmConfig,
    disabled,
    page
}) => {

    const [visibility, setVisibility] = useState(component?.visibility);
    const [isDisabled, setIsDisabled] = useState(disabled);
    // const [isDiable, setIsDisable] = useState(false);
    const formData = useSelector((state) => state.forms?.[page?.name]);
    // const isVis
    console.log("FieldComponent ===================>", formData, component, page)
    const ComponentMappings = {
        ComponentUiOption: Option,
        ComponentFormInput: Input,
        ComponentFormDobSingleInput: DateInput,
        ComponentFormPhoneNumber: PhoneNumber,
        ComponentUiButton: buttonGroup,
        ComponentUiCheckbox: DeclarationCheckbox,
        ComponentUiToggleSwitch: ToggleSwitch,
    };

    const journeyType = utmConfig?.journeyType

    const FieldComponent = ComponentMappings[component?.__typename];

    const myFunction = async () => {
        try {
            _facts = {
                ..._facts,
                [component.name]: false,
                nationality: true
            }
            // console.log("::component", component.rules, _facts);
            formData && Object.keys(formData).forEach(key => {
                if (formData?.[key]) {
                    _facts[key] = formData?.[key]
                }
            });
            const rulesData = await productPageService.productFormRules(component.rules, _facts, component?.name);
            return rulesData;

        } catch (err) {
            console.error(err)
        }
    };
    useEffect(() => {
        if (component?.rules?.length > 0) {
            myFunction().then((rulesData) => {
                debugger
                if (rulesData && rulesData?.finalOutput?.length > 0) {
                    rulesData?.finalOutput?.forEach(finalOutput => {
                        setIsDisabled(finalOutput?.isDisable)
                        setVisibility(finalOutput?.isVisible)
                    });
                } else {
                    setIsDisabled(disabled)
                    setVisibility(component?.visibility)
                }
            });
        }
    }, [formData]);


    return FieldComponent && (visibility || component?.__typename === "ComponentUiButton") ? (
        <FieldComponent
            component={component}
            formName={formName}
            pageRoute={pageRoute}
            utmConfig={utmConfig}
            journeyType={journeyType}
            disabled={isDisabled}
        />
    ) : (
        <div>

        </div>
    )
};

export default FieldComponent;