import Section from "@/app/feature/Section/Section";
import React from "react";
import Component from "@/app/feature/component/Component";
import PersonalFormComponents from "@/app/feature/formComponent/personalFormComponents";
import dynamic from "next/dynamic";
import ButtonGroup from "../component/SectionFooterButton";


const Form = ({ themeConfig, utmConfig, section }) => {


  const personalFormComponents = dynamic(() => import('../formComponent/personalFormComponents'));
  const customerFormComponents = dynamic(() => import('../formComponent/customerFormComponents'));

  const FormMappingLayout = {
    PersonalDetailsFormLayout: personalFormComponents,
    CustomerDetailsFormLayout: customerFormComponents
  }
  const FormMapping = FormMappingLayout[section?.layout?.layout?.name] || null;


  return FormMapping ? (
    <form className={'col-span-2'}>
      <FormMapping
        themeConfig={themeConfig}
        utmConfig={utmConfig}
        section={section}
      // pages={pages}
      />
      {
        section?.button?.length > 0 ?
          <div className='Section-footer'>
            {
              section.button.map((button, index) => {
                return <ButtonGroup
                  key={index}
                  button={button}
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