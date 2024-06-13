import React from "react";
import dynamic from "next/dynamic";
// import Button from '../component/element/Button/Button';
const formLayout = dynamic(() => import("../formLayout/Form"));

const Section = ({ utmConfig, section, formName, pageRoute, dataConfigs, page }) => {
  const sectionComponentMappings = {
    ComponentContainerFormContainer: formLayout,
  };

  const SectionComponent = sectionComponentMappings[section?.__typename];
  return (
    <>
      {SectionComponent ? (
        <SectionComponent
          section={section}
          formName={formName}
          pageRoute={pageRoute}
          utmConfig={utmConfig}
          dataConfigs={dataConfigs}
          page={page}
        />
      ) : (
        <h2>{`Missing section for type:`}</h2>
      )}
    </>
  );
};

export default Section;
