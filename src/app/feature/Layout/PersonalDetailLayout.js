import React from "react";
import Section from "../Section/Section";
import { extractDetailsSection, extractRoute } from "@/app/services/util";

const PersonalDetailLayout = ({ themeConfig, utmConfig, page, formName }) => {
  const pageRoute = {
    prev: page?.previous,
    next: page?.next,
  };

  const sectionHandler = () => {
    return (
      <>
        {page?.sections?.length > 0 &&
          page.sections.map((section, index) => {
            return (
              <Section
                key={index}
                themeConfig={themeConfig}
                utmConfig={utmConfig}
                section={section}
                formName={formName}
                pageRoute={pageRoute}
                // page={page}
              />
            );
          })}
      </>
    );
  };

  return (
<<<<<<< HEAD
    <div className='bg-default px-8 pt-6 w-7/12'>
      <div className={''}> {sectionHandler()}</div>
=======
    <div className="bg-default px-8 pt-6 w-2/4 h-fit">
      <div className={""}> {sectionHandler()}</div>
>>>>>>> 5ee07588126028e49b2f5298a3d7599d8ac54c69
    </div>
  );
};

export default PersonalDetailLayout;
