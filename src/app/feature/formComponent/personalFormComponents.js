import Section from "@/app/feature/Section/Section";
import React from "react";
import Component from "@/app/feature/component/Component";

const PersonalFormComponents = ({ themeConfig, utmConfig, section, pages }) => {
  return (
    <>
      {section?.forms?.length > 0 &&
        section?.forms.map((form) => {
          return <div className="form-container">
            <Component
              themeConfig={themeConfig}
              utmConfig={utmConfig}
              // section={section}
              // pages={pages}
              form={form}
            />
          </div>
        })
      }
    </>
  );
}

export default PersonalFormComponents;