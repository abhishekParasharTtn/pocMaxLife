import React from 'react';
import dynamic from "next/dynamic";
// import Button from '../component/element/Button/Button';
const formLayout = dynamic(() =>
  import('../formLayout/Form')
);

const Section = ({
  // themeConfig, 
  // utmConfig, 
  section,
  // page
}) => {


  const sectionComponentMappings = {
    ComponentContainerFormContainer: formLayout
  };

  const SectionComponent = sectionComponentMappings[section?.__typename];
  return (
    <>
      {
        SectionComponent ?
          <SectionComponent
            // themeConfig={themeConfig}
            // utmConfig={utmConfig}
            // page={page}
            section={section}
          /> :
          <h2>{`Missing section for type:`}</h2>
      }
    </>
  )
};

export default Section;
