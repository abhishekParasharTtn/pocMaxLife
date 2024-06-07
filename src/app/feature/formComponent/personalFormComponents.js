import Section from "@/app/feature/Section/Section";
import { useRouter } from 'next/navigation'
import React from "react";
import Component from "@/app/feature/component/Component";

const PersonalFormComponents = ({ themeConfig, utmConfig, section, pages,formName,pageRoute }) => {
  const router = useRouter();
  const backHandler = (e) => {
    e.preventDefault();
    router.back();
  }
  return (
    <>
    <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-primary hover:text-white" onClick={backHandler}>
    Back
  </button>
    <div className="">
      {section?.forms?.length > 0 &&
        section?.forms.map((form, index) => {
          return <div className="form-container mb-20">
            <h1 className="text-lg mb-11">{form?.form?.title}</h1>
            <Component
              key={index}
              themeConfig={themeConfig}
              utmConfig={utmConfig}
              form={form}
              formName={formName}
              pageRoute={pageRoute}
            />
          </div>
        })
      }
    </div>
    </>
  );
}

export default PersonalFormComponents;