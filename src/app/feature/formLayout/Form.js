import React from "react";
import dynamic from "next/dynamic";
import ButtonGroup from "../component/ButtonGroup";


const Form = ({ themeConfig, utmConfig, section, formName, pageRoute }) => {


  const personalFormComponents = dynamic(() => import('../formComponent/personalFormComponents'));
  const customerFormComponents = dynamic(() => import('../formComponent/customerFormComponents'));

  const FormMappingLayout = {
    PersonalDetailsFormLayout: personalFormComponents,
    CustomerDetailsFormLayout: customerFormComponents
  }
  const FormMapping = FormMappingLayout[section?.layout?.layout?.name] || null;

  return FormMapping ? (
    <form>
        <FormMapping
          themeConfig={themeConfig}
          utmConfig={utmConfig}
          section={section}
          formName={formName}
          pageRoute={pageRoute}
        />
        {
          section?.button?.length > 0 ?
            <div className='Section-footer'>
              {
                section.button.map((button, index) => {
                  return <ButtonGroup
                    key={index}
                    button={button}
                    pageRoute={pageRoute}
                  />
                })
              }
            </div> :
            null
        }
    </form>
  ) : (
    <>not found</>
  )

}

export default Form