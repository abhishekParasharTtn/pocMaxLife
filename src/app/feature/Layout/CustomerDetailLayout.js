import React from "react";
import Section from "../Section/Section";
import { extractDetailsSection, extractRoute } from "@/app/services/util";

const CustomerDetailLayout = ({ themeConfig, utmConfig, page, formName }) => {
  const pageRoute = {
    prev: page?.previous,
    next: page?.next,
  };
  const sectionHandler = () => {
    return page?.sections.map((section, index) => {
      return (
        <Section
          key={index}
          themeConfig={themeConfig}
          utmConfig={utmConfig}
          section={section}
          page={page}
          formName={formName}
          pageRoute={pageRoute}
        />
      );
    });
  };
  return (
    <div className=" bg-default px-8 py-6 w-7/12 h-fit">
      {/*<div className="text-center col-span-2">{pageData.title}</div>*/}
      {sectionHandler()}
    </div>
  );
};

export default CustomerDetailLayout;
