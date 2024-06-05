import React from 'react';
import dynamic from "next/dynamic";


const Section = ({ themeConfig, utmConfig, section, pages }) => {

  const formLayout = dynamic(() =>
      import('../formLayout/Form')
  );

  const sectionComponentMappings = {
    ComponentContainerFormContainer:formLayout
  };

  const SectionComponent = sectionComponentMappings[section?.__typename];

  return SectionComponent ? (
      <SectionComponent
          themeConfig={themeConfig}
          utmConfig={utmConfig}
          pages={pages}
          section={section}
      />
  ) : (
      <h2>{`Missing section for type:`}</h2>
  );
};

export default Section;
