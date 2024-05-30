import DateInput from "./element/DateInput/DateInput";
import Button from "./element/Button/Button";
import Input from "./element/Input/Input";
import RadioButtonField from "./element/Radio/radio";
import PhoneNumber from "@/app/feature/component/element/phoneNumber/phoneNumber";
const Component = ({

  themeConfig,
  utmConfig,
  page,
  section
  
}) => {

    console.log(page,'from form')

    const sectionComponentMappings = {
        ComponentUiOption: RadioButtonField,
        ComponentFormInput: Input,
        ComponentFormDobSingleInput:DateInput,
        ComponentFormPhoneNumber: PhoneNumber,
        ComponentUiButton: Button,
    };
    const SectionComponent = sectionComponentMappings[section?.__typename];


    return SectionComponent ? (
        <>
            <SectionComponent
                navigation={navigation}
                {...sectionData}
                popUps={popUps}
                name={sectionData?.fieldName?.name || sectionData?.name}
                route={route}
                dataConfig={dataConfig}
                pageConfig={pageConfig}
                journeyInfo={journeyInfo}
                utmConfig={utmConfig}
                appConfig={appConfig}
                linkAction={linkAction}
                globalErrorMessage={globalErrorMessage}
                onValueChange={onChangeHandler}
                summaryData={summaryData}
                toggle={customData.status}
                productPlan={productPlan}
                saveTag={saveTag}
                handleOptionClick
                renderForm={renderForm}
                openPopUpId={openPopUpId}
            />
        </>
    ) : (
        <h2>Missing component</h2>
    );
}

export default Component;