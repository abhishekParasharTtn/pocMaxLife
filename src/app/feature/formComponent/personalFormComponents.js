import Section from "@/app/feature/Section/Section";
import { useRouter } from 'next/navigation'
import React from "react";
import Component from "@/app/feature/component/Component";

const PersonalFormComponents = ({ themeConfig, utmConfig, section, pages,formName,pageRoute }) => {
  const router = useRouter();
  const backHandler = (e) => {
    console.log('backhandler');
  
    router.back();
  }
  return (
    <>
    <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-primary hover:text-white" onClick={backHandler} >
    Back
  </button>
    <div className="">
      {section?.forms?.length > 0 &&
        section?.forms.map((form, index) => {
          return <div className="form-container mb-20" style={{background: "#f9f9f9", padding: "20px 20px 40px"}}>
            <h1 class="text-lg mb-8">{form?.form?.title}</h1>
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