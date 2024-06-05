import Section from "@/app/feature/Section/Section";
import React from "react";
import Component from "@/app/feature/component/Component";
import PersonalFormComponents from "@/app/feature/formComponent/personalFormComponents";
import dynamic from "next/dynamic";

const Form = ({themeConfig, utmConfig, section, pages}) => {


const personalFormComponents =  dynamic(()=>import('../formComponent/personalFormComponents'));
const customerFormComponents =  dynamic(()=>import('../formComponent/customerFormComponents'));

  const FormMappingLayout = {
    PersonalDetailsFormLayout:personalFormComponents,
    CustomerDetailsFormLayout:customerFormComponents
  }
  const FormMapping = FormMappingLayout[section?.layout?.layout?.name] || null;


  return FormMapping ? (
      <form>
        <div className="form-container">
          <FormMapping themeConfig={themeConfig} utmConfig={utmConfig} section={section} pages={pages} />
        </div>
      </form>
  ) :(
      <>not found</>
  )

}

export default Form