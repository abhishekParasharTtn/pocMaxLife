import React from "react";
import dynamic from "next/dynamic";
import ButtonGroup from "../component/ButtonGroup";

const Form = ({ themeConfig, utmConfig, section, formName, pageRoute }) => {
  const personalFormComponents = dynamic(() =>
    import("../formComponent/personalFormComponents")
  );
  const customerFormComponents = dynamic(() =>
    import("../formComponent/customerFormComponents")
  );

  const FormMappingLayout = {
    PersonalDetailsFormLayout: personalFormComponents,
    CustomerDetailsFormLayout: customerFormComponents,
  };
  const FormMapping = FormMappingLayout[section?.layout?.layout?.name] || null;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return FormMapping ? (
    <form onSubmit={handleFormSubmit}>
      <FormMapping
        themeConfig={themeConfig}
        utmConfig={utmConfig}
        section={section}
        formName={formName}
        pageRoute={pageRoute}
      />
      {section?.button?.length > 0 ? (
        <div className="Section-footer flex flex-row-reverse">
          {section.button.map((button, index) => {
            return (
              <ButtonGroup
                key={index}
                button={button}
                pageRoute={pageRoute}
                formName={formName}
              />
            );
          })}
        </div>
      ) : null}
    </form>
  ) : (
    <>not found</>
  );
};

export default Form;
