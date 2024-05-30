import React from 'react'
import Section from '../Section/Section';
import Component from '../component/Component';
import { extractDetailsSection } from '@/app/services/util';

const PersonalDetailLayout = ({themeConfig,utmConfig,page}) => {
    const pageData = extractDetailsSection(page,"personalDetails")

    console.log(pageData,'pageData-')
    const sectionHandler = () => {
        return ( pageData.components.map((data) => {
            // console.log(data,'data')
          
         return <Section
          themeConfig={themeConfig}
          utmConfig={utmConfig}
          page={data}
          />
        })
    )
       
      };
    return (
        <>
        <div>{pageData.title}</div> 
        {sectionHandler()}
        </>
     
    )
}

export default PersonalDetailLayout