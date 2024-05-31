import React from 'react'
import Section from '../Section/Section';
import { extractDetailsSection } from '@/app/services/util';

const PersonalDetailLayout = ({themeConfig,utmConfig,page}) => {
    const pageData = extractDetailsSection(page,"personalDetails")


    const sectionHandler = () => {
        return ( pageData.components.map((data) => {
         return <Section
          themeConfig={themeConfig}
          utmConfig={utmConfig}
          page={data}
          />
        })
    )
       
      };
    return (
        <div className='bg-default px-8 pt-6 w-2/4'>
            <div className='text-center mb-8'>{pageData.title}</div>
            <div>
                <div className={'grid grid-cols-2 gap-4'}> {sectionHandler()}</div>
            </div>
        </div>

    )
}

export default PersonalDetailLayout