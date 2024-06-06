import Section from "@/app/feature/Section/Section";
import React from "react";
import Component from "@/app/feature/component/Component";

const PersonalFormComponents = ({ themeConfig, utmConfig, section, pages }) => {
  // console.log("FORM", form)
  return (
    <div className="">
      {section?.forms?.length > 0 &&
        section?.forms.map((form, index) => {
          return <div className="form-container mb-20">
            <h1 class="text-lg mb-4">{form?.form?.title}</h1>
            <Component
              key={index}
              themeConfig={themeConfig}
              utmConfig={utmConfig}
              // section={section}
              // pages={pages}
              form={form}
            />
          </div>
        })
      }
    </div>
  );
}

export default PersonalFormComponents;